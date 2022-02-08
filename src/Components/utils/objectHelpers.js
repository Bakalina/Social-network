export const objectHelpers = (items, itemId, objPropName, newObgProp) => {
    return items.map(el => {
        if (el[objPropName] === itemId) {
            return {...el, ...newObgProp};
        }
        return el;
    });
};