import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AddUser ,FetchData,DeleteUser,EditUser } from "../action";
import { Link, useNavigate } from "react-router-dom";

function Form() {
  const dispatch = useDispatch();
    const navigate = useNavigate();

  const [input,setInput] = useState({
      name : '',
      email : '',
      password : ''  
  })  
  let alldata = useSelector(state => state.user.userList);
  alldata = (alldata) ? alldata : [];

  const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setInput({
          ...input,[name] : value
      })

      
  }
  const save  = () => {
      dispatch(AddUser(input));
     
      setInput({
        name : '',
        email : '',
        password : ''
      })
  }
  const deleteData = (id) => {
      dispatch(DeleteUser(id));
      dispatch(FetchData());
          
  }

  
  useEffect(()=>{
       CheckUser(); 
      dispatch(FetchData()); 
  },[]);


    const CheckUser = () => {
        let chekUser = localStorage.getItem('checkUserLogin');
        if(chekUser === null){
            navigate('/');
        }    
    }

  const logout = () => {
        localStorage.removeItem('checkUserLogin')
        navigate('/');
  }
  

  return (
    <>
      <table border={1}>
         <tbody>
            <tr>
                <td>Name :- </td>
                <td><input type="text" value={input.name} name="name" onChange={ (e) => handleChange(e) } autoComplete="on"/></td>
            </tr>
            <tr>
                <td>Email :- </td>
                <td><input type="text" value={input.email} name="email" onChange={ (e) => handleChange(e) } autoComplete="on"/></td>
            </tr>
            <tr>
                <td>Password :- </td>
                <td><input  type="text" value={input.password} name="password" onChange={ (e) => handleChange(e) } autoComplete="on"/></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="button" onClick={ () => save() } value="submit" autoComplete="on"/></td>
            </tr>
         </tbody>
      </table><br></br>


      <table border={1}>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Password</td>
                <td>Action</td>
            </tr>
        </thead>
           

        <tbody>
        {
                alldata.map((val)=>{
                    return (
                    <tr key={val.id}>
                        <td>{val.name}</td>
                        <td>{val.email}</td>  
                        <td>{val.password}</td>  
                        <td>
                            <button onClick={ () => deleteData(val.id) } type="button">Delete</button>
                        
                                <Link to={`/edit/${val.id}`}>
                                    <button>Edit</button>
                                </Link>
                            

                        </td>  
                    </tr> 
                    )
                })
            }
        </tbody>
        
        <tfoot>

        </tfoot>

      </table><br></br>

      <button onClick={ () => logout() }>Logout</button>

    </>
      
  )
}

export default Form;
