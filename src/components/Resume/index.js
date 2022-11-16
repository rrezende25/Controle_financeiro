import './Resume.css'
import {FaRegArrowAltCircleUp,FaRegArrowAltCircleDown, FaDollarSign} from 'react-icons/fa'
import ResumeItem from '../ResumeItem'

const Resume = ()=>{
    return(
        <section className='resume_container'>
            <ResumeItem resumetype={'Entradas'} resumevalue={'3000'} Icon={FaRegArrowAltCircleUp}></ResumeItem>
            <ResumeItem resumetype={'Saídas'} resumevalue={'3000'} Icon={FaRegArrowAltCircleDown}></ResumeItem>
            <ResumeItem resumetype={'Total'} resumevalue={'3000'} Icon={FaDollarSign}></ResumeItem>
        </section>
    )
}

export default Resume