import './Display.css'

export default function Display(props: { played: string }) {
    return (
        <div id="display">
            <h1>{props.played}</h1>
        </div>
    )
}