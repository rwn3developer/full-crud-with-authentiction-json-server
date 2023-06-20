const initialState = {
    userList : [],
    singleUser : {},
    loading : true
};

const userReducer = (state = initialState,action) => {
        switch(action.type){
            case "ADD_DATA" :
                return {
                    ...state,
                    loading : false
                }
            break;

            case "VIEW_DATA" : 
                return {
                    loading : false,
                    userList : action.payload,
                    
                }
            break;
            
            case "DELETE_DATA" : 
                return {
                   ...state,
                   loading : false
                }
            break;

            case "EDIT_DATA" :
                return { 
                   ...state,
                   singleUser : action.payload
                }
            break;

            case "UPDATE_DATA" : 
                return {
                    ...state,
                    loading : false
                }
            break;

             case "LOGIN_DATA" :
                    return {
                        ...state,
                        loading : false
                    } 
            break;  

            default : 
                return state;
        }
}


export default userReducer;