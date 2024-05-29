import  axios  from "axios"
import api from "../../api/api"


export const TadySera = (newData)=>(async(dispatch)=>{
    try{
        dispatch({ type : 'HITADY_SERA' })
        
        const {data} = await api.post('/hitadySera/hitadySera' , newData , {headers: {'Content-Type': 'multipart/form-data'}})
       
        dispatch({type : 'ADD_SERATADIAVINA_SUCCES' , payload : data})
   
    }catch(error){
        const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      
      dispatch({
        type: "ADD_SERATADIAVIANA_FAIL",
        payload: message,
      });
    }
})


//afficher tous le sera
export const  SeraMisyMitady = () => async(dispatch)=>{
    try{

        dispatch({Loading : true ,type : 'ALL_SERATADIAVINA'})

        const {data} = await api.get('/hitadySera')
        
          dispatch({type : "ALL_SERATADIAVINA_SUCCES" , payload : data})
    }catch(error){
        const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
     
      dispatch({
        type: "ALL_SERATADIAVINA_FAIL",
        payload: message,
      });
    }
}
