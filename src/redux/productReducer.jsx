import {
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "./productActionTypes";
const initialState = {
  data: [],
  loading: true,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: "Error fetching product data",
      };
    default:
      return state;
  }
};

export default productReducer;
