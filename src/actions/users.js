import {_getUsers }from '../utils/_DATA'

export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUsers(users){
   return {

       type: RECEIVE_USERS,
       users, 
   }
   
}
export function addUserAnswer({authedUser , qid , answer}){
   return {

       type: ADD_USER_ANSWER,
       authedUser ,
       qid ,
       answer ,
   }
   
}

export function handleReceiveUsers() {
    return (dispatch) => {
        

        return _getUsers().then((users) => dispatch(receiveUsers(users)))
                .catch(()=> {console.log("Failed to receive users")})
    }
}