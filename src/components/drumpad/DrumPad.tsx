import './DrumPad.css'
import { useEffect } from 'react'
import { DrumPadAudio } from '../bank/AudioList'

export default function DrumPad(props: { drumpadAudio: DrumPadAudio, letter: string }) {
    const [bgColor, setBgColor] = props.drumpadAudio.bgState

    useEffect(() => {
        setTimeout(() => {
            setBgColor("black")
        }, 200);
    }, [bgColor])

    function playAudio() {
        props.drumpadAudio.audio.currentTime = 0
        props.drumpadAudio.audio.play()
        setBgColor("red")
    }

    return (
        <div id="drum-pad" onClick={playAudio} style={{backgroundColor: bgColor}}>
            <h1 id={props.letter}>{props.letter}</h1>
        </div>
    )
}