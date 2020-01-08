export const addEntry = (data) => {
  console.log(5)
   return (dispatch) => {
     fetch('http://localhost:3000/entries', {
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       },
       method: 'POST',
       body:JSON.stringify(data)
     })
     .then(response => {
       console.log(6)
       return response.json()
     })
     .then(data => {
       console.log(7)
       // why no return key word needed?
       dispatch({type: 'ADD_ENTRY', payload: data})
     })
     console.log(8)
   }
   console.log(9)
}
