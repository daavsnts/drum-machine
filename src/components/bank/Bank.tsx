import './Bank.css'
import { useEffect } from 'react'
import { audioFactory } from './AudioList'
import DrumPad from '../drumpad/DrumPad'

export default function Bank() {
    const audioList = audioFactory()
    
    function playAudioWithKeyboard(e: KeyboardEvent) {
        switch(e.key) {
            case 'q':
                audioList[0].audio.currentTime = 0
                audioList[0].audio.play()
                audioList[0].bgState[1]('red')
                break
            case 'w':
                audioList[1].audio.currentTime = 0
                audioList[1].audio.play()
                audioList[1].bgState[1]('red')
                break
            case 'e':
                audioList[2].audio.currentTime = 0
                audioList[2].audio.play()
                audioList[2].bgState[1]('red')
                break
            case 'a':
                audioList[3].audio.currentTime = 0
                audioList[3].audio.play()
                audioList[3].bgState[1]('red')
                break
            case 's':
                audioList[4].audio.currentTime = 0
                audioList[4].audio.play()
                audioList[4].bgState[1]('red')
                break
            case 'd':
                audioList[5].audio.currentTime = 0
                audioList[5].audio.play()
                audioList[5].bgState[1]('red')
                break
            case 'z':
                audioList[6].audio.currentTime = 0
                audioList[6].audio.play()
                audioList[6].bgState[1]('red')
                break
            case 'x':
                audioList[7].audio.currentTime = 0
                audioList[7].audio.play()
                audioList[7].bgState[1]('red')
                break
            case 'c':
                audioList[8].audio.currentTime = 0
                audioList[8].audio.play()
                audioList[8].bgState[1]('red')
                break
        }
    }

    useEffect(() => {
        document.addEventListener('keypress', playAudioWithKeyboard)
    }, [])

    return (
        <div id="bank">
            <DrumPad drumpadAudio={audioList[0]} letter="Q"/>
            <DrumPad drumpadAudio={audioList[1]} letter="W"/>
            <DrumPad drumpadAudio={audioList[2]} letter="E"/>
            <DrumPad drumpadAudio={audioList[3]} letter="A"/>
            <DrumPad drumpadAudio={audioList[4]} letter="S"/>
            <DrumPad drumpadAudio={audioList[5]} letter="D"/>
            <DrumPad drumpadAudio={audioList[6]} letter="Z"/>
            <DrumPad drumpadAudio={audioList[7]} letter="X"/>
            <DrumPad drumpadAudio={audioList[8]} letter="C"/>
        </div>
    )
}