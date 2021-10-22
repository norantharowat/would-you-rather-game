import React, { Component } from 'react'
import QuestionCard from './QuestionCard'

class Home extends Component {
    render() {
        return (
            <div>
               <table>
                   {/* <thead> */}
                    <tr>
                        <th>Unanswered Questions </th>
                        <th>Answered Questions</th>
                    </tr>
                   {/* </thead> */}

                   <tr>
                       <td colspan="2"> <QuestionCard/> </td>
                       
                   </tr>
                   <tr>
                       <td colspan="2"> <QuestionCard/> </td>
                       
                   </tr>
                   <tr>
                       <td colspan="2"> <QuestionCard/> </td>
                       
                   </tr>
               </table>
            </div>
        )
    }
}

export default Home
