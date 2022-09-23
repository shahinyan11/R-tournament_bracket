import {useDispatch, useSelector} from "react-redux";
import { toast } from 'react-toastify';

import buildRoundMatches from "../../utils/buildRoundMatches";
import {setActivePlayerAction, setRoundListAction} from "../../redux/actions";

function useContainer({player, draggable}) {
    const dispatch = useDispatch()
    const {roundList} = useSelector(state => state.mainReducer);
    const {activePlayer} = useSelector(state => state.mainReducer);

    const handleDrag = () => {
        dispatch(setActivePlayerAction(player))
    };

    const handleDrop = () => {
        if(!draggable) {
            toast.warn('Drag and drop works only for first round')
            return
        }

        let boxes = [];
        const dragId = activePlayer.id
        const dropId = player.id

        roundList[0].forEach((round) => {
            boxes = [...boxes, {...round.playerA}, {...round.playerB}]
        })

        const dragBox = boxes.find((box) => box.id === dragId);
        const dropBox = boxes.find((box) => box.id === dropId);

        const newBoxState = boxes.map((box) => {
            if (box.id === dragId) {
                return dropBox;
            }
            if (box.id === dropId) {
                return dragBox
            }

            return box;
        });

        roundList[0] = buildRoundMatches(newBoxState, roundList[0])

        dispatch(setRoundListAction(roundList))
    };

    return {
        handleDrag,
        handleDrop,
    };
}

export default useContainer;
