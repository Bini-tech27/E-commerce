import axios from "axios";
import { ipAdd } from "../IpAdd";
import { useParams } from "react-router";

const deleteProduct = () => {
      const { id } = useParams();

  axios
    .delete(`${ipAdd}/product/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error("Error deleting product:", error);
    });
};

export default deleteProduct;
