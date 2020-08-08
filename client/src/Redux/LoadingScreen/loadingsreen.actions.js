export const  loadingActionType = {
    CHANGE_LOADING_DISPLAY: "CHANGE_LOADING_DISPLAY"
}

export const setLoadingDisplay = (boolean) =>({
    type: loadingActionType.CHANGE_LOADING_DISPLAY,
    payload: boolean
})