import notesData from './noteData.js'
import './customCard.js'
import './customForm.js'
import './customNav.js'

notesData.forEach((notes) => {
    const customCard = document.createElement('custom-card')
    const cards = document.querySelector('.cards')

    customCard.setData(notes)
    cards.appendChild(customCard)
})

const customForm = document.createElement('custom-form')
const form = document.querySelector('.form')

form.appendChild(customForm)

const customNav = document.createElement('custom-nav')
const nav = document.querySelector('.navbar')

nav.appendChild(customNav)


