import { useParams } from "react-router-dom";
import { EditUser,UpdateUser,AddUser } from "../action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Edit = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [input,setInput] = useState({
        id : '',
        name : '',
        email : '',
        password : '',
    })
    const FetchSingleUser = () => {
        axios.get(`http://localhost:3030/user/${id}`).then((res)=>{
            setInput(res.data)
        })   
    }
    useEffect(()=>{
        FetchSingleUser(); 
    },[])
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
            setInput({
                ...input,[name] : value
            })   
    }
    const save  = () => {
        let {id,name,email,password} = input;
        let obj = {
            id : id,
            name : name,
            email : email,
            password : password
        }
        dispatch(AddUser(obj));
        navigate('/form');
    }

  
    
    return (
        <center>
            <table border={1}>
                <tbody>
                    <tr>
                        <td>Name :- </td>
                        <td><input type="text" value={input.name} name="name" onChange={ (e) => handleChange(e) }/></td>
                    </tr>
                    <tr>
                        <td>Email :- </td>
                        <td><input type="text" value={input.email} name="email" onChange={ (e) => handleChange(e) }/></td>
                    </tr>
                    <tr>
                        <td>Password :- </td>
                        <td><input  type="text" value={input.password} name="password" onChange={ (e) => handleChange(e) }/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="button" onClick={ () => save() } value="Edit"/></td>
                    </tr>
                </tbody>
            </table><br></br>
        </center>
    )
}

export default Edit;