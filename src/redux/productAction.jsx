import axios from "axios";
import { ipAdd } from "../components/IpAdd";

export const fetchProductData = () => (dispatch) => {
  axios
    .get(`${ipAdd}/product`)
    .then((response) => {
      const productData = response.data.product;
      console.log("productData", response.data.product);
      dispatch({ type: "FETCH_PRODUCT_SUCCESS", payload: productData });
    })
    .catch((error) => {
      console.error("Error fetching product data:", error);
      dispatch({ type: "FETCH_PRODUCT_FAILURE" });
    });
  return {};
};
