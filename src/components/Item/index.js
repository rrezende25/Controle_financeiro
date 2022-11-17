import {FaRegArrowAltCircleUp,FaRegArrowAltCircleDown, FaRegTrashAlt} from 'react-icons/fa'

const Item = (props)=>{

    return(
        <div className='items_container'>
                <p className='item_desc'>{props.item.desc}</p>
                <p className='item_value'>{props.item.value}</p>
                <div className='item_type items_icons'>
                    {(props.item.type === -1) ? (<FaRegArrowAltCircleDown color='red'></FaRegArrowAltCircleDown>) :(<FaRegArrowAltCircleUp color='green'></FaRegArrowAltCircleUp>)}
                    <FaRegTrashAlt onClick={()=>props.deleteItem(props.item.desc)} className='delete_icon'></FaRegTrashAlt>
                </div>
            </div>
    )
}
export default Item