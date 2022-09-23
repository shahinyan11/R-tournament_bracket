import { v4 as uuidv4 } from 'uuid';

const buildTableData = (playersCount, isFirstRound = true) => {
    let rounds = []
    const roundName  = `1/${playersCount}`
    const data = {
        id: uuidv4(),
        name: roundName,
        players: [],
    }

    playersCount = playersCount % 2 > 0 ? +playersCount + 1 : playersCount

    // nextCount is a count of players in next round
    const nextCount = playersCount / 2

    if(nextCount > 1){
        const builtData = buildTableData(nextCount, false)

        data.children = builtData.data
        rounds = [...builtData.rounds]
    }

    for(let i = 1; i <= nextCount; i++){
        data.players.push({
            id: uuidv4(),
            playerA: {},
            playerB: {}
        })
    }

    rounds = [data.players, ...rounds]

    return {
        data,
        rounds
    }
}

export default buildTableData
