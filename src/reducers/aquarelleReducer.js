import Immutable from 'seamless-immutable';

const initalState = Immutable({
  aquarelle: {},
  aquarelles: [],
  loading: false
});

export default (state = initalState, action = {}) => {
  switch (action.type) {
    case 'FETCH_AQUARELLES_START': {
      return state.merge({
        loading: true
      });
    }

    case 'FETCH_AQUARELLES_FULFILLED': {
      return state.merge({
        aquarelles: action.payload.data.data,
        loading: false
      });
    }

    case 'FETCH_AQUARELLES_REJECTED': {
      return state.merge({
        loading: false,
      });
    }

    case 'FETCH_AQUARELLES_BY_USER_START': {
      return state.merge({
        loading: true
      });
    }

    case 'FETCH_AQUARELLES_BY_USER_FULFILLED': {
      return state.merge({
        aquarelles: action.payload.data.data,
        loading: false
      });
    }

    case 'FETCH_AQUARELLES_BY_USER_REJECTED': {
      return state.merge({
        loading: false
      });
    }

    case 'SAVE_AQUARELLE_START': {
      return state.merge({
        loading: true
      });
    }

    case 'SAVE_AQUARELLE_FULFILLED': {
      return state.merge({
        aquarelle: action.payload.data.data,
        aquarelles: [...state.aquarelles, action.payload.data.data],
        loading: false
      });
    }

    case 'SAVE_AQUARELLE_REJECTED': {
      return state.merge({
        loading: false
      });
    }

    case 'LOADING_AQUARELLE_STARTS': {
      return state.merge({
        loading: true
      });
    }

    case 'LOADING_AQUARELLE_SUCCESS': {
      return state.merge({
        loading: false
      });
    }

    case 'LOADING_AQUARELLE_ERROR': {
      return state.merge({
        loading: false,
      });
    }

    case 'FETCH_AQUARELLE_DETAILS_START': {
      return state.merge({
        loading: true
      });
    }

    case 'FETCH_AQUARELLE_DETAILS_FULFILLED': {
      return state.merge({
        aquarelle: action.payload.data.data,
        loading: false
      });
    }

    case 'FETCH_AQUARELLE_DETAILS_REJECTED': {
      return state.merge({
        loading: false,
      });
    }

    default:
      return state;
  }
}
