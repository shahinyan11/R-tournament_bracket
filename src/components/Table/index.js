import React from 'react';
import {TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";

import Match from "../Match";
import useContainer from "./hook";
import MemberBox from "../PlayerBox";

const Table = () => {
    const {
        roundList,
        count,
        winner,
        scalable,
        tableVisible,
        handleChange,
        toPlaceRandom
    } = useContainer()

    return (
        <div className={'table'}>
            <div className={'inputContainer'}>
                <input
                    type="number"
                    value={count}
                    onChange={handleChange}
                />
                {tableVisible &&
                    <button onClick={toPlaceRandom}>
                        To place random
                    </button>
                }
            </div>
            {tableVisible &&
                <TransformWrapper
                    disabled={!scalable}
                    minScale={0.2}
                    centerZoomedOut={true}
                >
                    <TransformComponent>
                        <div className={'tree'}>
                            {roundList.map((round, index) => (
                                <div key={index} className={'colum'}>
                                    {round.map((item) => (
                                        <Match
                                            key={item.id}
                                            columnNumber={index}
                                            draggable={index === 0}
                                            {...item}
                                        />
                                    ))}
                                </div>
                            ))}
                            <div className={'colum'}>
                                <MemberBox name={winner} columnNumber={roundList.length}/>
                            </div>
                        </div>
                    </TransformComponent>
                </TransformWrapper>
            }
        </div>
    );
};

export default Table;
