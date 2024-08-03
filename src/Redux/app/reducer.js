import * as types from "./actionTypes";
const init = {
  isLoading: false,
  isError: false,
  adminYogaData: [],
  adminYogaSingleData: {},
  adminGetDataBasedOnLocation:[],
  adminGetSecretDataBasedOnLocation:[],
  adminSecretData: [],
  adminSecretSingleData: {},
  adminMindControlDataBasedOnLocation:[],
  adminMindControlData: [],
  adminMindControlSingleData: {},
  adminTripsData: [],
  adminTripsSingle: {},
  adminTripsControlDataBasedOnLocation:[],
  adminResidencyData: [],
  adminResidencySingle: {},
  adminFestivals: [],
  adminFestivalsSingle: {},
  adminFestivalsControlDataBasedOnLocation:[],
  adminBlogsData: [],
  adminBlogsDataSingle: {},
  adminGalleryData: [],
  adminGalleryDataSingle: {},
  yogaData: [],
  singleYogaData: {},
  secretData: [],
  singleSecretData: {},
  artOfMindData: [],
  singleArtOfMindData: {},
  tripsData: [],
  singleTripsData: {},
  festivalsData: [],
  singleFestivalsData: {},

};

export const reducer = (oldState = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.POST_ADMIN_YOGA_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };
    case types.POST_ADMIN_YOGA_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
      };
    case types.POST_ADMIN_YOGA_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
      case types.GET_DATA_BASED_ON_LOCATION_AND_USERS_REQUEST:
        return {
          ...oldState,
          isLoading: true,
          adminGetDataBasedOnLocation:[],
          isError: false,
        };
      case types.GET_DATA_BASED_ON_LOCATION_AND_USERS_SUCCESS:
        return {
          ...oldState,
          isLoading: false,
          adminGetDataBasedOnLocation:payload,
          isError: false,
        };
      case types.GET_DATA_BASED_ON_LOCATION_AND_USERS_FAILURE:
        return {
          ...oldState,
          isLoading: false,
          adminGetDataBasedOnLocation:[],
          isError: true,
        };

    case types.GET_ADMIN_YOGA_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        adminYogaData: [],
      };
    case types.GET_ADMIN_YOGA_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        adminYogaData: payload,
      };
    case types.GET_ADMIN_YOGA_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        adminYogaData: [],
      };
    case types.POST_ADMIN_SECRET_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        adminSecretData: [],
      };
    case types.POST_ADMIN_SECRET_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        adminSecretData: [],
      };
    case types.POST_ADMIN_SECRET_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        adminSecretData: [],
      };

      case types.GET_SECRET_DATA_BASED_ON_LOCATION_AND_USERS_REQUEST:
        return {
          ...oldState,
          isLoading: true,
          isError: false,
          adminGetSecretDataBasedOnLocation: [],
        };
      case types.GET_SECRET_DATA_BASED_ON_LOCATION_AND_USERS_SUCCESS:
        return {
          ...oldState,
          isLoading: false,
          isError: false,
          adminGetSecretDataBasedOnLocation: payload,
        };
      case types.GET_SECRET_DATA_BASED_ON_LOCATION_AND_USERS_FAILURE:
        return {
          ...oldState,
          isLoading: false,
          isError: true,
          adminGetSecretDataBasedOnLocation: [],
        };
    case types.GET_ADMIN_SECRET_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        adminSecretData: [],
      };
    case types.GET_ADMIN_SECRET_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        adminSecretData: payload,
      };
    case types.GET_ADMIN_SECRET_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        adminSecretData: [],
      };
    case types.POST_ADMIN_MIND_CONTROL_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        adminMindControlData: [],
      };
    case types.POST_ADMIN_MIND_CONTROL_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        adminMindControlData: [],
      };
    case types.POST_ADMIN_MIND_CONTROL_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        adminMindControlData: [],
      };case types.GET_MIND_CONTROL_DATA_BASED_ON_LOCATION_AND_USERS_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        adminMindControlDataBasedOnLocation:[],
        isError: false,
      };
    case types.GET_MIND_CONTROL_DATA_BASED_ON_LOCATION_AND_USERS_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        adminMindControlDataBasedOnLocation:payload,
        isError: false,
      };
    case types.GET_MIND_CONTROL_DATA_BASED_ON_LOCATION_AND_USERS_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        adminMindControlDataBasedOnLocation:[],
        isError: true,
      };


    case types.GET_ADMIN_MIND_CONTROL_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        adminMindControlData: [],
      };
    case types.GET_ADMIN_MIND_CONTROL_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        adminMindControlData: payload,
      };
    case types.GET_ADMIN_MIND_CONTROL_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        adminMindControlData: [],
      };
    case types.GET_SINGLE_ADMIN_MIND_CONTROL_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        adminMindControlSingleData: [],
      };
    case types.GET_SINGLE_ADMIN_MIND_CONTROL_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        adminMindControlSingleData: payload,
      };
    case types.GET_SINGLE_ADMIN_MIND_CONTROL_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        adminMindControlSingleData: [],
      };
    case types.GET_ADMIN_TRIPS_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        adminTripsData: [],
      };
    case types.GET_ADMIN_TRIPS_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        adminTripsData: payload,
      };
    case types.GET_ADMIN_TRIPS_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        adminTripsData: [],
      };

      case types.GET_TRIPS_DATA_BASED_ON_LOCATION_AND_USERS_REQUEST:
        return {
          ...oldState,
          isLoading: true,
          adminTripsControlDataBasedOnLocation:[],
          isError: false,
        };
      case types.GET_TRIPS_DATA_BASED_ON_LOCATION_AND_USERS_SUCCESS:
        return {
          ...oldState,
          isLoading: false,
          adminTripsControlDataBasedOnLocation:payload,
          isError: false,
        };
      case types.GET_TRIPS_DATA_BASED_ON_LOCATION_AND_USERS_FAILURE:
        return {
          ...oldState,
          isLoading: false,
          adminTripsControlDataBasedOnLocation:[],
          isError: true,
        };
    case types.GET_SINGLE_ADMIN_TRIPS_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        adminTripsSingle: [],
      };
    case types.GET_SINGLE_ADMIN_TRIPS_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        adminTripsSingle: payload,
      };
    case types.GET_SINGLE_ADMIN_TRIPS_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        adminTripsSingle: [],
      };
    case types.GET_ADMIN_RESIDENCY_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        adminResidencyData: [],
      };
    case types.GET_ADMIN_RESIDENCY_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        adminResidencyData: payload,
      };
    case types.GET_ADMIN_RESIDENCY_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        adminResidencyData: [],
      };
    case types.GET_SINGLE_ADMIN_RESIDENCY_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        adminResidencySingle: [],
      };
    case types.GET_SINGLE_ADMIN_RESIDENCY_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        adminResidencySingle: payload,
      };
    case types.GET_SINGLE_ADMIN_RESIDENCY_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        adminResidencySingle: [],
      };
    case types.GET_ADMIN_FESTIVALS_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        adminFestivals: [],
      };
    case types.GET_ADMIN_FESTIVALS_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        adminFestivals: payload,
      };
    case types.GET_ADMIN_FESTIVALS_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        adminFestivals: [],
      };

      case types.GET_FESTIVALS_DATA_BASED_ON_LOCATION_AND_USERS_REQUEST:
        return {
          ...oldState,
          isLoading: true,
          adminFestivalsControlDataBasedOnLocation:[],
          isError: false,
        };
      case types.GET_FESTIVALS_DATA_BASED_ON_LOCATION_AND_USERS_SUCCESS:
        return {
          ...oldState,
          isLoading: false,
          adminFestivalsControlDataBasedOnLocation:payload,
          isError: false,
        };
      case types.GET_FESTIVALS_DATA_BASED_ON_LOCATION_AND_USERS_FAILURE:
        return {
          ...oldState,
          isLoading: false,
          adminFestivalsControlDataBasedOnLocation:[],
          isError: true,
        };
    case types.GET_SINGLE_ADMIN_FESTIVALS_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        adminFestivalsSingle: [],
      };
    case types.GET_SINGLE_ADMIN_FESTIVALS_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        adminFestivalsSingle: payload,
      };
    case types.GET_SINGLE_ADMIN_FESTIVALS_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        adminFestivalsSingle: [],
      };
    case types.GET_ADMIN_BLOGS_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        adminBlogsData: [],
      };
    case types.GET_ADMIN_BLOGS_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        adminBlogsData: payload,
      };
    case types.GET_ADMIN_BLOGS_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        adminBlogsData: [],
      };
    case types.GET_SINGLE_ADMIN_BLOGS_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        adminBlogsDataSingle: [],
      };
    case types.GET_SINGLE_ADMIN_BLOGS_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        adminBlogsDataSingle: payload,
      };
    case types.GET_SINGLE_ADMIN_BLOGS_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        adminBlogsDataSingle: [],
      };

    case types.GET_ADMIN_GALLERY_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        adminGalleryData: [],
      };
    case types.GET_ADMIN_GALLERY_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        adminGalleryData: payload,
      };
    case types.GET_ADMIN_GALLERY_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        adminGalleryData: [],
      };
    case types.GET_SINGLE_ADMIN_GALLERY_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        adminGalleryDataSingle: [],
      };
    case types.GET_SINGLE_ADMIN_GALLERY_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        adminGalleryDataSingle: payload,
      };
    case types.GET_SINGLE_ADMIN_GALLERY_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        adminGalleryDataSingle: [],
      };

    case types.GET_YOGA_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        yogaData: [],
      };
    case types.GET_YOGA_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        yogaData: payload,
      };
    case types.GET_YOGA_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        yogaData: [],
      };

    case types.GET_ART_OF_MIND_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        artOfMindData: [],
      };
    case types.GET_ART_OF_MIND_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        artOfMindData: payload,
      };
    case types.GET_ART_OF_MIND_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        artOfMindData: [],
      };

    case types.GET_SECRET_OF_SUCCESS_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        secretData: [],
      };
    case types.GET_SECRET_OF_SUCCESS_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        secretData: payload,
      };
    case types.GET_SECRET_OF_SUCCESS_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        secretData: [],
      };

    case types.GET_FESTIVALS_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        festivalsData: [],
      };
    case types.GET_FESTIVALS_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        festivalsData: payload,
      };
    case types.GET_FESTIVALS_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        festivalsData: [],
      };

    case types.GET_SECRET_OF_SUCCESS_FORM_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        secretData: [],
      };
    case types.GET_SECRET_OF_SUCCESS_FORM_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        secretData: payload,
      };
    case types.GET_SECRET_OF_SUCCESS_FORM_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        secretData: [],
      };

    case types.GET_FESTIVALS_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        festivalsData: [],
      };
    case types.GET_FESTIVALS_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        festivalsData: payload,
      };
    case types.GET_FESTIVALS_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        festivalsData: [],
      };

    case types.GET_TRIPS_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        tripsData: [],
      };
    case types.GET_TRIPS_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        tripsData: payload,
      };
    case types.GET_TRIPS_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        tripsData: [],
      };

    default:
      return oldState;
  }
};
