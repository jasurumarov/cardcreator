const form = document.querySelector("form")
const inputName = document.querySelector(".name-input")
const inputEmail = document.querySelector(".email-input")
const inputJob = document.querySelector(".job-input")
const inputEducation = document.querySelector(".education-input")
const inputMessage = document.querySelector(".message-input")
const submitBtn = document.querySelector(".submit-btn")
const cardsGroup = document.querySelector(".cards-group")

const DATA = []

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    let newCard = {
        name: inputName.value,
        email: inputEmail.value,
        job: inputJob.value,
        education: inputEducation.value,
        message: inputMessage.value,
    }
    DATA.push(newCard)
    createCard(DATA)
    inputName.value = ""
    inputEmail.value = ""
    inputJob.value = ""
    inputEducation.value = ""
    inputMessage.value = ""
})

function createCard(data) {
    while (cardsGroup.firstChild) {
        cardsGroup.firstChild.remove()
    }
    data.forEach((el, index) => {
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
            <div></div>
            <h3>${el.name}</h3>
            <h4>${el.education}</h4>
            <p>${el.job}</p>
            <h6>${el.message}</h6>
            <h5>${el.email}</h5>
            <button onclick="deleteCard(${index})" class="delete-btn">Delete</button>
        `
        cardsGroup.appendChild(card)
    });
}
createCard(DATA)

function deleteCard(index) {
    DATA.splice(index, 1)
    createCard(DATA)
}