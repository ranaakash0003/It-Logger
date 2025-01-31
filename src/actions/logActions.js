import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG } from "./types";

// export const getLogs = () => {
//     return async(dispatch) => {
//         setLoading();
//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({
//             type:  GET_LOGS,
//             payload: data
//         });
//     }
// }

//Get logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

//Add new log
export const addLogs = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};


//Delete logs from server
export const deleteLog = (id) => async dispatch => {
    try {
      setLoading();
    await fetch(`/logs/${id}`, {
        method: 'DELETE'
    });

      dispatch({
        type: DELETE_LOG,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.data
      });
    }
  };


//  Set Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
