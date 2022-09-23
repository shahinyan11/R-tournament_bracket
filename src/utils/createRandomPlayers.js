import {v4 as uuidv4} from "uuid";

const createRandomPlayers = (count) => {
    const players = [];

    for(let i = 1; i <= count; i++){
        players.push({
            id: uuidv4(),
            name: `player_${i}`,
        })
    }

    return players
}

export default createRandomPlayers
