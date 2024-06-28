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

export const getSingleAdminYogaFormData = (id)=>(dispatch)=>{
  dispatch({type:types.GET_SINGLE_ADMIN_YOGA_FORM_REQUEST});

return  axios.get(`http://localhost:2346/api/adminyoga/${id}`)
  .then(res=>{
      console.log(res.data , 'action')
    return  dispatch({type:types.GET_SINGLE_ADMIN_YOGA_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.GET_SINGLE_ADMIN_YOGA_FORM_FAILURE, payload:err.message})
  })
}

export const updateAdminYogaFormData = (id,payload)=>(dispatch)=>{
  dispatch({type:types.UPDATE_ADMIN_YOGA_FORM_REQUEST});

return  axios.patch(`http://localhost:2346/api/adminyoga/${id}`, payload)
  .then(res=>{
      console.log(res.data , 'action')
    return  dispatch({type:types.UPDATE_ADMIN_YOGA_FORM_SUCCESS, payload:res.data.data})
  })
  .catch(err=>{
   return   dispatch({type:types.UPDATE_ADMIN_YOGA_FORM_FAILURE, payload:err.message})
  })
}

export const deleteAdminYogaFormData = (id)=>(dispatch)=>{
  dispatch({type:types.DELETE_ADMIN_YOGA_FORM_REQUEST});

return  axios.delete(`http://localhost:2346/api/adminyoga/${id}`)
  .then(res=>{

    return  dispatch({type:types.DELETE_ADMIN_YOGA_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.DELETE_ADMIN_YOGA_FORM_FAILURE, payload:err.message})
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


export const getAdminSecretFormData = ()=>(dispatch)=>{
    dispatch({type:types.GET_ADMIN_SECRET_FORM_REQUEST});

  return  axios.get("http://localhost:2346/api/adminsecretsuccess")
    .then(res=>{
      return  dispatch({type:types.GET_ADMIN_SECRET_FORM_SUCCESS, payload:res.data.data})
    })
    .catch(err=>{
     return   dispatch({type:types.GET_ADMIN_SECRET_FORM_FAILURE, payload:err.message})
    })
}

export const getSingleAdminSecretFormData = (id)=>(dispatch)=>{
  dispatch({type:types.GET_SINGLE_ADMIN_SECRET_FORM_REQUEST});

return  axios.get(`http://localhost:2346/api/adminsecretsuccess/${id}`)
  .then(res=>{
    return  dispatch({type:types.GET_SINGLE_ADMIN_SECRET_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.GET_SINGLE_ADMIN_SECRET_FORM_FAILURE, payload:err.message})
  })
}

export const updateAdminSecretFormData = (id,payload)=>(dispatch)=>{
  dispatch({type:types.UPDATE_ADMIN_SECRET_FORM_REQUEST});

return  axios.patch(`http://localhost:2346/api/adminsecretsuccess/${id}`,payload)
  .then(res=>{
    return  dispatch({type:types.UPDATE_ADMIN_YOGA_FORM_SUCCESS, payload:res.data.data})
  })
  .catch(err=>{
   return   dispatch({type:types.UPDATE_ADMIN_SECRET_FORM_FAILURE, payload:err.message})
  })
}



export const deleteAdminSecretFormData = (id)=>(dispatch)=>{
  dispatch({type:types.DELETE_ADMIN_SECRET_FORM_REQUEST});

return  axios.delete(`http://localhost:2346/api/adminsecretsuccess/${id}`)
  .then(res=>{
    return  dispatch({type:types.DELETE_ADMIN_SECRET_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.DELETE_ADMIN_SECRET_FORM_FAILURE, payload:err.message})
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

export const getAdminMindControlFormData = ()=>(dispatch)=>{
  dispatch({type:types.GET_ADMIN_MIND_CONTROL_FORM_REQUEST});

return  axios.get("http://localhost:2346/api/adminartcontrol")
  .then(res=>{
    return  dispatch({type:types.GET_ADMIN_MIND_CONTROL_FORM_SUCCESS, payload:res.data.data})
  })
  .catch(err=>{
   return   dispatch({type:types.GET_ADMIN_MIND_CONTROL_FORM_FAILURE, payload:err.message})
  })
}

export const singleAdminMindControlFormData = (id)=>(dispatch)=>{
  dispatch({type:types.GET_SINGLE_ADMIN_MIND_CONTROL_FORM_REQUEST});
 // console.log("action id: " + id)
return  axios.get(`http://localhost:2346/api/adminartcontrol/${id}`)
  .then(res=>{
    return  dispatch({type:types.GET_SINGLE_ADMIN_MIND_CONTROL_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.GET_SINGLE_ADMIN_MIND_CONTROL_FORM_FAILURE, payload:err.message})
  })
}


export const deleteAdminMindControlFormData = (id)=>(dispatch)=>{
  dispatch({type:types.DELETE_ADMIN_MIND_CONTROL_FORM_REQUEST});

return  axios.delete(`http://localhost:2346/api/adminartcontrol/${id}`)
  .then(res=>{
    return  dispatch({type:types.DELETE_ADMIN_MIND_CONTROL_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.DELETE_ADMIN_MIND_CONTROL_FORM_FAILURE, payload:err.message})
  })
}


export const updateAdminMindControlFormData = (id,payload)=>(dispatch)=>{
  dispatch({type:types.UPDATE_ADMIN_MIND_CONTROL_FORM_REQUEST});

return  axios.patch(`http://localhost:2346/api/adminartcontrol/${id}`, payload)
  .then(res=>{
    return  dispatch({type:types.UPDATE_ADMIN_MIND_CONTROL_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.UPDATE_ADMIN_MIND_CONTROL_FORM_FAILURE, payload:err.message})
  })
}



