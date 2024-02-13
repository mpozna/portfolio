import { TimeLineDate } from "../types"

const TimelineDate = (props: TimeLineDate) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(25,118,210)',
            color: 'white',
            borderRadius: '50%',
            width: props.width ?? '60px',
            height: props.height ?? '60px',
            fontSize: props.fontSize ?? '10pt',
            textTransform: 'capitalize',
            textAlign: 'center',
            fontFamily: 'Roboto,Helvetica,Arial,sans-serif'
        }}>
            {props.date}
        </div>
    )
}

export default TimelineDate