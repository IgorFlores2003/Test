import React, {useRef} from "react";
import{BsPatchPlusFill} from "react-icons/bs"

export default function Note(props) {
const inputBox = useRef();
    return(
        <div className='p-3 flex justify-around'>
            <input type="text" placeholder='Anote aqui'className='p-3 focus:outline-none w-[90%] border border-slate-400' ref={inputBox} />
            <div className='cursor-pointer w-[50px] h-[50px] bg-[#22c55e] text-white text-3xl rounded-[50%] flex justify-center items-center'
            onClick={()=>{
                props.handler(inputBox.current.value)
                inputBox.current.value= "";
            }}>
      <BsPatchPlusFill/>
      
            </div>
            
        </div>
    )
        }