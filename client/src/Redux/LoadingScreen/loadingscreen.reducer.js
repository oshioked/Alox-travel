const { loadingActionType } = require("./loadingsreen.actions");

const initialState = {
    display: 'true'
}


const loadingReducer = (state = initialState, action) =>{
    switch (action.type) {
        case loadingActionType.CHANGE_LOADING_DISPLAY:
            console.log('loading display is' + action.payload)
            return({
                display: action.payload
            })
        default:
            return state;
    }
}

export default loadingReducer;