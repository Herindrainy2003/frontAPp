import {combineReducers} from 'redux'
import SeraReducer, { allSeraReducer } from './SeraReducer';
import HitadyReducer from './HitadyReducer';


const RootReducer = combineReducers({
    sera : SeraReducer ,
    allSera : allSeraReducer ,
    seraMisyMitady : HitadyReducer
})

export default RootReducer;