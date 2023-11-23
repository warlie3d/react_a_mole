import { useEffect } from "react";
import MoleHill from '../molehill.png'

function EmptySlot(props) {
    useEffect(() => {
        //random number in seconds
    let randSecs = Math.ceil(Math.random() * 5000)
    let timer = setTimeout(() => {
        props.toggle(true)
    }, randSecs)
        //cleanup timer
    return () => clearTimeout(timer)
    })
    return (
        <div>
            <img style={{ 'width': '30vw' }} src={MoleHill} />
        </div>
    )
}

export default EmptySlot