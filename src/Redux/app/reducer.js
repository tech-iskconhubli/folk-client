import * as types from "./actionTypes"
const init ={
    isLoading : false,
    isError:false,
    adminYogaData:[],
    adminYogaSingleData:{},
    adminSecretData:[],
    adminSecretSingleData:{},
    adminMindControlData:[],
    adminMindControlSingleData:{},
    adminTripsData:[],
    adminTripsSingle:{},
    adminResidencyData:[],
    adminResidencySingle:{}
}

export const reducer = (oldState = init,action)=>{
    const {type,payload}= action;

    switch(type){
        case types.POST_ADMIN_YOGA_FORM_REQUEST:
            return{
                ...oldState,
                isLoading:true,
                isError:false,
               
            }
        case types.POST_ADMIN_YOGA_FORM_SUCCESS:
            return{
                ...oldState,
                isLoading:false,
                isError:false,
               
            }
        case types.POST_ADMIN_YOGA_FORM_FAILURE:
            return{
                ...oldState,
                isLoading:false,
                isError:true,
               
            }

            case types.GET_ADMIN_YOGA_FORM_REQUEST:
                return{
                    ...oldState,
                    isLoading:true,
                    isError:false,
                    adminYogaData:[]
                }
            case types.GET_ADMIN_YOGA_FORM_SUCCESS:
                return{
                    ...oldState,
                    isLoading:false,
                    isError:false,
                    adminYogaData:payload
                }
            case types.GET_ADMIN_YOGA_FORM_FAILURE:
                return{
                    ...oldState,
                    isLoading:false,
                    isError:true,
                    adminYogaData:[]
                }
            case types.POST_ADMIN_SECRET_FORM_REQUEST:
                return{
                    ...oldState,
                    isLoading:true,
                    isError:false,
                    adminSecretData:[]
                }
            case types.POST_ADMIN_SECRET_FORM_SUCCESS:
                return{
                    ...oldState,
                    isLoading:false,
                    isError:false,
                    adminSecretData:[]
                }
            case types.POST_ADMIN_SECRET_FORM_FAILURE:
                return{
                    ...oldState,
                    isLoading:false,
                    isError:true,
                    adminSecretData:[]
                }
                case types.GET_ADMIN_SECRET_FORM_REQUEST:
                    return{
                        ...oldState,
                        isLoading:true,
                        isError:false,
                        adminSecretData:[]
                    }
                case types.GET_ADMIN_SECRET_FORM_SUCCESS:
                    return{
                        ...oldState,
                        isLoading:false,
                        isError:false,
                        adminSecretData:payload
                    }
                case types.GET_ADMIN_SECRET_FORM_FAILURE:
                    return{
                        ...oldState,
                        isLoading:false,
                        isError:true,
                        adminSecretData:[]
                    }
                case types.POST_ADMIN_MIND_CONTROL_FORM_REQUEST:
                    return{
                        ...oldState,
                        isLoading:true,
                        isError:false,
                        adminMindControlData:[]
                    }
                case types.POST_ADMIN_MIND_CONTROL_FORM_SUCCESS:
                    return{
                        ...oldState,
                        isLoading:false,
                        isError:false,
                        adminMindControlData:[]
                    }
                case types.POST_ADMIN_MIND_CONTROL_FORM_FAILURE:
                    return{
                        ...oldState,
                        isLoading:false,
                        isError:true,
                        adminMindControlData:[]
                    }
                    case types.GET_ADMIN_MIND_CONTROL_FORM_REQUEST:
                        return{
                            ...oldState,
                            isLoading:true,
                            isError:false,
                            adminMindControlData:[]
                        }
                    case types.GET_ADMIN_MIND_CONTROL_FORM_SUCCESS:
                        return{
                            ...oldState,
                            isLoading:false,
                            isError:false,
                            adminMindControlData:payload
                        }
                    case types.GET_ADMIN_MIND_CONTROL_FORM_FAILURE:
                        return{
                            ...oldState,
                            isLoading:false,
                            isError:true,
                            adminMindControlData:[]
                        }
                        case types.GET_SINGLE_ADMIN_MIND_CONTROL_FORM_REQUEST:
                            return{
                                ...oldState,
                                isLoading:true,
                                isError:false,
                                adminMindControlSingleData:[]
                            }
                        case types.GET_SINGLE_ADMIN_MIND_CONTROL_FORM_SUCCESS:
                            return{
                                ...oldState,
                                isLoading:false,
                                isError:false,
                                adminMindControlSingleData:payload
                            }
                        case types.GET_SINGLE_ADMIN_MIND_CONTROL_FORM_FAILURE:
                            return{
                                ...oldState,
                                isLoading:false,
                                isError:true,
                                adminMindControlSingleData:[]
                            }
                            case types.GET_ADMIN_TRIPS_FORM_REQUEST:
                                return{
                                    ...oldState,
                                    isLoading:true,
                                    isError:false,
                                    adminTripsData:[]
                                }
                            case types.GET_ADMIN_TRIPS_FORM_SUCCESS:
                                return{
                                    ...oldState,
                                    isLoading:false,
                                    isError:false,
                                    adminTripsData:payload
                                }
                            case types.GET_ADMIN_TRIPS_FORM_FAILURE:
                                return{
                                    ...oldState,
                                    isLoading:false,
                                    isError:true,
                                    adminTripsData:[]
                                }
                                case types.GET_SINGLE_ADMIN_TRIPS_FORM_REQUEST:
                                    return{
                                        ...oldState,
                                        isLoading:true,
                                        isError:false,
                                        adminTripsSingle:[]
                                    }
                                case types.GET_SINGLE_ADMIN_TRIPS_FORM_SUCCESS:
                                    return{
                                        ...oldState,
                                        isLoading:false,
                                        isError:false,
                                        adminTripsSingle:payload
                                    }
                                case types.GET_SINGLE_ADMIN_TRIPS_FORM_FAILURE:
                                    return{
                                        ...oldState,
                                        isLoading:false,
                                        isError:true,
                                        adminTripsSingle:[]
                                    }
                                    case types.GET_ADMIN_RESIDENCY_FORM_REQUEST:
                                        return{
                                            ...oldState,
                                            isLoading:true,
                                            isError:false,
                                            adminResidencyData:[]
                                        }
                                    case types.GET_ADMIN_RESIDENCY_FORM_SUCCESS:
                                        return{
                                            ...oldState,
                                            isLoading:false,
                                            isError:false,
                                            adminResidencyData:payload
                                        }
                                    case types.GET_ADMIN_RESIDENCY_FORM_FAILURE:
                                        return{
                                            ...oldState,
                                            isLoading:false,
                                            isError:true,
                                            adminResidencyData:[]
                                        }
                                        case types.GET_SINGLE_ADMIN_RESIDENCY_FORM_REQUEST:
                                            return{
                                                ...oldState,
                                                isLoading:true,
                                                isError:false,
                                                adminResidencySingle:[]
                                            }
                                        case types.GET_SINGLE_ADMIN_RESIDENCY_FORM_SUCCESS:
                                            return{
                                                ...oldState,
                                                isLoading:false,
                                                isError:false,
                                                adminResidencySingle:payload
                                            }
                                        case types.GET_SINGLE_ADMIN_RESIDENCY_FORM_FAILURE:
                                            return{
                                                ...oldState,
                                                isLoading:false,
                                                isError:true,
                                                adminResidencySingle:[]
                                            }
        default :
            return oldState
    }
}