const heater_1 = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
const heater_2 = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
const heater_3 = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
const heater_4 = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
const clap = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
const open_hh = 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
const kick_n_hat = 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
const kick = 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
const closed_hh = 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
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