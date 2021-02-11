export const createLists = (state = { obj: {} }, { type, payload }) => {
  switch (type) {
    case "Update_List_Request":
      return { loading: true, obj: {} };

    case "Update_List_Success":
      return { loading: false, obj: payload };

    case "Update_List_Fail":
      return { loading: false, error: payload };

    default:
      return state;
  }
};
