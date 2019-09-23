window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed')
    fetch('http://jservice.io/api/clues')
        .then(response => response.json())
        .then(createHeader())
        .then(data => createCards(data))

})

const createHeader = () => {
    const header = document.querySelector('#trivia-header')
    const headerImage = document.createElement('img')

    headerImage.src = "https://2cadxu4apic638boqt1kzcoz-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/56553712_2391490011079150_2175175312202006528_n.jpg"
    header.appendChild(headerImage)
}

const createCards = (data) => {
    const triviaCardContainer = document.querySelector('#trivia-card-container')
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
