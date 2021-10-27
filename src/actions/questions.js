import { _getQuestions } from "../utils/_DATA"
import {_saveQuestionAnswer} from '../utils/_DATA'
import {_saveQuestion} from '../utils/_DATA'
import { addUserAnswer } from "./users"
import { addUserQuestion } from "./users"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions){
   return {

       type: RECEIVE_QUESTIONS,
       questions, 
   }
   
}


export function handleReceiveQuestions() {
    return (dispatch) => {
        

        return _getQuestions().then((questions) => dispatch(receiveQuestions(questions)))
                .catch(()=> {console.log("Failed to receive questions")})
    }
}

export function answerQuestion({authedUser , qid , answer}){
    return{
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer,
    }

}

export function handleAnswerQuestion(info){

    return (dispatch) => {
        
        // const {authedUser} = getState()
        dispatch(answerQuestion(info))
        dispatch(addUserAnswer(info))

        return _saveQuestionAnswer(info)
        .catch((e) => {
            console.warn('Error in handleAnswerQuestion' , e)
            dispatch(answerQuestion(info))
            dispatch(addUserAnswer(info))
            alert('There was an error answering this question try again')
        })
       


        
    }
}

export function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion(optionOneText , optionTwoText){
    return (dispatch , getState)=>{
        const {authedUser} = getState()
        
        return _saveQuestion(
            { optionOneText,
              optionTwoText,
              author :authedUser,
            }
            ).then((question)=> 
            
            {

            dispatch(addQuestion(question))
            dispatch(addUserQuestion({authedUser , qid: question.id}))

            })
    }
}