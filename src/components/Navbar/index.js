import 'index.css'

const Navbar =props=>{
    const{score,seconds}=this.props

    return(
        <div className='navbar-container'>
        <
            <img className='logo' src='https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png' alt='website logo'/>
            <div classNam='sub-container'>
                <p className='para'>Score:<span className='span-ele'>{score}</span></p>
                <img className='timer' src='https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png' alt='timer'/>
                <p className='para'>{seconds} <span className='span-ele'> sec</span></p>
            </div>
        </div>
    )
}

export default Navbar