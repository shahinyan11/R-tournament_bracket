const getRatioByColumnNumber = (columnNumber) => {
    return columnNumber ? Math.pow(2, columnNumber) : 1
}

export default getRatioByColumnNumber
