window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed')
    fetch('http://jservice.io/api/clues')
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(res => createCards(res))
        .then(createHeader())



})

const createHeader = () => {
    const header = document.querySelector('#trivia-header')
    const headerImage = document.createElement('img')
    headerImage.src = "https://2cadxu4apic638boqt1kzcoz-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/56553712_2391490011079150_2175175312202006528_n.jpg"
    header.appendChild(headerImage)
    console.log('header', header)
    return header
}

const createCards = (data) => {
    const triviaCardContainer = document.querySelector('#trivia-card-container')
    data.forEach(trivia => {
        const triviaCard = document.createElement('div')
        triviaCard.className = 'card'
        const image = document.createElement('img')
        image.className = 'card-img-top'
        image.src = "https://www.publicdomainpictures.net/pictures/160000/nahled/light-bulb-1458612887G8a.jpg"
        const cardBody = document.createElement('div')
        cardBody.className = 'card-body'
        const question = document.createElement('h5')
        question.innerText = `Question: ${trivia.question}`
        const answer = document.createElement('p')
        answer.className = 'card-text'
        answer.innerText = `Answer: ${trivia.answer}`

        cardBody.append(question, answer)
        triviaCard.append(image, cardBody)
        triviaCardContainer.appendChild(triviaCard)
        console.log("trivia card", triviaCard)

    })

}
