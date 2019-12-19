export const deleteEntry = (entryId) => {

   return (dispatch) => {
      fetch(`http://localhost:3000/entries/${entryId.id}`, {
       method: 'DELETE',
     })
     .then(response => response.json())
     .then(data => dispatch({type: 'DELETE_ENTRY', payload: data}))
   }
}
