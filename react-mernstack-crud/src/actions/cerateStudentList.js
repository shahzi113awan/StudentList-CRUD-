import axios from "axios";
export const createList = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: "Create_List_Request",
    });
    const { data } = await axios.post(
      "http://localhost:4000/students/create-student",
      obj
    );
    dispatch({
      type: "Create_List_Success",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "Create_List_Fail",
      payload: "error",
    });
  }
};
