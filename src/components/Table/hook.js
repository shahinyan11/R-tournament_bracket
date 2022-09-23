import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import _debounce from 'lodash/debounce';

import buildTableData from "../../utils/buildTableData";
import buildRoundMatches from "../../utils/buildRoundMatches";
import createRandomPlayers from "../../utils/createRandomPlayers";
import {setDataAction, setRoundListAction} from "../../redux/actions";

function useContainer() {
    const dispatch = useDispatch()
    const {roundList} = useSelector(state => state.mainReducer);
    const [players, setPlayers] = useState([])
    const [count, setCount] = useState(0)
    const [winner, setWinner] = useState('')
    const [scalable, setScalable] = useState(false)

    useEffect(() => {
        if (count % 2 > 0) return

        setPlayers(createRandomPlayers(count))

        const {data, rounds} = buildTableData(count)

        dispatch(setDataAction(data))
        dispatch(setRoundListAction(rounds))

    }, [count])

    useEffect(() => {
        const keyDownHandler = event => {
            if (event.key === 'Meta') {
                setScalable(true)
            }
        };

        const keyUpHandler = event => {
            if (event.key === 'Meta') {
                setScalable(false)
            }
        };

        document.addEventListener('keydown', keyDownHandler);
        document.addEventListener('keyup', keyUpHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
            document.removeEventListener('keydown', keyUpHandler);
        };
    }, []);

    const handleChange = (e) => {
        _debounce(() => {
            if (e.target.value % 2 === 0) return

            toast.warn('Please select even numbers')
        }, 500)()

        setCount(e.target.value)
    }

    const toPlaceRandom = () => {
        // Shuffle players array
        const shuffledList = [...players].sort(() => 0.5 - Math.random());
        // create random couples

        roundList[0] = buildRoundMatches(shuffledList, roundList[0])

        dispatch(setRoundListAction(roundList))
    }

    return {
        count,
        winner,
        scalable,
        roundList,
        handleChange,
        toPlaceRandom,
        tableVisible: players.length > 0
    };
}

export default useContainer;
