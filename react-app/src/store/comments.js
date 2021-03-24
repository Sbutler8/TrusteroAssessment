const GET_COMMENTS = 'comment/getComments';
const SET_TASK_STATUS = 'task/setTaskStatus';

const getComments = (comments) => {
  return {
    type: GET_COMMENTS,
    payload: comments,
  };
};

const setStatus = (status) => ({
  type: SET_TASK_STATUS,
  payload: status
});


export const getAllComments = (taskId) => async (dispatch) => {
  const response = await fetch(`/api/comments/${taskId}`);
  let data = await response.json()
  dispatch(getComments(data.comments));
  return data.tasks;
};

// export const setSelectedTask = (task) => async (dispatch) => {
//   const response = await fetch(`/api/tasks/${listId}`);
//   let data = await response.json()
//   dispatch(getTasks(listId,data.tasks));
//   return data.tasks;
// };

export const editTaskStatus = (formObj ) => async (dispatch) => {

    const { id, status } = formObj;
    const formData = { id, status };

    const res = await fetch(`/api/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify(formData),
    });

    dispatch(setStatus(res));
    return res
  };

const initialState = {};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, comments: action.comments }
    case SET_TASK_STATUS:
      return { ...state, task: action.payload };
    default:
      return state;
  }
};

export default taskReducer;
