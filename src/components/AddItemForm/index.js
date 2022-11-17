import { useContext, useState } from 'react'
import './AddItemForm.css'
import {ItemsContext} from '../../ItemsContext'

const AddItemForm = (props) => {
    const [DescState, setDesc] = useState('')
    const [ValueState, setValue] = useState('')
    const [ValueTypeState, setValueType] = useState(1)
    const [items,setItems] = useContext(ItemsContext)
    function uppdateText(event) {
        if (event.target.name === 'Desc') {
            setDesc(event.target.value)
        } else {
            setValue(event.target.value)
        }
    }
    function uppdateRadio(event) {
        if (event.target.id === 'income') {
            setValueType(1)
        } else {
            setValueType(-1)
        }
    }
    function saveItem(event) {
        event.preventDefault()
        if (DescState === '' || ValueState === '') {
            alert("por favor informe a descrição e o valor!")
        } else if (Number(ValueState) < 0) {
            alert("informe o valor positivo e se é entrada ou saida!")
        } else {
            const item = {
                desc: DescState,
                value: ValueState,
                type: ValueTypeState
            }
            setItems([...items,item])
            setDesc('')
            setValue('')
        }
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
                    <input name='ItemValue' className='text_input' placeholder='Valor' onChange={uppdateText} value={ValueState} type='number'></input>
                </div>
                <div id='radio_group'>
                    <input id='income' className='radio_input' type='radio' name='entrada_saida' onChange={uppdateRadio} defaultChecked></input>
                    <label htmlFor='income'>Entrada</label>
                    <input id='expense' className='radio_input' type='radio' name='entrada_saida' onChange={uppdateRadio}></input>
                    <label htmlFor='expense'>Saída</label>
                </div>
                <button onClick={saveItem}>ADICIONAR</button>
            </form>
        </section>
    )
}
export default AddItemForm