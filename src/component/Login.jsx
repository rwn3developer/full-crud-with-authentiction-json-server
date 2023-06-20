import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../action";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
   
        let user = useSelector(state => state.user);
        const [chek,setCheck] = useState(user);

    const [input,setInput] = useState({
        email : '',
        password : ''
    })

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setInput({
            ...input,[name] : value
        })
    }

    const save = () => {
       dispatch(LoginUser(input));  
    }

   useEffect(()=>{
        setCheck(chek);
        if(user.loading === false){
            navigate('/form');
        }
        CheckUser();
   },[user]);

   const CheckUser = () => {
        let chekUser = localStorage.getItem('checkUserLogin');
        if(chekUser){
            navigate('/form');
        }else{
            navigate('/');
        }  
   }
    return (
        <center>
             <h1>Login page</h1>

                <table border={1}>
                   <tbody>
                    <tr>
                            <td>Email :- </td>
                            <td><input type="text" name="email" onChange={ (e) => handleChange(e) }/></td>
                        </tr>
                        <tr>
                            <td>Password :- </td>
                            <td><input type="text" name="password" onChange={ (e) => handleChange(e) }/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input onClick={ () => save() } type="button" value="Login"/></td>
                        </tr>
                   </tbody>
                </table>

        </center>
       
    )
}

export default Login;