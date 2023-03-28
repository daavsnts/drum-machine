import './DrumPad.css'
import { useEffect } from 'react'
import { DrumPadAudio } from '../bank/AudioList'

export default function DrumPad(props: { drumpadAudio: DrumPadAudio, letter: string, setPlayed: React.Dispatch<React.SetStateAction<string>> }) {
    const [bgColor, setBgColor] = props.drumpadAudio.bgState

    useEffect(() => {
        setTimeout(() => {
            setBgColor("#ff00bf")
            
        }, 200);
    }, [bgColor])

    function playAudioTwo() {
        const id = `#${props.letter}`
        const audioElement = document.querySelector(id) as HTMLAudioElement
        audioElement.currentTime = 0
        audioElement.play()
        props.setPlayed(props.drumpadAudio.name)
        setBgColor("#ff00ff")
    }

    return (
        <div className="drum-pad" id="drum-pad" onClick={playAudioTwo} style={{backgroundColor: bgColor}}>
            <audio src={props.drumpadAudio.audio} className="clip" id={props.letter}/>
            <h1 id={props.letter}>{props.letter}</h1>
        </div>
    )
}