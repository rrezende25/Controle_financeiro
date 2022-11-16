import './ResumeItem.css'

const ResumeItem = (props)=>{
    return(
        <div className='resume_card'>
            <div className='resume_title'>
                <p>{props.resumetype}</p>
                <props.Icon></props.Icon>
            </div>
            <div className='resume_value'>R$ {props.resumevalue}</div>
        </div>
    )
}

export default ResumeItem