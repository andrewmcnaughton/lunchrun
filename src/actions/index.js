import { itemsRef } from "../config/firebase";
import { FETCH_ITEMS } from "./types";

export const addItem = newItem => async dispatch => {
  itemsRef.push().set(newItem);
};

export const removeItem = removeItemId => async dispatch => {
  itemsRef.child(removeItemId).remove();
};

export const fetchItems = () => async dispatch => {
  itemsRef.on("value", snapshot => {
    dispatch({
      type: FETCH_ITEMS,
      payload: snapshot.val()
    });
  });
};