import React from 'react';
import useContainer from "./hook";
import getDynamicBoxStyle from "../../helpers/getDynamicBoxStyle";

const PlayerBox = ({player, draggable, columnNumber}) => {
    const {handleDrag, handleDrop} = useContainer({player, draggable})

    return (
        <div
            className={'player-box'}
            style={getDynamicBoxStyle(columnNumber)}
            draggable={draggable}
            onDragOver={(ev) => ev.preventDefault()}
            onDragStart={handleDrag}
            onDrop={handleDrop}
        >
            <span>{player?.name}</span>
        </div>
    );
};

export default PlayerBox;
