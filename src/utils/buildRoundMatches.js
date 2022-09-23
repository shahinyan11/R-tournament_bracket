import chunk from "lodash/chunk";

const buildRoundMatches = (players, matches) => {
    chunk(players, 2).forEach(([playerA, playerB], index)=>{
        matches[index].playerA = playerA;
        matches[index].playerB = playerB;
    })

    return [...matches]
}

export default buildRoundMatches
