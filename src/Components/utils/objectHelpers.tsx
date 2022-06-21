import {UserType} from "../../types/types";


export const objectHelpers= (items: [] | UserType[], itemId: number, objPropName: keyof UserType , newObgProp: {}) => {
    debugger;
    return items.map(el => {
        if (el[objPropName] === itemId) {
            return {...el, ...newObgProp};
        }
        return el;
    });
};