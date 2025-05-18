import axios from "axios";
import * as types from "./actionTypes"

export const postAdminYogaFormData = (payload)=>(dispatch)=>{
    dispatch({type:types.POST_ADMIN_YOGA_FORM_REQUEST});

  return  axios.post("https://folk-server-fbkr.onrender.com/api/adminyoga/addadminyoga",payload)
    .then(res=>{
      return  dispatch({type:types.POST_ADMIN_YOGA_FORM_SUCCESS, payload:res.data})
    })
    .catch(err=>{
     return   dispatch({type:types.POST_ADMIN_YOGA_FORM_FAILURE, payload:err.message})
    })
}

export const getAdminYogaFormData = ()=>(dispatch)=>{
    dispatch({type:types.GET_ADMIN_YOGA_FORM_REQUEST});

  return  axios.get("https://folk-server-fbkr.onrender.com/api/adminyoga")
    .then(res=>{
        
      return  dispatch({type:types.GET_ADMIN_YOGA_FORM_SUCCESS, payload:res.data.data})
    })
    .catch(err=>{
     return   dispatch({type:types.GET_ADMIN_YOGA_FORM_FAILURE, payload:err.message})
    })
}

export const getSingleAdminYogaFormData = (id)=>(dispatch)=>{

  dispatch({type:types.GET_SINGLE_ADMIN_YOGA_FORM_REQUEST});

return  axios.get(`https://folk-server-fbkr.onrender.com/api/adminyoga/${id}`)
  .then(res=>{
      
    return  dispatch({type:types.GET_SINGLE_ADMIN_YOGA_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.GET_SINGLE_ADMIN_YOGA_FORM_FAILURE, payload:err.message})
  })
}

export const updateAdminYogaFormData = (id,payload)=>(dispatch)=>{
  dispatch({type:types.UPDATE_ADMIN_YOGA_FORM_REQUEST});

return  axios.patch(`https://folk-server-fbkr.onrender.com/api/adminyoga/${id}`, payload)
  .then(res=>{
    
    return  dispatch({type:types.UPDATE_ADMIN_YOGA_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.UPDATE_ADMIN_YOGA_FORM_FAILURE, payload:err.message})
  })
}

export const deleteAdminYogaFormData = (id)=>(dispatch)=>{
  dispatch({type:types.DELETE_ADMIN_YOGA_FORM_REQUEST});

return  axios.delete(`https://folk-server-fbkr.onrender.com/api/adminyoga/${id}`)
  .then(res=>{

    return  dispatch({type:types.DELETE_ADMIN_YOGA_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.DELETE_ADMIN_YOGA_FORM_FAILURE, payload:err.message})
  })
}



export const patchAttendanceAdminYogaFormData = (payload)=>(dispatch)=>{
  dispatch({type:types.POST_ATTENDANCE_REQUEST});

return  axios.patch(`https://folk-server-fbkr.onrender.com/api/yoga/postattendance`,payload)
  .then(res=>{

    return  dispatch({type:types.POST_SECRET_ATTENDANCE_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.POST_SECRET_ATTENDANCE_FAILURE, payload:err.message})
  })
}


export const getYogaDataBasedOnLocationAndUsers =()=>(dispatch)=>{
  dispatch({type:types.GET_DATA_BASED_ON_LOCATION_AND_USERS_REQUEST})
   return axios.get("https://folk-server-fbkr.onrender.com/api/yoga/events-by-location-users")
    .then(res=>{
   return dispatch({type:types.GET_DATA_BASED_ON_LOCATION_AND_USERS_SUCCESS, payload:res.data})
    })
    .catch(err=>{
    return dispatch({type:types.GET_DATA_BASED_ON_LOCATION_AND_USERS_FAILURE, payload:err.message})
    })
}












export const postAdminSecretFormData = (payload)=>(dispatch)=>{
    dispatch({type:types.POST_ADMIN_SECRET_FORM_REQUEST});

  return  axios.post("https://folk-server-fbkr.onrender.com/api/adminSecretSuccess/addadminsecretsuccess",payload)
    .then(res=>{
      return  dispatch({type:types.POST_ADMIN_SECRET_FORM_SUCCESS, payload:res.data})
    })
    .catch(err=>{
     return   dispatch({type:types.POST_ADMIN_SECRET_FORM_FAILURE, payload:err.message})
    })
}


export const getAdminSecretFormData = ()=>(dispatch)=>{
    dispatch({type:types.GET_ADMIN_SECRET_FORM_REQUEST});

  return  axios.get("https://folk-server-fbkr.onrender.com/api/adminsecretsuccess")
    .then(res=>{
      return  dispatch({type:types.GET_ADMIN_SECRET_FORM_SUCCESS, payload:res.data.data})
    })
    .catch(err=>{
     return   dispatch({type:types.GET_ADMIN_SECRET_FORM_FAILURE, payload:err.message})
    })
}

export const getSingleAdminSecretFormData = (id)=>(dispatch)=>{
  dispatch({type:types.GET_SINGLE_ADMIN_SECRET_FORM_REQUEST});

return  axios.get(`https://folk-server-fbkr.onrender.com/api/adminsecretsuccess/${id}`)
  .then(res=>{
    return  dispatch({type:types.GET_SINGLE_ADMIN_SECRET_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.GET_SINGLE_ADMIN_SECRET_FORM_FAILURE, payload:err.message})
  })
}

export const updateAdminSecretFormData = (id,payload)=>(dispatch)=>{
  dispatch({type:types.UPDATE_ADMIN_SECRET_FORM_REQUEST});

return  axios.patch(`https://folk-server-fbkr.onrender.com/api/adminsecretsuccess/${id}`,payload)
  .then(res=>{
    return  dispatch({type:types.UPDATE_ADMIN_YOGA_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.UPDATE_ADMIN_SECRET_FORM_FAILURE, payload:err.message})
  })
}



export const deleteAdminSecretFormData = (id)=>(dispatch)=>{
  dispatch({type:types.DELETE_ADMIN_SECRET_FORM_REQUEST});

return  axios.delete(`https://folk-server-fbkr.onrender.com/api/adminsecretsuccess/${id}`)
  .then(res=>{
    return  dispatch({type:types.DELETE_ADMIN_SECRET_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.DELETE_ADMIN_SECRET_FORM_FAILURE, payload:err.message})
  })
}



export const patchAttendanceAdminSecretFormData = (payload)=>(dispatch)=>{
  dispatch({type:types.POST_SECRET_ATTENDANCE_REQUEST});

return  axios.patch(`https://folk-server-fbkr.onrender.com/api/secrets/postattendance`,payload)
  .then(res=>{

    return  dispatch({type:types.POST_SECRET_ATTENDANCE_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.POST_SECRET_ATTENDANCE_FAILURE, payload:err.message})
  })
}



export const getSecretDataBasedOnLocationAndUsers =()=>(dispatch)=>{
  dispatch({type:types.GET_SECRET_DATA_BASED_ON_LOCATION_AND_USERS_SUCCESS})
   return axios.get("https://folk-server-fbkr.onrender.com/api/secrets/events-by-location-users")
    .then(res=>{
   return dispatch({type:types.GET_SECRET_DATA_BASED_ON_LOCATION_AND_USERS_SUCCESS, payload:res.data})
    })
    .catch(err=>{
    return dispatch({type:types.GET_SECRET_DATA_BASED_ON_LOCATION_AND_USERS_FAILURE, payload:err.message})
    })
}









export const postAdminMindControlFormData = (payload)=>(dispatch)=>{
    dispatch({type:types.POST_ADMIN_MIND_CONTROL_FORM_REQUEST});

  return  axios.post("https://folk-server-fbkr.onrender.com/api/adminartcontrol/addadminartcontrol",payload)
    .then(res=>{
      return  dispatch({type:types.POST_ADMIN_MIND_CONTROL_FORM_SUCCESS, payload:res.data})
    })
    .catch(err=>{
     return   dispatch({type:types.POST_ADMIN_MIND_CONTROL_FORM_FAILURE, payload:err.message})
    })
}

export const getAdminMindControlFormData = ()=>(dispatch)=>{
  dispatch({type:types.GET_ADMIN_MIND_CONTROL_FORM_REQUEST});

return  axios.get("https://folk-server-fbkr.onrender.com/api/adminartcontrol")
  .then(res=>{
    return  dispatch({type:types.GET_ADMIN_MIND_CONTROL_FORM_SUCCESS, payload:res.data.data})
  })
  .catch(err=>{
   return   dispatch({type:types.GET_ADMIN_MIND_CONTROL_FORM_FAILURE, payload:err.message})
  })
}

export const singleAdminMindControlFormData = (id)=>(dispatch)=>{
  dispatch({type:types.GET_SINGLE_ADMIN_MIND_CONTROL_FORM_REQUEST});
 
return  axios.get(`https://folk-server-fbkr.onrender.com/api/adminartcontrol/${id}`)
  .then(res=>{
    return  dispatch({type:types.GET_SINGLE_ADMIN_MIND_CONTROL_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.GET_SINGLE_ADMIN_MIND_CONTROL_FORM_FAILURE, payload:err.message})
  })
}


export const deleteAdminMindControlFormData = (id)=>(dispatch)=>{
  dispatch({type:types.DELETE_ADMIN_MIND_CONTROL_FORM_REQUEST});

return  axios.delete(`https://folk-server-fbkr.onrender.com/api/adminartcontrol/${id}`)
  .then(res=>{
    return  dispatch({type:types.DELETE_ADMIN_MIND_CONTROL_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.DELETE_ADMIN_MIND_CONTROL_FORM_FAILURE, payload:err.message})
  })
}


export const updateAdminMindControlFormData = (id,payload)=>(dispatch)=>{
  dispatch({type:types.UPDATE_ADMIN_MIND_CONTROL_FORM_REQUEST});

return  axios.patch(`https://folk-server-fbkr.onrender.com/api/adminartcontrol/${id}`, payload)
  .then(res=>{
    return  dispatch({type:types.UPDATE_ADMIN_MIND_CONTROL_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.UPDATE_ADMIN_MIND_CONTROL_FORM_FAILURE, payload:err.message})
  })
}

export const patchAttendanceAdminMindFormData = (payload)=>(dispatch)=>{
  dispatch({type:types.POST_MIND_CONTROL_ATTENDANCE_REQUEST});

return  axios.patch(`https://folk-server-fbkr.onrender.com/api/arts/postattendance`,payload)
  .then(res=>{

    return  dispatch({type:types.POST_MIND_CONTROL_ATTENDANCE_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.POST_MIND_CONTROL_ATTENDANCE_FAILURE, payload:err.message})
  })
}


export const getMindDataBasedOnLocationAndUsers =()=>(dispatch)=>{
  dispatch({type:types.GET_MIND_CONTROL_DATA_BASED_ON_LOCATION_AND_USERS_REQUEST})
   return axios.get("https://folk-server-fbkr.onrender.com/api/arts/events-by-location-users")
    .then(res=>{
   return dispatch({type:types.GET_MIND_CONTROL_DATA_BASED_ON_LOCATION_AND_USERS_SUCCESS, payload:res.data})
    })
    .catch(err=>{
    return dispatch({type:types.GET_MIND_CONTROL_DATA_BASED_ON_LOCATION_AND_USERS_FAILURE, payload:err.message})
    })
}











export const postAdminTripsFormData = (payload)=>(dispatch)=>{
  dispatch({type:types.POST_ADMIN_TRIPS_FORM_REQUEST});

return  axios.post("https://folk-server-fbkr.onrender.com/api/adminTrips/addAdminTrips",payload,{
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

return  axios.get("https://folk-server-fbkr.onrender.com/api/adminTrips")
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
return  axios.get(`https://folk-server-fbkr.onrender.com/api/adminTrips/${id}`)
.then(res=>{

  return  dispatch({type:types.GET_SINGLE_ADMIN_TRIPS_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.GET_SINGLE_ADMIN_TRIPS_FORM_FAILURE, payload:err.message})
})
}


export const deleteAdminTripsFormData = (id)=>(dispatch)=>{
dispatch({type:types.DELETE_ADMIN_TRIPS_FORM_REQUEST});

return  axios.delete(`https://folk-server-fbkr.onrender.com/api/adminTrips/${id}`)
.then(res=>{
  return  dispatch({type:types.DELETE_ADMIN_TRIPS_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.DELETE_ADMIN_TRIPS_FORM_FAILURE, payload:err.message})
})
}


export const updateAdminTripsFormData = (id,payload)=>(dispatch)=>{
dispatch({type:types.UPDATE_ADMIN_TRIPS_FORM_REQUEST});

return  axios.patch(`https://folk-server-fbkr.onrender.com/api/adminTrips/${id}`, payload)
.then(res=>{
  return  dispatch({type:types.UPDATE_ADMIN_TRIPS_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.UPDATE_ADMIN_TRIPS_FORM_FAILURE, payload:err.message})
})
}


export const patchAttendanceAdminTripsFormData = (payload)=>(dispatch)=>{
  dispatch({type:types.POST_TRIPS_ATTENDANCE_REQUEST});

return  axios.patch(`https://folk-server-fbkr.onrender.com/api/trips/postattendance`,payload)
  .then(res=>{

    return  dispatch({type:types.POST_TRIPS_ATTENDANCE_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.POST_TRIPS_ATTENDANCE_FAILURE, payload:err.message})
  })
}


export const getTripsDataBasedOnLocationAndUsers =()=>(dispatch)=>{
  dispatch({type:types.GET_TRIPS_DATA_BASED_ON_LOCATION_AND_USERS_REQUEST})
   return axios.get("https://folk-server-fbkr.onrender.com/api/trips/events-by-location-users")
    .then(res=>{
   return dispatch({type:types.GET_TRIPS_DATA_BASED_ON_LOCATION_AND_USERS_SUCCESS, payload:res.data})
    })
    .catch(err=>{
    return dispatch({type:types.GET_TRIPS_DATA_BASED_ON_LOCATION_AND_USERS_FAILURE, payload:err.message})
    })
}







export const postAdminResidencyFormData = (payload)=>(dispatch)=>{
  dispatch({type:types.POST_ADMIN_RESIDENCY_FORM_REQUEST});

return  axios.post("https://folk-server-fbkr.onrender.com/api/adminResidency/addAdminResidency",payload,{
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

return  axios.get("https://folk-server-fbkr.onrender.com/api/adminResidency")
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
return  axios.get(`https://folk-server-fbkr.onrender.com/api/adminResidency/${id}`)
.then(res=>{
  return  dispatch({type:types.GET_SINGLE_ADMIN_RESIDENCY_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.GET_SINGLE_ADMIN_RESIDENCY_FORM_FAILURE, payload:err.message})
})
}


export const deleteAdminResidencyFormData = (id)=>(dispatch)=>{
dispatch({type:types.DELETE_ADMIN_RESIDENCY_FORM_REQUEST});

return  axios.delete(`https://folk-server-fbkr.onrender.com/api/adminResidency/${id}`)
.then(res=>{
  return  dispatch({type:types.DELETE_ADMIN_RESIDENCY_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.DELETE_ADMIN_RESIDENCY_FORM_FAILURE, payload:err.message})
})
}


export const updateAdminResidencyFormData = (id,payload)=>(dispatch)=>{

dispatch({type:types.UPDATE_ADMIN_RESIDENCY_FORM_REQUEST});

return  axios.patch(`https://folk-server-fbkr.onrender.com/api/adminResidency/${id}`, payload)
.then(res=>{
  return  dispatch({type:types.UPDATE_ADMIN_RESIDENCY_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.UPDATE_ADMIN_RESIDENCY_FORM_FAILURE, payload:err.message})
})
}







export const postAdminFestivalsFormData = (payload)=>(dispatch)=>{
  dispatch({type:types.POST_ADMIN_FESTIVALS_FORM_REQUEST});
  console.log("action form", payload)
return  axios.post("https://folk-server-fbkr.onrender.com/api/adminFestival/addAdminFestival",payload,{
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

return  axios.get("https://folk-server-fbkr.onrender.com/api/adminFestival")
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
return  axios.get(`https://folk-server-fbkr.onrender.com/api/adminFestival/${id}`)
.then(res=>{
  return  dispatch({type:types.GET_SINGLE_ADMIN_FESTIVALS_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.GET_SINGLE_ADMIN_FESTIVALS_FORM_FAILURE, payload:err.message})
})
}


export const deleteAdminFestivalsFormData = (id)=>(dispatch)=>{
dispatch({type:types.DELETE_ADMIN_FESTIVALS_FORM_REQUEST});

return  axios.delete(`https://folk-server-fbkr.onrender.com/api/adminFestival/${id}`)
.then(res=>{
  return  dispatch({type:types.DELETE_ADMIN_FESTIVALS_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.DELETE_ADMIN_FESTIVALS_FORM_FAILURE, payload:err.message})
})
}


export const updateAdminFestivalsFormData = (id,payload)=>(dispatch)=>{
dispatch({type:types.UPDATE_ADMIN_FESTIVALS_FORM_REQUEST});

return  axios.patch(`https://folk-server-fbkr.onrender.com/api/adminFestival/${id}`, payload)
.then(res=>{
  return  dispatch({type:types.UPDATE_ADMIN_FESTIVALS_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.UPDATE_ADMIN_FESTIVALS_FORM_FAILURE, payload:err.message})
})
}


export const patchAttendanceAdminFestivalsFormData = (payload)=>(dispatch)=>{
  dispatch({type:types.POST_FESTIVALS_ATTENDANCE_REQUEST});

return  axios.patch(`https://folk-server-fbkr.onrender.com/api/festivals/postattendance`,payload)
  .then(res=>{

    return  dispatch({type:types.POST_FESTIVALS_ATTENDANCE_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.POST_FESTIVALS_ATTENDANCE_FAILURE, payload:err.message})
  })
}


export const getFestivalsDataBasedOnLocationAndUsers =()=>(dispatch)=>{
  dispatch({type:types.GET_FESTIVALS_DATA_BASED_ON_LOCATION_AND_USERS_REQUEST})
   return axios.get("https://folk-server-fbkr.onrender.com/api/festival/events-by-location-users")
    .then(res=>{
   return dispatch({type:types.GET_FESTIVALS_DATA_BASED_ON_LOCATION_AND_USERS_SUCCESS, payload:res.data})
    })
    .catch(err=>{
    return dispatch({type:types.GET_FESTIVALS_DATA_BASED_ON_LOCATION_AND_USERS_FAILURE, payload:err.message})
    })
}


 






export const postAdminBlogsFormData = (payload)=>(dispatch)=>{
  dispatch({type:types.POST_ADMIN_BLOGS_FORM_REQUEST});

return  axios.post("https://folk-server-fbkr.onrender.com/api/adminblogs/addblogsdata",payload,{
  headers: {
    'Content-Type': 'multipart/form-data',
},
})
  .then(res=>{
    return  dispatch({type:types.POST_ADMIN_BLOGS_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.POST_ADMIN_BLOGS_FORM_FAILURE, payload:err.message})
  })
}

export const getAdminBlogsFormData = ()=>(dispatch)=>{
dispatch({type:types.GET_ADMIN_BLOGS_FORM_REQUEST});

return  axios.get("https://folk-server-fbkr.onrender.com/api/adminblogs")
.then(res=>{
  return  dispatch({type:types.GET_ADMIN_BLOGS_FORM_SUCCESS, payload:res.data.data})
})
.catch(err=>{
 return   dispatch({type:types.GET_ADMIN_BLOGS_FORM_FAILURE, payload:err.message})
})
}

export const singleAdminBlogsFormData = (id)=>(dispatch)=>{
dispatch({type:types.GET_SINGLE_ADMIN_BLOGS_FORM_REQUEST});
// console.log("action id: " + id)
return  axios.get(`https://folk-server-fbkr.onrender.com/api/adminblogs/${id}`)
.then(res=>{
  return  dispatch({type:types.GET_SINGLE_ADMIN_BLOGS_FORM_SUCCESS, payload:res.data.data})
})
.catch(err=>{
 return   dispatch({type:types.GET_SINGLE_ADMIN_BLOGS_FORM_FAILURE, payload:err.message})
})
}


export const deleteAdminBlogsFormData = (id)=>(dispatch)=>{
dispatch({type:types.DELETE_ADMIN_BLOGS_FORM_REQUEST});

return  axios.delete(`https://folk-server-fbkr.onrender.com/api/adminblogs/${id}`)
.then(res=>{
  return  dispatch({type:types.DELETE_ADMIN_BLOGS_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.DELETE_ADMIN_BLOGS_FORM_FAILURE, payload:err.message})
})
}


export const updateAdminBlogsFormData = (id,payload)=>(dispatch)=>{
dispatch({type:types.UPDATE_ADMIN_BLOGS_FORM_REQUEST});

return  axios.patch(`https://folk-server-fbkr.onrender.com/api/adminblogs/${id}`, payload)
.then(res=>{
  return  dispatch({type:types.UPDATE_ADMIN_BLOGS_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.UPDATE_ADMIN_BLOGS_FORM_FAILURE, payload:err.message})
})
}






export const postAdminGalleryFormData = (payload)=>(dispatch)=>{
  dispatch({type:types.POST_ADMIN_GALLERY_FORM_REQUEST});

return  axios.post("https://folk-server-fbkr.onrender.com/api/adminGallery/addAdminGallery",payload,{
  headers: {
    'Content-Type': 'multipart/form-data',
},
})
  .then(res=>{
    return  dispatch({type:types.POST_ADMIN_GALLERY_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.POST_ADMIN_GALLERY_FORM_FAILURE, payload:err.message})
  })
}

export const getAdminGalleryFormData = ()=>(dispatch)=>{
dispatch({type:types.GET_ADMIN_GALLERY_FORM_REQUEST});

return  axios.get("https://folk-server-fbkr.onrender.com/api/adminGallery")
.then(res=>{
  return  dispatch({type:types.GET_ADMIN_GALLERY_FORM_SUCCESS, payload:res.data.data})
})
.catch(err=>{
 return   dispatch({type:types.GET_ADMIN_GALLERY_FORM_FAILURE, payload:err.message})
})
}

export const singleAdminGalleryFormData = (id)=>(dispatch)=>{
dispatch({type:types.GET_SINGLE_ADMIN_GALLERY_FORM_REQUEST});
// console.log("action id: " + id)
return  axios.get(`https://folk-server-fbkr.onrender.com/api/adminGallery/${id}`)
.then(res=>{
  return  dispatch({type:types.GET_SINGLE_ADMIN_GALLERY_FORM_SUCCESS, payload:res.data.data})
})
.catch(err=>{
 return   dispatch({type:types.GET_SINGLE_ADMIN_GALLERY_FORM_FAILURE, payload:err.message})
})
}


export const deleteAdminGalleryFormData = (id)=>(dispatch)=>{
dispatch({type:types.DELETE_ADMIN_GALLERY_FORM_REQUEST});

return  axios.delete(`https://folk-server-fbkr.onrender.com/api/adminGallery/${id}`)
.then(res=>{
  return  dispatch({type:types.DELETE_ADMIN_GALLERY_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.DELETE_ADMIN_GALLERY_FORM_FAILURE, payload:err.message})
})
}


export const updateAdminGalleryFormData = (id,payload)=>(dispatch)=>{
dispatch({type:types.UPDATE_ADMIN_GALLERY_FORM_REQUEST});

return  axios.patch(`https://folk-server-fbkr.onrender.com/api/adminGallery/${id}`, payload)
.then(res=>{
  return  dispatch({type:types.UPDATE_ADMIN_GALLERY_FORM_SUCCESS, payload:res.data})
})
.catch(err=>{
 return   dispatch({type:types.POST_ADMIN_GALLERY_FORM_FAILURE, payload:err.message})
})
}







export const postYogaFormData = (payload)=>(dispatch)=>{
  dispatch({type:types.POST_YOGA_FORM_REQUEST});
  console.log(payload)

return  axios.post("https://folk-server-fbkr.onrender.com/api/yoga/addYogaData",payload)
  .then(res=>{
    return  dispatch({type:types.POST_YOGA_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.POST_YOGA_FORM_FAILURE, payload:err.message})
  })
}

export const getYogaFormData = ()=>(dispatch)=>{
  dispatch({type:types.GET_YOGA_FORM_REQUEST});

return  axios.get("https://folk-server-fbkr.onrender.com/api/yoga")
  .then(res=>{

    return  dispatch({type:types.GET_YOGA_FORM_SUCCESS, payload:res.data.data})
  })
  .catch(err=>{
   return   dispatch({type:types.GET_YOGA_FORM_FAILURE, payload:err.message})
  })
}








export const postSecretOFSuccessFormData = (payload)=>(dispatch)=>{
  dispatch({type:types.POST_SECRET_OF_SUCCESS_FORM_REQUEST});

return  axios.post("https://folk-server-fbkr.onrender.com/api/secrets/addsecretsdata",payload)
  .then(res=>{
    return  dispatch({type:types.POST_SECRET_OF_SUCCESS_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.POST_SECRET_OF_SUCCESS_FORM_FAILURE, payload:err.message})
  })
}

export const getSecretOfSuccessFormData = ()=>(dispatch)=>{
  dispatch({type:types.GET_SECRET_OF_SUCCESS_FORM_REQUEST});

return  axios.get("https://folk-server-fbkr.onrender.com/api/secrets")
  .then(res=>{
      
    return  dispatch({type:types.GET_SECRET_OF_SUCCESS_FORM_SUCCESS, payload:res.data.data})
  })
  .catch(err=>{
   return   dispatch({type:types.GET_SECRET_OF_SUCCESS_FORM_FAILURE, payload:err.message})
  })
}







export const postArtOfMindFormData = (payload)=>(dispatch)=>{
  dispatch({type:types.POST__ART_OF_MIND_FORM_REQUEST});

return  axios.post("https://folk-server-fbkr.onrender.com/api/arts/addArtsData",payload)
  .then(res=>{
    return  dispatch({type:types.POST__ART_OF_MIND_FORM_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.POST_YOGA_FORM_FAILURE, payload:err.message})
  })
}

export const getArtOfMindFormData = ()=>(dispatch)=>{
  dispatch({type:types.GET_ART_OF_MIND_FORM_REQUEST});

return  axios.get("https://folk-server-fbkr.onrender.com/api/arts")
  .then(res=>{
      
    return  dispatch({type:types.GET_ART_OF_MIND_FORM_SUCCESS, payload:res.data.data})
  })
  .catch(err=>{
   return   dispatch({type:types.GET_ART_OF_MIND_FORM_FAILURE, payload:err.message})
  })
}







export const postFestivalsFormData = (payload)=>(dispatch)=>{
  dispatch({type:types.POST_FESTIVALS_REQUEST});

return  axios.post("https://folk-server-fbkr.onrender.com/api/festival/addFestivalData",payload)
  .then(res=>{
    return  dispatch({type:types.POST_FESTIVALS_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.POST_FESTIVALS_FAILURE, payload:err.message})
  })
}

export const getFestivalsFormData = ()=>(dispatch)=>{
  dispatch({type:types.GET_FESTIVALS_REQUEST});

return  axios.get("https://folk-server-fbkr.onrender.com/api/festival")
  .then(res=>{
   
    return  dispatch({type:types.GET_FESTIVALS_SUCCESS, payload:res.data.data})
  })
  .catch(err=>{
   return   dispatch({type:types.GET_FESTIVALS_FAILURE, payload:err.message})
  })
}






export const postTripsFormData = (payload)=>(dispatch)=>{
  dispatch({type:types.POST_TRIPS_REQUEST});

return  axios.post("https://folk-server-fbkr.onrender.com/api/trips/addTripsData",payload)
  .then(res=>{
    return  dispatch({type:types.POST_TRIPS_SUCCESS, payload:res.data})
  })
  .catch(err=>{
   return   dispatch({type:types.POST_TRIPS_FAILURE, payload:err.message})
  })
}

export const getTripsFormData = ()=>(dispatch)=>{
  dispatch({type:types.GET_TRIPS_REQUEST});

return  axios.get("https://folk-server-fbkr.onrender.com/api/trips")
  .then(res=>{
      
    return  dispatch({type:types.GET_TRIPS_SUCCESS, payload:res.data.data})
  })
  .catch(err=>{
   return   dispatch({type:types.GET_TRIPS_FAILURE, payload:err.message})
  })
}
