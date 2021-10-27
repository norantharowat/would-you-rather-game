import React, { Component } from 'react'
import LeaderBoardCard from './LeaderBoardCard'
import { connect } from 'react-redux'
class LeaderBoard extends Component {
    // state={
    //     rank: '',
    //     color: ''
    // }

    ranking = (UserIndex)=>{
        let result = {}
        switch(UserIndex){
            case 0:
                result = {rank: '1st' , color:'yellow'}
                break;
            case 1:
                result = {rank: '2nd' , color:'silver'}
                break;
            case 2:
                result = {rank: '3rd' , color:'	#CD7F32'}
                break;
            default:
                result = {rank: '' , color:''}

        }

        return result
    }
    render() {
        
        
        return (
            <div style={{paddingBottom:'8vh'}}>
                {/* <LeaderBoardCard rank='1st' color='yellow'/>
                <LeaderBoardCard rank='2st' color='silver'/> */}

                {this.props.rankedUsers.map((user)=> {

                    const UserIndex = this.props.rankedUsers.indexOf(user)
                    const result = this.ranking(UserIndex)

                   return <LeaderBoardCard key={user} id={user} rank={result.rank} color={result.color}/>
                })}
            </div>
        )
    }
}

function mapStateToProps({ users }){
    const rankedUsers = Object.keys(users)

    return{
        rankedUsers: rankedUsers.sort((a , b) => 
        
        (((users[b].questions).length + (Object.keys(users[b].answers)).length )
        >
        ((users[a].questions).length + (Object.keys(users[a].answers)).length ))
         ?
        1 
        :
        -1
         ) ,      

        
        // rankedUsers: rankedUsers.map((user) => ((users[user].questions).length + (Object.keys(users[user].answers)).length )   ) ,      
       
         
    }
}

export default connect(mapStateToProps)(LeaderBoard)
