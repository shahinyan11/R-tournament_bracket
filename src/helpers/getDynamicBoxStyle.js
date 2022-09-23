import {MEMBER_BOX_SIZE} from "../constants";
import getRatioByColumnNumber from "./getRatioByColumnNumber";

const getDynamicBoxStyle = (columnNumber) => {
    const ratio = getRatioByColumnNumber(columnNumber)
    let {height, margin} = MEMBER_BOX_SIZE

    const currentMargin = ratio === 0 ? margin : (ratio * margin  + (ratio * height / 2)) - 15;

    return {
        minHeight: `${height}px`,
        margin: `${currentMargin}px 0`
    }
}

export default getDynamicBoxStyle
