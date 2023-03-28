const heater_1 = '../src/assets/sounds/heater-1.mp3'
const heater_2 = '../src/assets/sounds/heater-2.mp3'
const heater_3 = '../src/assets/sounds/heater-3.mp3'
const heater_4 = '../src/assets/sounds/heater-4.mp3'
const clap = '../src/assets/sounds/clap.mp3'
const open_hh = '../src/assets/sounds/open-hh.mp3'
const kick_n_hat = '../src/assets/sounds/kick_n_hat.mp3'
const kick = '../src/assets/sounds/kick.mp3'
const closed_hh = '../src/assets/sounds/closed-hh.mp3'
import { useState } from 'react'

export class DrumPadAudio {
    audio: string
    bgState: [string, React.Dispatch<React.SetStateAction<string>>]
    name: string

    constructor(
        audio: string,
        name: string
        ) {
            this.audio = audio
            this.name = name
            this.bgState = useState("black")
    }
}

export function audioFactory() {
    const Heater1Audio = new DrumPadAudio(heater_1, "Heater 1")
    const Heater2Audio = new DrumPadAudio(heater_2, "Heater 2")
    const Heater3Audio = new DrumPadAudio(heater_3, "Heater 3")
    const Heater4Audio = new DrumPadAudio(heater_4, "Heater 4")
    const ClapAudio = new DrumPadAudio(clap, "Clap")
    const OpenHHAudio = new DrumPadAudio(open_hh, "Open HH")
    const KickNHatAudio = new DrumPadAudio(kick_n_hat, "Kick n' Hat")
    const KickAudio = new DrumPadAudio(kick, "Kick")
    const ClosedHHAudio = new DrumPadAudio(closed_hh, "Closed HH")

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