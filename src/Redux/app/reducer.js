import * as types from "./actionTypes"
const init ={
    isLoading : false,
    isError:false,
    adminYogaData:[],
    adminSecretData:[],
    adminMindControlData:[]
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
                    adminSecretData:payload
                }
            case types.POST_ADMIN_SECRET_FORM_FAILURE:
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
                        adminMindControlData:payload
                    }
                case types.POST_ADMIN_MIND_CONTROL_FORM_FAILURE:
                    return{
                        ...oldState,
                        isLoading:false,
                        isError:true,
                        adminMindControlData:[]
                    }
        default :
            return oldState
    }
}