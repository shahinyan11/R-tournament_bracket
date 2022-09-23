import {MEMBER_BOX_SIZE} from "../constants";
import getRatioByColumnNumber from "./getRatioByColumnNumber";

const getLinePosition = (columnNumber) => {
    const ratio = getRatioByColumnNumber(columnNumber)
    let {height, margin} = MEMBER_BOX_SIZE

    const position = ratio * margin  + (ratio * height / 2);

    return {
        top: `${position}px`,
        bottom: `${position}px`,
    }
}

export default getLinePosition
