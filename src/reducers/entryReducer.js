export default function entryReducer(state = {entries:[]}, action) {
  console.log(10)
  switch (action.type) {
    case 'FETCH_ENTRIES':
      return {entries: action.payload}
    case 'ADD_ENTRY':
    return {...state, entries: [...state.entries, action.payload]}

    case 'DELETE_ENTRY':
    let entriesOne = state.entries.map(entry => {
      if (entry.id === action.payload.id) {
        return action.payload
      } else {
        return entry
      }
    })
    return {...state, entries: entriesOne}

    case 'EDIT_ENTRY':
    let entriesTwo = state.entries.map(entry => {
      if (entry.id === action.payload.id) {
        return action.payload
      } else {
        return entry
      }
    })
    return {...state, entries: entriesTwo}

    default:
      return state
  }

}
