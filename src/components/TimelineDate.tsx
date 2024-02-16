import { TimeLineDate } from "../types"

const TimelineDate = (props: TimeLineDate) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#a10d1e',
            opacity: '80%',
            color: 'white',
            borderRadius: '50%',
            width: props.width ?? '60px',
            height: props.height ?? '60px',
            fontSize: props.fontSize ?? '10pt',
            textTransform: 'capitalize',
            textAlign: 'center',
            fontFamily: 'sans-serif',
            fontWeight: '600'
        }}>
            {props.date}
        </div>
    )
}

export default TimelineDate