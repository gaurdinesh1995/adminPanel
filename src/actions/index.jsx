export const UPDATE_AUTH = "UPDATE_AUTH";
export const updateAuth = (auth) => ({
  type: UPDATE_AUTH,
  auth,
});

export const UPDATE_SETTINGS = "UPDATE_SETTINGS";
export const updateSettings = (settings) => ({
  type: UPDATE_SETTINGS,
  settings,
});

export const ADD_TOAST = "ADD_TOAST";
export const addToast = (data) => ({
  type: ADD_TOAST,
  data,
});

export const REMOVE_TOAST = "REMOVE_TOAST";
export const removeToast = (id) => ({
  type: REMOVE_TOAST,
  id,
});

export const LIST_SHOPS = "LIST_SHOPS";
export const listShops = (shops) => ({
  type: LIST_SHOPS,
  shops,
});
