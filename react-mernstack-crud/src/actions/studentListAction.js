import axios from "axios";
export const listStudent = () => async (dispatch) => {
  try {
    dispatch({
      type: "Product_List_Request",
    });
    const { data } = await axios.get("http://localhost:4000/students/");
    console.log(data);
    dispatch({
      type: "Product_List_Success",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "Product_List_Fail",
      payload: "error",
    });
  }
};
