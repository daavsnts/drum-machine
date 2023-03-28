import './Bank.css'
import { useEffect } from 'react'
import { audioFactory } from './AudioList'
import DrumPad from '../drumpad/DrumPad'

export default function Bank(props: { setPlayed: React.Dispatch<React.SetStateAction<string>> }) {
    const audioList = audioFactory()
    
    function playAudio(id: string, num: number) {
        const audioElement = document.querySelector(id) as HTMLAudioElement
        audioElement.currentTime = 0
        audioElement.play()
        audioList[num].bgState[1]('#aa00ff')
        props.setPlayed(audioList[num].name)
    }

    function playAudioWithKeyboard(e: KeyboardEvent) {
        switch(e.key) {
            case 'q':
            case 'Q':
                playAudio('#Q', 0)
                break
            case 'w':
            case 'W':
                playAudio('#W', 1)
                break
            case 'e':
            case 'E':
                playAudio('#E', 2)
                break
            case 'a':
            case 'A':
                playAudio('#A', 3)
                break
            case 's':
            case 'S':
                playAudio('#S', 4)
                break
            case 'd':
            case 'D':
                playAudio('#D', 5)
                break
            case 'z':
            case 'Z':
                playAudio('#Z', 6)
                break
            case 'x':
            case 'X':
                playAudio('#X', 7)
                break
            case 'c':
            case 'C':
                playAudio('#C', 8)
                break
        }
    }

    useEffect(() => {
        document.addEventListener('keypress', playAudioWithKeyboard)
    }, [])

    return (
        <div id="bank">
            <DrumPad drumpadAudio={audioList[0]} letter="Q" setPlayed={props.setPlayed}/>
            <DrumPad drumpadAudio={audioList[1]} letter="W" setPlayed={props.setPlayed}/>
            <DrumPad drumpadAudio={audioList[2]} letter="E" setPlayed={props.setPlayed}/>
            <DrumPad drumpadAudio={audioList[3]} letter="A" setPlayed={props.setPlayed}/>
            <DrumPad drumpadAudio={audioList[4]} letter="S" setPlayed={props.setPlayed}/>
            <DrumPad drumpadAudio={audioList[5]} letter="D" setPlayed={props.setPlayed}/>
            <DrumPad drumpadAudio={audioList[6]} letter="Z" setPlayed={props.setPlayed}/>
            <DrumPad drumpadAudio={audioList[7]} letter="X" setPlayed={props.setPlayed}/>
            <DrumPad drumpadAudio={audioList[8]} letter="C" setPlayed={props.setPlayed}/>
        </div>
    )
}