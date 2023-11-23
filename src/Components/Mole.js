import { useEffect } from "react";
import MoleImg from '../mole.png'

function Mole(props) {
    useEffect(() => {
        //random number in seconds
        let randSecs = Math.ceil(Math.random() * 2000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSecs)
        //cleanup timer
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{ 'width': '30vw' }} src={MoleImg} onClick={props.handleClick}/>
        </div>
    )
}

export default Mole