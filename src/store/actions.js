import * as types from './mutation-types';

export const saveRecomTypes = function({commit},newtypes) {
  commit(types.SET_RECOM_TYPES, newtypes)
}

export const saveOtherTypes = function({commit},newtypes) {
  commit(types.SET_OTHER_TYPES, newtypes)
}