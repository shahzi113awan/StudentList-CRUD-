import axios from "axios";
export const editStudent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "Update_List_Request",
    });
    const { data } = await axios.get(
      "http://localhost:4000/students/edit-student/" +id
    );
    dispatch({
      type: "Update_List_Success",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "Update_List_Fail",
      payload: "error",
    });
  }
};
