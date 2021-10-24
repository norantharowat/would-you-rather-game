import React, { Component } from 'react'
import LeaderBoardCard from './LeaderBoardCard'
class LeaderBoard extends Component {
    render() {
        return (
            <div style={{paddingBottom:'8vh'}}>
                <LeaderBoardCard rank='1st' color='yellow'/>
                <LeaderBoardCard rank='2st' color='silver'/>
            </div>
        )
    }
}

export default LeaderBoard
