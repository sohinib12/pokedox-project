

export const LOAD_ITEMS = "items/LOAD_ITEMS";
export const UPDATE_ITEM = "items/UPDATE_ITEM";
export const REMOVE_ITEM = "items/REMOVE_ITEM";
export const ADD_ITEM = "items/ADD_ITEM";

const load = (items, pokemonId) => ({
  type: LOAD_ITEMS,
  items,
  pokemonId
});

const update = (item) => ({
  type: UPDATE_ITEM,
  item
});

const add = (item) => ({
  type: ADD_ITEM,
  item
});

const remove = (itemId, pokemonId) => ({
  type: REMOVE_ITEM,
  itemId,
  pokemonId
});

//thunk action creator
// export const getItems = (pokemonId) => async (dispatch) =>{
//   console.log('hii')
//   const response = await fetch(`/api/pokemon/${pokemonId}/items`)

//   if(response.ok){
//     const items = await response.json()
//     dispatch(load(items, pokemonId))
//     return items
//   }
// }

// //update
// export const updateItems = (payload) => async (dispatch) =>{
//   const response = await fetch(`/api/items`, {
//       method: 'put',
//       headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload)
//   })

//   if(response.ok){
//     const item = await response.json()
//     dispatch(update(item))
//     return item
//   }
// }

// //add
// export const addItem = (payload) => async (dispatch) =>{
//   const response = await fetch(`/api/items`, {
//       method: 'post',
//       headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload)
//   })

//   if(response.ok){
//     const item = await response.json()
//     dispatch(add(item))
//     return item
//   }
// }

// //delete
// export const deleteItem = (payload) => async (dispatch) =>{
//   const response = await fetch(`/api/items`, {
//       method: 'delete',
//   })

//   if(response.ok){
//     const item = await response.json()
//     dispatch(delete(item))
//     return item
//   }
// }


const initialState = {};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ITEMS:
      const newItems = {};
      action.items.forEach(item => {
        newItems[item.id] = item;
      })
      return {
        ...state,
        ...newItems
      }
    case REMOVE_ITEM:
      const newState = { ...state };
      delete newState[action.itemId];
      return newState;
    case ADD_ITEM:
    case UPDATE_ITEM:
      return {
        ...state,
        [action.item.id]: action.item
      };
    default:
      return state;
  }
};

export default itemsReducer;
