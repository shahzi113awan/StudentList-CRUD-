export const UpdateList = (state = { list: [] }, { type, payload }) => {
  switch (type) {
    case "Product_List_Request":
      return { loading: true, list: [] };

    case "Product_List_Success":
      return { loading: false, list: payload };

    case "Product_List_Fail":
      return { loading: false, error: payload };

    default:
      return state;
  }
};
