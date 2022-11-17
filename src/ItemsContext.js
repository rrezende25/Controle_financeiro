import {useState,createContext, useEffect} from 'react'

export const ItemsContext = createContext()

export const ItemsProvider =(props)=>{
    const [items,setItems] = useState([])
    useEffect(()=>{
        const saveditems = JSON.parse(localStorage.getItem('saved_items'))
        if(saveditems){
            setItems(saveditems)
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('saved_items',JSON.stringify(items))
    },[items])
    return(
        <ItemsContext.Provider value={[items,setItems]}>
            {props.children}
        </ItemsContext.Provider>
    )
}