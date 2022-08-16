
const johnDoe = {
    firstName: 'John',
    lastName: 'Doe'
};

const janeDoe = {
    firstName: 'Jane',
    lastName: 'Doe'
}


const objectsMerge = (...object) => {
    const objDet = { ...object};
    return objDet;
};


export default objectsMerge;
