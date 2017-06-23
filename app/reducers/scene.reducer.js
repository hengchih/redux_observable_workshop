import {SET_CLICKED_HOLE_ID, SET_MOUSE_HOUSE_ID , SET_SCORE} from '../actions/scene.action'

export const scene = (state = {clickedId: -1, mouseHouseId: -1, score: 0}, action) => {
    switch (action.type) {
        case SET_CLICKED_HOLE_ID:
            return {...state, clickedId: action.id};
        case SET_MOUSE_HOUSE_ID:
            return {...state, mouseHouseId: action.id};
        case SET_SCORE:
            return {...state, score: action.score};
        default:
            return state;
    }
};
