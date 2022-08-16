const concatArrays = (x,...y) => {
    let onaArr = [...y].flat(Infinity);
    let noDupArr = [...new Set(onaArr)];
    let noXcharArr = noDupArr.filter((item) => !item.includes(x));
    let retArr = noXcharArr.map((item) => item.trimEnd());
    return retArr;
}

export default concatArrays;