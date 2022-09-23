import React from 'react';

import Line from "../Line";
import PlayerBox from "../PlayerBox";

const Match = ({playerA, playerB, columnNumber, draggable}) => {

    return (
        <div className={'match'}>
            {playerA &&
                <PlayerBox
                    player={playerA}
                    draggable={draggable}
                    columnNumber={columnNumber}
                />
            }
            {playerB &&
                <PlayerBox
                    player={playerB}
                    draggable={draggable}
                    columnNumber={columnNumber}/>
            }

            <Line columnNumber={columnNumber}/>
        </div>
    );
};

export default Match;
