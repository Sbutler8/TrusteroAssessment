const GET_TASKS = 'task/getTasks';
const SET_TASK = 'task/setTask';

const getTasks = (listId,tasks) => {
  return {
    type: GET_TASKS,
    listId,tasks,
  };
};

const setTask = (task, listId) => ({
  type: SET_TASK,
  payload: task, listId
});


export const getAllTasks = (listId) => async (dispatch) => {
  const response = await fetch(`/api/tasks/${listId}`);
  let data = await response.json()
  dispatch(getTasks(listId,data.tasks));
  return data.tasks;
};

// export const setSelectedTask = (task) => async (dispatch) => {
//   const response = await fetch(`/api/tasks/${listId}`);
//   let data = await response.json()
//   dispatch(getTasks(listId,data.tasks));
//   return data.tasks;
// };

export const editTask = (formObj) => async (dispatch) => {
  const { id, title, description, status } = formObj;
  const formData = { id, title, description, status };
  console.log('FORM:',formData.status)
    console.log('formData:',formData)

    const res = await fetch(`/api/tasks/edit/${id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
    });

    dispatch(setTask(res.task, res.listId));
    return res
  };

const initialState = {};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return { ...state, [action.listId]: action.tasks }
    case SET_TASK:
      console.log('payload:',action.payload)
      return { ...state, [state.tasks]: {[action.listId]:action.task} };
    default:
      return state;
  }
};

export default taskReducer;
