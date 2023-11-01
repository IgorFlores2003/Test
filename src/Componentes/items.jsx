import React, { useState } from "react";
import{BsTrash} from "react-icons/bs"
import{MdOutlineEditNote} from "react-icons/md"

export default function Items(props){
    const [done,setDone] = useState(false);
    return(
    <div onClick={()=> setDone(!done)} className={"select-none cursor-pointer w-full border-b p-3 flex justify-between items-center"}>
        <div>
            <span className='pr-2 text-[14px] text-slate-400'>
{props.time}
            </span>
            <span className={`${done === true ? 'line-through' : ''} text-[20px]`}>
            {props.items}
            </span>
            </div>
            <div><MdOutlineEditNote className='cursor-pointer text-[#fbbf24] ml-96 text-4xl'
            /></div>
            <div onClick={()=> props.removeHandler(props.id)}>
                <BsTrash className='m-0 cursor-pointer text-[#e74c3c] text-3xl'/>
                </div>
                </div>

)
 }