
import { useState } from "react";
import {useDispatch} from "react-redux";
import { addNewToDo } from "../redux/actions";

const Todoform=()=>{


    const [text,setText]=useState("")

    const dispatch=useDispatch();

    const onFromSubmit=(e)=>{
        e.preventDefault();
        dispatch(addNewToDo(text));
        setText("");
    }

    const onInputChange=(e)=>{
        setText(e.target.value);
    }


    return (
        <form className="form" onSubmit={onFromSubmit}>
            <input 
                placeholder="Enter new ToDo..."
                className="input"
                value={text}
                onChange={onInputChange}
            />
        </form>
    )
}

export default Todoform;