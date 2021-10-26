import React, { Component } from 'react'
import QuestionCard from './QuestionCard'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

class Home extends Component {
    state={
        activeTab: '1'
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


                       { (this.state.activeTab === '1') ? 
                        
                        this.props.UnansweredIds.map((id)=> (
                            <tr key={id}>
                             <td colSpan="2">
                                {/* <Link to = {`/question/${id}`}> */}
                                    <QuestionCard id ={id} goTo={`/question/${id}`}/>
                                {/* </Link> */}
                            </td>
                            
                            </tr>

                        ))
                        
                        :
                        this.props.answeredIds.map((id)=> (
                            <tr key={id}>
                             <td colSpan="2"> <QuestionCard id ={id} goTo={`/question/${id}`}/> </td>
                            
                            </tr>

                        ))

                    }
                        {/* <tr>
                            <td colSpan="2"> <QuestionCard/> </td>
                            
                        </tr> */}
                        {/* <tr>
                            <td colSpan="2"> <QuestionCard/> </td>
                            {console.log(this.props.answeredIds)}
                            {console.log(this.props.Unanswered)}
                            
                        </tr>
                        <tr>
                            <td colSpan="2"> <QuestionCard/> </td>
                            
                        </tr> */}
                   </tbody>     
               </table>
            </div>
        )
    }
}
function mapStateToProps({ users , authedUser, questions }){
    const answered = Object.keys(Object.values(users).filter((user) => user.id === authedUser)[0].answers)
    const Unanswered = Object.keys(questions).filter((question) => (answered.indexOf(question) === -1) )

    console.log(Unanswered)
    return{
        answeredIds: answered.sort((a , b) => questions[b].timestamp - questions[a].timestamp ) ,
        UnansweredIds : Unanswered.sort((a , b) => questions[b].timestamp - questions[a].timestamp ),
       
         
    }
}

export default connect(mapStateToProps)(Home)
