const charactersList = ( characters ) => {
    return characters && characters.filter(item => (
        item.length !== {}
   )).map(item => (
       {
           name: item.name,
           eyes: item.eye_color,
           gender: item.gender
       }
   ))
}

export default charactersList
