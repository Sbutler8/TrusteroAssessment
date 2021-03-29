const GET_TASKS = 'task/getTasks';
const SET_TASK = 'task/setTask';

const getTasks = (listId,tasks) => {
  return {
    type: GET_TASKS,
    listId,tasks,
  };
};

const setTask = (task, index) => ({
  type: SET_TASK,
  task, index
});


export const getAllTasks = (listId) => async (dispatch) => {
  const response = await fetch(`/api/tasks/${listId}`);
  let data = await response.json()
  dispatch(getTasks(listId,data.tasks));
  return data.tasks;
};

export const editTask = (formObj) => async (dispatch) => {
  const { id, title, description, status, taskIndex } = formObj;
  const formData = { id, title, description, status };
  console.log('FORM:',formData.status)
    console.log('formData:',formData)

    const res = await fetch(`/api/tasks/edit/${id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
    });
    let data = await res.json();
    console.log('data:', data)
    dispatch(setTask(data, taskIndex));
    return res
  };

const initialState = {};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return { ...state, [action.listId]: action.tasks }
    case SET_TASK:
      state[action.task.list_id][action.index] = action.task
      return {...state }
    default:
      return state;
  }
};

export default taskReducer;
