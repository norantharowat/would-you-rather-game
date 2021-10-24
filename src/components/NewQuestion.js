import React, { Component } from 'react'

class NewQuestion extends Component {
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
                        <form>
                            <input placeholder="Enter option one text here" className="new-question" type='text'/> 
                            <h3> OR </h3>
                            <input placeholder="Enter option two text here" className="new-question" type='text'/> <br/><br/>
                            <button type="submit" className = 'b-pool'>Submit</button>
                        </form>
                    </div> 
                    
                </div>
            </div>
        )
    }
}

export default NewQuestion
