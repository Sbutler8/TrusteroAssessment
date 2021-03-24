const GET_TASKS = 'task/getTasks';
const SET_TASK_STATUS = 'task/setTaskStatus';

const getTasks = (tasks) => {
  return {
    type: GET_TASKS,
    payload: tasks,
  };
};

const setStatus = (status) => ({
  type: SET_TASK_STATUS,
  payload: status
});


export const getAllTasks = (listId) => async (dispatch) => {
  const response = await fetch(`/api/tasks/${listId}`);
  let data = await response.json()
  dispatch(getTasks(data.tasks));
  return data.tasks;
};

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
    case GET_TASKS:
      return { ...state, tasks: action.payload }
    case SET_TASK_STATUS:
      return { ...state, task: action.payload };
    default:
      return state;
  }
};

export default taskReducer;
