import {userActionTypes} from './user.types';

export const startSignIn = (signInData) =>(dispatch) =>{
    dispatch({type: userActionTypes.SIGN_IN_START});
    fetch('http://localhost:5000/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/JSON'},
        body: JSON.stringify({
            email: signInData.email,
            password: signInData.password
        })
    })
    .then((res)=> {
        if(res.status === 200){
           return res.json();
        }else{
            throw new Error('sigin failed')
        }
    })
    .then(userData =>{
        dispatch({type: userActionTypes.SIGN_IN_SUCCESS, payload: userData })
    })
    .catch(error =>{
        dispatch({type: userActionTypes.SIGN_IN_FAILURE, payload: error})
    })
}

export const startSignUp = (signUpData) =>(dispatch) =>{
    dispatch({type: userActionTypes.SIGN_UP_START});
    fetch('http://localhost:5000/register', {
        method: 'post',
        headers: {'Content-Type': 'application/JSON'},
        body: JSON.stringify({
            name: signUpData.name,
            email: signUpData.email,
            password: signUpData.password
        })
    })
    .then((res)=> {
        if(res.status === 200){
           return res.json();
        }else{
            throw new Error('register failed')
        }
    })
    .then(userData =>{
        dispatch({type: userActionTypes.SIGN_UP_SUCCESS, payload: userData })
    })
    .catch(error =>{
        dispatch({type: userActionTypes.SIGN_UP_FAILURE, payload: error})
    })

}

export const signOut = () =>({
    type: userActionTypes.SIGN_OUT,
})