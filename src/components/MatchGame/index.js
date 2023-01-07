import {Component} from 'react'
import Navbar from '../Navbar'
import TabItem from '../TabItem'
import './index.css'

class MatchGame extends Component {
  state = {
    score: 0,
    maxScore: 5,
    seconds: 60,
    isGameProgress: true,
    activeTab: tabsList[0].tabId,
  }

  render() {
    const {tabsList, imagesList} = this.props

    return (
      <div className={app - container}>
        <Navbar score={score} time={seconds} />
        <ul>
          {tabsList.map(eachItem => (
            <TabItem tabItem={eachItem} key={eachItem.tabId} />
          ))}
        </ul>
      </div>
    )
  }
}

export default MatchGame
