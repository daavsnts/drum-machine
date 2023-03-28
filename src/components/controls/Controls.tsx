import Display from '../display/Display'
import './Controls.css'

export default function Controls(props: { played: string }) {
    return (
        <div id="controls">
            <Display played={props.played}/>
        </div>
    )
}