export function fetchEntries() {

  return (dispatch) => {
    fetch('http://localhost:3000/entries')
    .then(response => response.json())
    .then(data => dispatch({
      type: 'FETCH_ENTRIES',
      payload: data
    }))
  }
}
