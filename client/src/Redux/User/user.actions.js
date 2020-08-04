export const userActionTypes = {
    AUTH_USER: 'AUTH_USER',
    LOG_OUT: 'LOG_OUT'

}

export const authUser = ({id, name, email}) =>{
    return({
        type: userActionTypes.AUTH_USER,
        payload: {id, name, email}
    })
}

export const logUserOut = () =>{
    return({
        type: userActionTypes.LOG_OUT
    })
}