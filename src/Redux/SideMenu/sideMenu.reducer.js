import {sideMenuTypes} from './sideMenu.types';

const initialState = {
    display: false
}

export const sideMenu = (state = initialState, action) =>{
    switch(action.type){
        case sideMenuTypes.TOOGLE_SIDE_MENU_DISPLAY:
            return({
                display: !state.display
            })
        default:
            return state
    }
}
