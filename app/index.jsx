import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {combineEpics, createEpicMiddleware} from 'redux-observable'

import {sceneFn} from './components/scene.component'
import {initScene, initSceneEpic, setClickedHoleId, touchMouse, touchMouseEpic} from './actions/scene.action'
import {scene} from './reducers/scene.reducer'

const rootReducer = combineReducers({
    scene
});

const rootEpic = combineEpics(
    initSceneEpic,
    touchMouseEpic
);

const epicMiddleware = createEpicMiddleware(rootEpic, {
    dependencies: {}
});

const store = createStore(
    rootReducer,
    window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__'](),
    applyMiddleware(epicMiddleware)
);


const mapStateToProps = (state) => {
    return {
        clickedId: state.scene.clickedId,
        mouseHouseId: state.scene.mouseHouseId,
        score: state.scene.score
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        touchMouseFn: (id) => dispatch(touchMouse(id))
    }
};

const Scene = sceneFn(mapStateToProps, mapDispatchToProps);

render(
    <Provider store={store}>
        <Scene />
    </Provider>,
    document.getElementById('root')
);

store.dispatch(initScene());
