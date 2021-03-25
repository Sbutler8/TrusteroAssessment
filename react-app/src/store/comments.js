const GET_COMMENTS = 'comment/getComments';
const ADD_COMMENT = 'comment/addComment';
const REMOVE_COMMENT = 'comment/removeComment';

const getComments = (comments) => {
  return {
    type: GET_COMMENTS,
    payload: comments,
  };
};

const add = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};

const remove = (id) => ({
  type: REMOVE_COMMENT,
  payload: id,
});


export const getAllComments = (taskId) => async (dispatch) => {
  const response = await fetch(`/api/comments/${taskId}`);
  let data = await response.json()
  dispatch(getComments(data.comments));
  return data.comments;
};

export const addComment = (formObj) => async (dispatch) => {

  const { comment, id } = formObj;
  const formData = { comment, id};

  const res = await fetch(`/api/comments/add/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
    let data = await res.json();
    dispatch(add(data.comment));
    return res;
  }

  export const removeComment = (id) => async (dispatch) => {

    const res = await fetch(`/api/comments/remove/${id}`, {
      method: "DELETE",
    });
    console.log('RES',res)

    dispatch(remove(id));
    return res
  };

// export const setSelectedTask = (task) => async (dispatch) => {
//   const response = await fetch(`/api/tasks/${listId}`);
//   let data = await response.json()
//   dispatch(getTasks(listId,data.tasks));
//   return data.tasks;
// };


const initialState = {};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, comments: action.payload }
    case ADD_COMMENT:
      return { ...state, comments: action.payload }
    case REMOVE_COMMENT:
      let newState = {comments: [...state.comments.filter((comment) => comment.id !== action.payload)]};
      return newState;
    default:
      return state;
  }
};

export default commentReducer;
