import * as types from './mutation-types';

const mutaions = {
  [types.SET_CURRENT_TYPE](state,currentType){
    state.currentType = currentType
  },
  [types.SET_RECOM_TYPES](state,recomTypes){
    state.recomTypes = recomTypes
  },
  [types.SET_OTHER_TYPES](state,otherTypes){
    state.otherTypes = otherTypes
  }
}

export default mutaions