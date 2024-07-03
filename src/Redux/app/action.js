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
    return  dispatch({type:types.UPDATE_ADMIN_YOGA_FORM_SUCCESS, payload:res.data})
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
    return  dispatch({type:types.UPDATE_ADMIN_YOGA_FORM_SUCCESS, payload:res.data})
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










export const postAdminTripsFormData = (payload)=>(dispatch)=>{
  dispatch({type:types.POST_ADMIN_TRIPS_FORM_REQUEST});
  console.log("action form", payload)
return  axios.post("http://localhost:2346/api/adminTrips/addAdminTrips",payload,{
  headers: {
    'Content-Type': 'multipart/form-data',
},
})
  .then(res=>{
    return  dispatch({type:types.POST_ADMIN_TRIPS_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.POST_ADMIN_TRIPS_FORM_FAILURE, payload:err.message})
  })
}

export const getAdminTripsFormData = ()=>(dispatch)=>{
dispatch({type:types.GET_ADMIN_TRIPS_FORM_REQUEST});

return  axios.get("http://localhost:2346/api/adminTrips")
.then(res=>{
  return  dispatch({type:types.GET_ADMIN_TRIPS_FORM_SUCCESS, payload:res.data.data})
})
.catch(err=>{
 return   dispatch({type:types.GET_ADMIN_TRIPS_FORM_FAILURE, payload:err.message})
})
}

export const singleAdminTripsFormData = (id)=>(dispatch)=>{
dispatch({type:types.GET_SINGLE_ADMIN_TRIPS_FORM_REQUEST});
// console.log("action id: " + id)
return  axios.get(`http://localhost:2346/api/adminTrips/${id}`)
.then(res=>{
  console.log("action single", res)
  return  dispatch({type:types.GET_SINGLE_ADMIN_TRIPS_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.GET_SINGLE_ADMIN_TRIPS_FORM_FAILURE, payload:err.message})
})
}


export const deleteAdminTripsFormData = (id)=>(dispatch)=>{
dispatch({type:types.DELETE_ADMIN_TRIPS_FORM_REQUEST});

return  axios.delete(`http://localhost:2346/api/adminTrips/${id}`)
.then(res=>{
  return  dispatch({type:types.DELETE_ADMIN_TRIPS_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.DELETE_ADMIN_TRIPS_FORM_FAILURE, payload:err.message})
})
}


export const updateAdminTripsFormData = (id,payload)=>(dispatch)=>{
dispatch({type:types.UPDATE_ADMIN_TRIPS_FORM_REQUEST});

return  axios.patch(`http://localhost:2346/api/adminTrips/${id}`, payload)
.then(res=>{
  return  dispatch({type:types.UPDATE_ADMIN_TRIPS_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.UPDATE_ADMIN_TRIPS_FORM_FAILURE, payload:err.message})
})
}






export const postAdminResidencyFormData = (payload)=>(dispatch)=>{
  dispatch({type:types.POST_ADMIN_RESIDENCY_FORM_REQUEST});
  console.log("action form", payload)
return  axios.post("http://localhost:2346/api/adminResidency/addAdminResidency",payload,{
  headers: {
    'Content-Type': 'multipart/form-data',
},
})
  .then(res=>{
    return  dispatch({type:types.POST_ADMIN_RESIDENCY_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.POST_ADMIN_RESIDENCY_FORM_FAILURE, payload:err.message})
  })
}

export const getAdminResidencyFormData = ()=>(dispatch)=>{
dispatch({type:types.GET_ADMIN_RESIDENCY_FORM_REQUEST});

return  axios.get("http://localhost:2346/api/adminResidency")
.then(res=>{
  return  dispatch({type:types.GET_ADMIN_RESIDENCY_FORM_SUCCESS, payload:res.data.data})
})
.catch(err=>{
 return   dispatch({type:types.GET_ADMIN_RESIDENCY_FORM_FAILURE, payload:err.message})
})
}

export const singleAdminResidencyFormData = (id)=>(dispatch)=>{
dispatch({type:types.GET_SINGLE_ADMIN_RESIDENCY_FORM_REQUEST});
// console.log("action id: " + id)
return  axios.get(`http://localhost:2346/api/adminResidency/${id}`)
.then(res=>{
  return  dispatch({type:types.GET_SINGLE_ADMIN_RESIDENCY_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.GET_SINGLE_ADMIN_RESIDENCY_FORM_FAILURE, payload:err.message})
})
}


export const deleteAdminResidencyFormData = (id)=>(dispatch)=>{
dispatch({type:types.DELETE_ADMIN_RESIDENCY_FORM_REQUEST});

return  axios.delete(`http://localhost:2346/api/adminResidency/${id}`)
.then(res=>{
  return  dispatch({type:types.DELETE_ADMIN_RESIDENCY_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.DELETE_ADMIN_RESIDENCY_FORM_FAILURE, payload:err.message})
})
}


export const updateAdminResidencyFormData = (id,payload)=>(dispatch)=>{
  console.log("action",payload)
dispatch({type:types.UPDATE_ADMIN_RESIDENCY_FORM_REQUEST});

return  axios.patch(`http://localhost:2346/api/adminResidency/${id}`, payload)
.then(res=>{
  return  dispatch({type:types.UPDATE_ADMIN_RESIDENCY_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.UPDATE_ADMIN_RESIDENCY_FORM_FAILURE, payload:err.message})
})
}







export const postAdminFestivalsFormData = (payload)=>(dispatch)=>{
  dispatch({type:types.POST_ADMIN_FESTIVALS_FORM_REQUEST});
 // console.log("action form", payload)
return  axios.post("http://localhost:2346/api/adminFestival/addAdminFestival",payload,{
  headers: {
    'Content-Type': 'multipart/form-data',
},
})
  .then(res=>{
    return  dispatch({type:types.POST_ADMIN_FESTIVALS_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.POST_ADMIN_FESTIVALS_FORM_FAILURE, payload:err.message})
  })
}

export const getAdminFestivalsFormData = ()=>(dispatch)=>{
dispatch({type:types.GET_ADMIN_FESTIVALS_FORM_REQUEST});

return  axios.get("http://localhost:2346/api/adminFestival")
.then(res=>{
  return  dispatch({type:types.GET_ADMIN_FESTIVALS_FORM_SUCCESS, payload:res.data.data})
})
.catch(err=>{
 return   dispatch({type:types.GET_ADMIN_FESTIVALS_FORM_FAILURE, payload:err.message})
})
}

export const singleAdminFestivalsFormData = (id)=>(dispatch)=>{
dispatch({type:types.GET_SINGLE_ADMIN_FESTIVALS_FORM_REQUEST});
// console.log("action id: " + id)
return  axios.get(`http://localhost:2346/api/adminFestival/${id}`)
.then(res=>{
  return  dispatch({type:types.GET_SINGLE_ADMIN_FESTIVALS_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.GET_SINGLE_ADMIN_FESTIVALS_FORM_FAILURE, payload:err.message})
})
}


export const deleteAdminFestivalsFormData = (id)=>(dispatch)=>{
dispatch({type:types.DELETE_ADMIN_FESTIVALS_FORM_REQUEST});

return  axios.delete(`http://localhost:2346/api/adminFestival/${id}`)
.then(res=>{
  return  dispatch({type:types.DELETE_ADMIN_FESTIVALS_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.DELETE_ADMIN_FESTIVALS_FORM_FAILURE, payload:err.message})
})
}


export const updateAdminFestivalsFormData = (id,payload)=>(dispatch)=>{
dispatch({type:types.UPDATE_ADMIN_FESTIVALS_FORM_REQUEST});

return  axios.patch(`http://localhost:2346/api/adminFestival/${id}`, payload)
.then(res=>{
  return  dispatch({type:types.UPDATE_ADMIN_FESTIVALS_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.UPDATE_ADMIN_FESTIVALS_FORM_FAILURE, payload:err.message})
})
}

