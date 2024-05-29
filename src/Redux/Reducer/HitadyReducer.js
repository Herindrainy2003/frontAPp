export const SearchSeraReducer = ((state = {sera : []}  , action)=>{
    switch(action.type){
        case "HITADY_SERA":
            return {Loading : true }
        case "HITADY_SERA_SUCCES":
            return { Loading: false , sera : action.payload } 
        case "HITADY_SERA_FAIL" :
            return {loading: false, error: action.payload }
        default :
            return state    
    }
})



export const seraMisyMitady = (state = { sera: [] }, action) => {
    switch (action.type) {
      case 'ALL_SERATADIAVINA':
        return { loading: true, sera: [] };
      case "ALL_SERATADIAVINA_SUCCES":
        return { loading: false, sera: action.payload };
      case "ALL_SERATADIAVINA_FAIL":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

