window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed')
    fetch('http://jservice.io/api/clues')
        .then(response => response.json())
        .then(createHeader())
        .then(createNewTriviaCard())
        .then(data => createCards(data))
        .catch(error => console.log(error))

})
const triviaCardContainer = document.querySelector('#trivia-card-container')

const createHeader = () => {
    const header = document.querySelector('#trivia-header')
    const headerImage = document.createElement('img')

    headerImage.src = "https://2cadxu4apic638boqt1kzcoz-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/56553712_2391490011079150_2175175312202006528_n.jpg"
    header.appendChild(headerImage)
}

const createCards = (data) => {

    data.forEach(trivia => {
        const triviaCard = document.createElement('div')
        triviaCard.className = 'card'
        triviaCard.innerHTML = `
            <img class="card-img-top" src="https://www.publicdomainpictures.net/pictures/160000/nahled/light-bulb-1458612887G8a.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Question: ${trivia.question}</h5>
                <p class="card-text">Answer: ${trivia.answer}</p>
            </div>
        `
        triviaCardContainer.appendChild(triviaCard)
    })

}

const createNewTriviaCard = () => {
    const form = document.querySelector('.trivia-form')
    form.addEventListener('submit', event => {
        event.preventDefault()
        const formData = new FormData(form)
       
        console.log("Fd", formData)
        let newQuestion = event.target.question.value
        let newAnswer = event.target.answer.value
        const triviaCard = document.createElement('div')
        triviaCard.className = 'card'
        triviaCard.innerHTML = `
            <img class="card-img-top" src="https://www.publicdomainpictures.net/pictures/160000/nahled/light-bulb-1458612887G8a.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Question: ${newQuestion}</h5>
                <p class="card-text">Answer: ${newAnswer}</p>
            </div>
        `
        triviaCardContainer.appendChild(triviaCard)

        postTrivia(newQuestion, newAnswer)


    })
}

postTrivia = (question, answer) => {
    console.log("question", question)
    fetch('url', {
        method: 'post',
        body: JSON.stringify({
            question: question,
            answer: answer
        })
    }).then(response => response.json())
        .then(res => console.log(res))
        .catch(error => console.log(error))
}