
//AJAOUTER SERA
export const createSeraReducer = ((state = {sera : []}  , action)=>{
    switch(action.type){
        case "ADD_SERA":
            return {Loading : true }
        case "ADD_SERA_SUCCES":
            return { Loading: false , sera : action.payload } 
        case "ADD_SERA_FAIL" :
            return {loading: false, error: action.payload }
        default :
            return state    
    }
})


// ALL SERA
export const allSeraReducer = (state = { sera: [] }, action) => {
    switch (action.type) {
      case 'ALL_SERA':
        return { loading: true, sera: [] };
      case "ALL_SERA_SUCCES":
        return { loading: false, sera: action.payload };
      case "ALL_SERA_FAIL":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

