import axios from "axios";
import * as types from "./actionTypes";

 export const postLogin = (payload)=>(dispatch)=>{
  dispatch({type:types.POST_LOGIN_REQUEST});
 return axios.post(`http://localhost:2346/api/users/login`, payload)
  .then(res=>{
   return dispatch({type:types.POST_LOGIN_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return dispatch({type:types.POST_LOGIN_FAILURE, payload:err})
  })
}