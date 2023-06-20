import axios from "axios";

export const AddData = () => {
    return {
        type : "ADD_DATA"
    }
}
export const viewData = (data) => { 
    return {
        type : "VIEW_DATA",
        payload : data
    }
}
export const DeleteData = () => {
    return {
        type : "DELETE_DATA",
    }   
}
export const EditData = (data) => {
    return {
        type : "EDIT_DATA",
        payload : data
    }
}
export const UpdateData = () => {
    return {
        type : "UPDATE_DATA",
    }
}
export const LoginData = () => {
    return {
        type : "LOGIN_DATA"
    }
}
export const AddUser = (data) => {
    if(data.id != null){
        return (dispatch) => {
            axios.put(`http://localhost:3030/user/${data.id}`,data).then((res)=>{
                dispatch(UpdateData());
            }).catch((err)=>{
                console.log(err);
            })
        }
    }else{
        return (dispatch) => {
            axios.post('http://localhost:3030/user',data)
            .then((res)=>{
                dispatch(AddData);
            }).catch((err)=>{
                console.log(err);
            })
       }
    }
}
export const FetchData = () => {
    return (dispatch) => {
        axios.get('http://localhost:3030/user').then((res)=>{
            dispatch(viewData(res.data))
        }).catch(err => console.log(err));
    }
}
export const DeleteUser = (data) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3030/user/${data}`)
        .then((res)=>{
            dispatch(DeleteData);
        }).catch((err)=>{
            console.log(err);
        })
    }
}
export const EditUser = (data) => {
    return (dispatch) => {
        axios.get(`http://localhost:3030/user/${data}`)
        .then((res)=>{
            dispatch(EditData(res.data));
        }).catch((err)=>{
            console.log(err);
        })
    }
}
export const LoginUser = (data) => {
    return (dispatch) => {
       
        axios.get(`http://localhost:3030/user/`).then((res)=>{
           let ans = res.data.filter((val)=>{
               return val.email === data.email;
           })
          if(ans.length != 0){
            localStorage.setItem('checkUserLogin',JSON.stringify(ans[0]));
                dispatch(LoginData());
               
          }else{
               console.log("Email not found");  
          }
        })
    }
}

// export const UpdateUser = (data) => {
//     return (dispatch) => {
//         axios.put(`http://localhost:3030/user/${data.id}`,data).then((res)=>{
//             dispatch(UpdateData());
//         }).catch((err)=>{
//             console.log(err);
//         })
//     }
// }