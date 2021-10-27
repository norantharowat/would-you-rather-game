import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { withRouter } from 'react-router'

class NewQuestion extends Component {
    state={
        optionOneText: '',
        optionTwoText: '',
    }

    handleChange = (e)=>{
        const value = e.target.value
        this.setState((state)=>({
            ...state,
            [e.target.name]: value,
        }))

    }

    handleSubmit = (e)=>{
        e.preventDefault()

        const {optionOneText , optionTwoText} = this.state

        if(optionOneText && optionTwoText){

            this.props.dispatch(handleAddQuestion(optionOneText , optionTwoText))
            this.props.history.push('/')
        }else{
            alert("Please enter the two options")
        }
    }
    render() {
        return (
            <div style={{marginTop: '10vh'}} className = 'question-card'>
                <div style={{textAlign: 'center'}} className = 'name'>
                   <span style={{fontSize: '1.5em'}}> Create New Question </span>
                </div>

                <div  className = 'card-body'>
                   

                    <div >
                        <h3 >Complete the question</h3>
                        <h2>Would you rather.... </h2>

                        <form onSubmit={this.handleSubmit}>

                            <input 
                            
                                placeholder="Enter option one text here"
                                className="new-question"
                                type='text'
                                name="optionOneText"
                                value = {this.state.optionOneText}
                                onChange ={this.handleChange}
                            
                            
                            /> 
                            
                            <h3> OR </h3>
                            
                            <input 

                                placeholder="Enter option two text here"
                                className="new-question"
                                type='text'
                                name="optionTwoText"
                                value = {this.state.optionTwoText}
                                onChange ={this.handleChange}
                            
                            />
                            <br/><br/>
                            
                            <button type="submit" className = 'b-pool'>Submit</button>
                        </form>
                    </div> 
                    
                </div>
            </div>
        )
    }
}

export default withRouter(connect()(NewQuestion))
