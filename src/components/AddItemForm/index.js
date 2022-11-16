import { useState } from 'react'
import './AddItemForm.css'

const AddItemForm = (props) => {
    const [DescState,setDesc] = useState('')
    const [ValueState,setValue] = useState('')
    const [TypeState,setType] = useState(1)
    function uppdateText(event){
        if (event.target.name === 'Desc'){
            setDesc(event.target.value)
        }else{
            setValue(event.target.value)
        }
    }
    function uppdateRadio(event){
        if(event.target.id ==='income'){
            setType(1)
        }else{
            setType(-1)
        }
    }
    function handleItems(event){
        event.preventDefault()
        const item = {
            name:DescState,
            value:ValueState,
            type:TypeState
        }
        setDesc('')
        setValue('')
        props.additem(item)

    }

    return (
        <section className='add_item_container'>
            <form>
                <div>
                    <p>Descrição</p>
                    <input name='Desc' className='text_input' placeholder='Descrição' onChange={uppdateText} value={DescState}></input>
                </div>
                <div>
                    <p>Valor</p>
                    <input name='ItemValue' className='text_input' placeholder='Valor' onChange={uppdateText} type='number' value={ValueState}></input>
                </div>
                <div id='radio_group'>
                    <input id='income' className='radio_input' type='radio' name='entrada_saida' value={'entrada'} onChange={uppdateRadio} defaultChecked></input>
                    <label htmlFor='income'>Entrada</label>
                    <input id='expense' className='radio_input' type='radio' name='entrada_saida' value={'entrada'} onChange={uppdateRadio}></input>
                    <label htmlFor='expense'>Saída</label>
                </div>
                <button onClick={handleItems}>ADICIONAR</button>
            </form>
        </section>
    )
}
export default AddItemForm