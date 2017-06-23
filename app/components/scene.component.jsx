import * as React from 'react';
import {connect} from 'react-redux';
const holeIdList = [1, 2, 3, 4, 5, 6];
const SceneComponent = ({score, mouseHouseId, touchMouseFn}) => {
    return <div>
        <h2 className="score">{score}</h2>
        <ul className="hole-container">
            {
                holeIdList.map((id) => {
                    let holeState;
                    if (id === mouseHouseId) {
                        holeState = 'mouse-house';
                    } else {
                        holeState = 'normal';
                    }
                    return <li key={id} id={id} className={`hole ${holeState}`}>
                        <img className="mouse"
                             src="http://www.pokemon-sunmoon-cn.com/tc/common/images/pokemon/161114_01/evolution.png"
                             onClick={() => touchMouseFn(id)}/>
                    </li>
                })
            }
        </ul>
    </div>
};

export const sceneFn = (mapStateToProps, mapDispatchToProps) => connect(mapStateToProps, mapDispatchToProps)(SceneComponent);