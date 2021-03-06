
const SET_LIST = 'list/setList';
const GET_LISTS = 'list/getLists';
const REMOVE_LIST = 'list/removeList';
const SET_LIST_TITLE = 'list/setListTitle';

const setList = (list) => {
  return {
    type: SET_LIST,
    payload: list,
  };
};

const getLists = (lists) => {
  return {
    type: GET_LISTS,
    payload: lists,
  };
};

const remove = (id) => ({
  type: REMOVE_LIST,
  payload: id
});

const setTitle = (list, index) => ({
  type: SET_LIST_TITLE,
  list, index
});


export const getAllLists = (userId) => async (dispatch) => {
  const response = await fetch(`/api/lists/${userId}`);
  let data = await response.json()
  dispatch(getLists(data.lists));
  return data.lists;
};

export const editListTitle = (formObj) => async (dispatch) => {

    const { id, title, index } = formObj;
    const formData = { id, title };

    const res = await fetch(`/api/lists/edit/${id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
    });
    let data = await res.json(res)
    dispatch(setTitle(data, index));
    return res
  };

  export const removeList = (formObj ) => async (dispatch) => {

    const { id, title } = formObj;
    const formData = { id, title };

    const res = await fetch(`/api/lists/remove/${id}`, {
      method: "DELETE",
    });

    dispatch(remove(formData.id));
    return res
  };

export const addNewList = (newList) => async (dispatch) => {

    const {title} = newList;
    const formData = {title};

    const res = await fetch(`/api/lists/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
      let data = await res.json();
      dispatch(setList(data));
      return res;
    }


const initialState = {};

const listReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_LIST:
      newState = Object.assign({}, state);
      newState.list = action.payload;
      return newState;
    case GET_LISTS:
      return { ...state, lists: action.payload }
    case REMOVE_LIST:
      newState = {lists: [...state.lists.filter((list) => list.id !== action.payload)]};
      return newState;
    case SET_LIST_TITLE:
      (state.lists[action.index].title) = action.list.title
      return {...state}
    default:
      return state;
  }
};

export default listReducer;
