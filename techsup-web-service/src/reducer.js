export const initialState = {
    basket : []
};

// Adds to basket from data layer
const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        default:
            return state;
    }
};

export default reducer;
