import React, { Component } from 'react'
import QuestionCard from './QuestionCard'

class Home extends Component {
    state={
        activeTab: ''
    }
     Activate = (tab)=>{
        if(tab === '1'){
            this.setState({activeTab: '1'})
        }else if(tab === '2' ){
            this.setState({activeTab: '2'})

        }
    }
    render() {
        return (
            <div >
               <table >
                   <thead>
                    <tr>
                        {/* <th  > Unanswered Questions </th>
                        <th >Answered Questions</th> */}
                        <th onClick={() => this.Activate('1')} className={this.state.activeTab === '1' ? "tactive" : "" }> Unanswered Questions </th>
                        <th onClick={() => this.Activate('2')} className={this.state.activeTab === '2' ? "tactive" : "" }>Answered Questions</th>
                    </tr>
                   </thead>

                   <tbody>     
                        <tr>
                            <td colSpan="2"> <QuestionCard/> </td>
                            
                        </tr>
                        <tr>
                            <td colSpan="2"> <QuestionCard/> </td>
                            
                        </tr>
                        <tr>
                            <td colSpan="2"> <QuestionCard/> </td>
                            
                        </tr>
                   </tbody>     
               </table>
            </div>
        )
    }
}

export default Home
