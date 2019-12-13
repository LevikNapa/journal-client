export default function entryReducer(state = {entries:[]}, action) {
  switch (action.type) {
    case 'FETCH_ENTRIES':
      return {entries: action.payload}

    default:
      return state
  }

}
