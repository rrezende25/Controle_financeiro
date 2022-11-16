import './ItemsList.css'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from 'react-icons/fa'

const ItemIcon = (props) => {
    if (props.itemtype === -1) {
        return (
            <div className='expense_item item_type'>
                <FaRegArrowAltCircleDown></FaRegArrowAltCircleDown>
            </div>

        )
    } else {
        return (
            <div className='income_item item_type'>
                <FaRegArrowAltCircleUp></FaRegArrowAltCircleUp>
            </div>

        )
    }

}

const ItemsList = (props) => {
    return (
        <section className='items_container'>
            <div className='list_title'>
                <p id='desc_title'>Descrição</p>
                <p id='value_title'>Valor</p>
                <p id='type_title'>Tipo</p>.
            </div>
            {console.log(props.items)}
            {props.items.map(item => {return(
                <div className='items_list' key={item.name}>
                    <div className='item_desc'>{item.name}</div>
                    <div className='item_value'>{item.value}</div>
                    <ItemIcon itemtype={item.type}></ItemIcon>
                </div>)
            }
            )}

        </section>
    )
}
export default ItemsList