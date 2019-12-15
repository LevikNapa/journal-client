export const addEntry = (data) => {

   return (dispatch) => {
     fetch('http://localhost:3000/entries', {
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       },
       method: 'POST',
       body:JSON.stringify(data)
     })
     .then(response => response.json())
     .then(data => dispatch({type: 'ADD_ENTRY', payload: data}))


   }
}
