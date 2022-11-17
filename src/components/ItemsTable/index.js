import './ItemsTable.css'
import Item from '../Item'
import { useContext} from 'react'
import {ItemsContext} from '../../ItemsContext'

const ItemsTable = (props) => {
    const [items,setItems] = useContext(ItemsContext)

    function deleteItem(deleteditem){
        const updeted_items = items.filter(item => item.desc !== deleteditem)
        setItems(updeted_items)
    }
    return (
        <section className='items_table'>
            <div className='items_title'>
                <p className='item_desc'>Descrição</p>
                <p className='item_value'>Valor</p>
                <p className='item_type'>Tipo</p>
            </div>
            {items.map(item=>{ return(
                <Item item={item} key={item.desc} deleteItem={deleteItem}></Item>
            )
            })}
            
        </section>
    )
}
export default ItemsTable