fetch(`http://localhost:3000/trivia`)
    .then(response => response.json())
    .then(triviaData => console.log(triviaData))
    .catch(error => console.log(error))


// const createHeader = () => {

// }

// const createCards = (data) => {

// }
