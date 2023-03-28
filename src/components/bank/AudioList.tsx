import heater_1 from '../../assets/sounds/heater-1.mp3'
import heater_2 from '../../assets/sounds/heater-2.mp3'
import heater_3 from '../../assets/sounds/heater-3.mp3'
import heater_4 from '../../assets/sounds/heater-4.mp3'
import clap from '../../assets/sounds/clap.mp3'
import open_hh from '../../assets/sounds/open-hh.mp3'
import kick_n_hat from '../../assets/sounds/kick_n_hat.mp3'
import kick from '../../assets/sounds/kick.mp3'
import closed_hh from '../../assets/sounds/closed-hh.mp3'
import { useState } from 'react'

export class DrumPadAudio {
    audio: HTMLAudioElement
    bgState: [string, React.Dispatch<React.SetStateAction<string>>]
    name: string

    constructor(
        audio: HTMLAudioElement,
        name: string
        ) {
            this.audio = audio
            this.name = name
            this.bgState = useState("black")
    }
}

export function audioFactory() {
    const Heater1Audio = new DrumPadAudio(new Audio(heater_1), "Heater 1")
    const Heater2Audio = new DrumPadAudio(new Audio(heater_2), "Heater 2")
    const Heater3Audio = new DrumPadAudio(new Audio(heater_3), "Heater 3")
    const Heater4Audio = new DrumPadAudio(new Audio(heater_4), "Heater 4")
    const ClapAudio = new DrumPadAudio(new Audio(clap), "Clap")
    const OpenHHAudio = new DrumPadAudio(new Audio(open_hh), "Open HH")
    const KickNHatAudio = new DrumPadAudio(new Audio(kick_n_hat), "Kick n' Hat")
    const KickAudio = new DrumPadAudio(new Audio(kick), "Kick")
    const ClosedHHAudio = new DrumPadAudio(new Audio(closed_hh), "Closed HH")

    const audioList: Array<DrumPadAudio> = [
        Heater1Audio,
        Heater2Audio,
        Heater3Audio,
        Heater4Audio,
        ClapAudio,
        OpenHHAudio,
        KickNHatAudio,
        KickAudio,
        ClosedHHAudio
    ]

    return audioList
}