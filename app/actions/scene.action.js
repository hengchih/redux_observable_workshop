import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'

import 'rxjs/add/observable/interval'

export const SET_CLICKED_HOLE_ID = 'SET_CLICKED_HOLE_ID';
export const INIT_SCENE = 'INIT_SCENE';
export const SET_MOUSE_HOUSE_ID = 'SET_MOUSE_HOUSE_ID';
export const SET_SCORE = 'SET_SCORE';
export const TOUCH_MOUSE = 'TOUCH_MOUSE';

export const initScene = () => ({type: INIT_SCENE});
export const setMouseHouseId = (id) => ({type: SET_MOUSE_HOUSE_ID, id});
export const setScore = (score) => ({type: SET_SCORE, score});
export const setClickedHoleId = (id) => ({type: SET_CLICKED_HOLE_ID, id});
export const touchMouse = (id) => ({type: TOUCH_MOUSE, id});

export const initSceneEpic = (action$, store) => {
    return action$.ofType(INIT_SCENE)
        .mergeMap(action => Observable.interval(1000))
        .take(10)
        .map(time => setMouseHouseId(Math.floor(Math.random() * 7)));
};

export const touchMouseEpic = (action$, store) => {
    return action$.ofType(TOUCH_MOUSE)
        .map(({id}) => {
            const currentScore = store.getState().scene.score;
            const currentMouseHouseId = store.getState().scene.mouseHouseId;
            if (id === currentMouseHouseId) {
                return setScore(currentScore + 10);
            } else {
                return setScore(currentScore)
            }
        })
}


