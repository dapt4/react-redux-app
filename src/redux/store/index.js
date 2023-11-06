import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

function reducers (){
  return {testing: "test"};
}

export default () => {
  return {
    ...createStore(reducers, applyMiddleware(thunk))
  }
}
