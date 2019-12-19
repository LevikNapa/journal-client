export const editEntry = (data) => {

   return (dispatch) => {
     fetch(`http://localhost:3000/entries/${data.id}`, {
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       },
       method: 'PATCH',
       body:JSON.stringify(data)
     })
     .then(response => response.json())
     .then(data => dispatch({type: 'EDIT_ENTRY', payload: data}))


   }
}
