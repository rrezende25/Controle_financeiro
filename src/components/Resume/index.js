import './Resume.css'
import {FaRegArrowAltCircleUp,FaRegArrowAltCircleDown, FaDollarSign} from 'react-icons/fa'
import ResumeItem from '../ResumeItem'
import {ItemsContext} from '../../ItemsContext'
import { useContext } from 'react'

const Resume = ()=>{
    const [items,setItems] = useContext(ItemsContext)
    const incomeitems = items.filter(item => item.type === 1)
    const expenseitems = items.filter(item => item.type === -1)
    const income = incomeitems.reduce((prev,elem)=> prev+Number(elem.value) , 0).toFixed(2)
    const expense = expenseitems.reduce((prev,elem)=> prev+Number(elem.value) , 0).toFixed(2)
    const Total = income-expense
    return(
        <section className='resume_container'>
            <ResumeItem resumetype={'Entradas'} resumevalue={income} Icon={FaRegArrowAltCircleUp}></ResumeItem>
            <ResumeItem resumetype={'Saídas'} resumevalue={-expense} Icon={FaRegArrowAltCircleDown}></ResumeItem>
            <ResumeItem resumetype={'Total'} resumevalue={Total} Icon={FaDollarSign}></ResumeItem>
        </section>
    )
}

export default Resume