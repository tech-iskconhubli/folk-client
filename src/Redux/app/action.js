import axios from "axios";
import * as types from "./actionTypes"

export const postAdminYogaFormData = (payload)=>(dispatch)=>{
    dispatch({type:types.POST_ADMIN_YOGA_FORM_REQUEST});

  return  axios.post("http://localhost:2346/api/adminyoga/addadminyoga",payload)
    .then(res=>{
      return  dispatch({type:types.POST_ADMIN_YOGA_FORM_SUCCESS, payload:res.data})
    })
    .catch(err=>{
     return   dispatch({type:types.POST_ADMIN_YOGA_FORM_FAILURE, payload:err.message})
    })
}



export const postAdminSecretFormData = (payload)=>(dispatch)=>{
    dispatch({type:types.POST_ADMIN_SECRET_FORM_REQUEST});

  return  axios.post("http://localhost:2346/api/adminSecretSuccess/addadminsecretsuccess",payload)
    .then(res=>{
      return  dispatch({type:types.POST_ADMIN_SECRET_FORM_SUCCESS, payload:res.data})
    })
    .catch(err=>{
     return   dispatch({type:types.POST_ADMIN_SECRET_FORM_FAILURE, payload:err.message})
    })
}



export const postAdminMindControlFormData = (payload)=>(dispatch)=>{
    dispatch({type:types.POST_ADMIN_MIND_CONTROL_FORM_REQUEST});

  return  axios.post("http://localhost:2346/api/adminartcontrol/addadminartcontrol",payload)
    .then(res=>{
      return  dispatch({type:types.POST_ADMIN_MIND_CONTROL_FORM_SUCCESS, payload:res.data})
    })
    .catch(err=>{
     return   dispatch({type:types.POST_ADMIN_MIND_CONTROL_FORM_FAILURE, payload:err.message})
    })
}


export const getAdminYogaFormData = ()=>(dispatch)=>{
    dispatch({type:types.GET_ADMIN_YOGA_FORM_REQUEST});

  return  axios.get("http://localhost:2346/api/adminyoga")
    .then(res=>{
        console.log(res.data , 'action')
      return  dispatch({type:types.GET_ADMIN_YOGA_FORM_SUCCESS, payload:res.data.data})
    })
    .catch(err=>{
     return   dispatch({type:types.GET_ADMIN_YOGA_FORM_FAILURE, payload:err.message})
    })
}