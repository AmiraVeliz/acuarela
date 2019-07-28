import { GET, POST, notAuthorizedGET } from '../api/api';
import UserSession from './userSession/userSession';

const url = 'aquarelles';

export const getAllAquarelles = (dispatch) => {
  dispatch({
    type: 'FETCH_AQUARELLES_START'
  });
  notAuthorizedGET(url, dispatch)
    .then(response => {
      dispatch({
        type: 'FETCH_AQUARELLES_FULFILLED',
        payload: response
      });
    })
    .catch(error => {
      console.log('fetch aquarelles error', error);
      dispatch({
        type: 'FETCH_AQUARELLES_REJECTED',
      });
    })
}

export const getAquarellesByCurrentUser = (dispatch) => {
  dispatch({
    type: 'FETCH_AQUARELLES_BY_USER_START'
  });
  const authorId = UserSession.getUser().id;
  GET(`${url}/user/${authorId}`)
    .then(response => {
      dispatch({
        type: 'FETCH_AQUARELLES_BY_USER_FULFILLED',
        payload: response
      });
    })
    .catch(error => {
      console.log('fetch aquarelles by user error', error);
      dispatch({
        type: 'FETCH_AQUARELLES_BY_USER_REJECTED',
      });
    })
}

export const getAquarelleDetails = (dispatch, aquarelleId) => {
  dispatch({
    type: 'FETCH_AQUARELLE_DETAILS_START'
  });
  GET(`${url}/${aquarelleId}`)
    .then(response => {
      dispatch({
        type: 'FETCH_AQUARELLE_DETAILS_FULFILLED',
        payload: response
      });
    })
    .catch(error => {
      console.log('fetch aquarelles detail error', error);
      dispatch({
        type: 'FETCH_AQUARELLE_DETAILS_REJECTED',
      });
    })
}

export const saveAquarelle = (dispatch, aquarelleData) => {
  dispatch({
    type: 'SAVE_AQUARELLE_START'
  });
  //TODO add author id and name before the save it, improve it
  const userData =  UserSession.getUser();
  aquarelleData.author = userData.userName;
  aquarelleData.authorId = userData.id;
  POST(url, aquarelleData)
    .then(response => {
      dispatch({
        type: 'SAVE_AQUARELLE_FULFILLED',
        payload: response
      });
    })
    .catch(error => {
      console.log('save aquarelles error', error);
      dispatch({
        type: 'SAVE_AQUARELLE_REJECTED',
      });
    })
}

export const startLoadingPictures = (dispatch) => {
  dispatch({
    type: 'LOADING_AQUARELLES_STARTS'
  });
}

export const successLoadingPictures = (dispatch) => {
  dispatch({
    type: 'LOADING_AQUARELLES_SUCCESS'
  });
}

export const errorLoadingPictures = (dispatch, error) => {
  dispatch({
    type: 'LOADING_AQUARELLES_ERROR',
    error
  });
}
