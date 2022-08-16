//lower case file because it is not a component

//will start off with the initial state (what the data layer looks like)
export const initialState = {
    term:null
}

//whenever we want to change the data layer, we need to dispatch an action
export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
} 

//state is the state of the data layer
//action is whatever we are dispatching into the data layer

const reducer = (state,action) => {
    console.log(action)
    //listens to any dispatch actions
    switch (action.type) {
        //we know what the action is, will return what the new data layer is
        case actionTypes.SET_SEARCH_TERM:
        return {
            ...state,
            //change the term with whatever action term that was dispatched
            term: action.term,
        }

        //if we dont know what the dispatch action was, it just returns
        //the initial state
        default:
            return state;
        }
    }
    export default reducer
