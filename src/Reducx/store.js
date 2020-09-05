import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import rootreducer from './Reducers'


const initialstate={};
const middleware=[thunk];

const store=createStore(rootreducer,
    initialstate,
    compose(applyMiddleware(...middleware)))

export default store