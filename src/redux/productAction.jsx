import axios from "axios";
import { ipAdd } from "../components/IpAdd";
import {
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "./productActionTypes";



export const fetchProductSuccess = (productData) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: productData,
  };
};

export const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  };
};

export const fetchProductData =  () => {
    return (dispatch) => {

    axios
      .get(`${ipAdd}/product`)
      .then((response) => {
              console.log("AxiosResponse", response);

        const productData = response.data.product;
          console.log("Product Data:", productData);

              dispatch(fetchProductSuccess(productData));

        
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
              dispatch(fetchProductFailure(error.message));

      })
    }
  };

