import { db } from "../../Firebase";
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";

export const getTodos = () => async (dispatch) => {
   onSnapshot(collection(db, "todos"),
      (snapshot) => {
         const alldocs = [];
         snapshot.docs.forEach((doc) => { alldocs.push({ ...doc.data(), id: doc.id }) })
         dispatch({
            type: "GET_TODOS",
            payload: alldocs
         })
      })
}

export const addTodos = (data) => async (dispatch) => {
   await addDoc(collection(db, "todos"), {
      title: data.title,
      description: data.description
   })
   dispatch({
      type: "ADD_TODO",
   });
};

export const removeTodos = (id) => async (dispatch) => {
   const storedDoc = doc(db, "todos", id)
   await deleteDoc(storedDoc);
   dispatch({
      type: "REMOVE_TODO",
      payload: id
   });
}

export const updateTodos = (editedValue) => async (dispatch) => {
   const oldValue = doc(db, "todos", editedValue.id)
   await updateDoc(oldValue, { title: editedValue.title, description: editedValue.description })
   dispatch({
      type: "UPDATE_TODO",
      editedValue,
   });
};

