document.addEventListener('DOMContentLoaded', () => {
    const submitForm= document.querySelector('#submitButton')
    submitForm.addEventListener('click', (e) => {
        e.preventDefault()
        addBook()
    })
})

function isStorageExist() {
    if (typeof (Storage) === undefined) {
      alert('Browser kamu tidak mendukung local storage');
      return false;
    }
    return true;
}

const id = () => {
    return +new Date
}

const DataBookObj = (id, title, author, Releasae, isCompleted) => {
    return {id, title, author, Releasae, isCompleted}
}

const addBook = () => {
    let dataBook = []
    const STORAGE_KEY = 'Bookshelf_Apps'
    const RENDER_EVENT = 'renderBook'
    const title = document.getElementById('inputTitle').value
    const author = document.getElementById('inputName').value
    const release = document.getElementById('inputDate').value
    const isFinished = () => {
        const is = document.getElementById('isFinished')
        if (is.checked) {
            return is.value
        }
        return false
    }

    const bookObj = DataBookObj(id(), title, author, release, isFinished())
    dataBook.push(bookObj)
    document.dispatchEvent(new Event(RENDER_EVENT))

    document.addEventListener(RENDER_EVENT, () => {
        const book = makeListBook(bookObj)
        if (bookObj.isCompleted === true) {
            const finishedList = document.querySelector('.finishedList')
            finishedList.appendChild(book)
        } else if (bookObj.isCompleted === false) {
            const unfinishedList = document.querySelector('.unfinishedList')
            unfinishedList.appendChild(book)
        }

    })
}

const makeListBook = (data) => {
    const makeDiv = document.createElement('div')
        makeDiv.setAttribute('class', 'card')
        makeDiv.classList.add('mt-5')
    const cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')
    makeDiv.appendChild(cardBody)

    const makeTitleCard = document.createElement('h5')
        makeTitleCard.setAttribute('class', 'card-title')
        makeTitleCard.innerText = 'haikal'
    const makeAuthorCard = document.createElement('small')
        makeAuthorCard.setAttribute('class', 'blockquote-footer')
        makeAuthorCard.innerHTML = '<i>Penulis</i>'
    const makeDateCard = document.createElement('p')
        makeDateCard.setAttribute('class', 'card-text')
        makeDateCard.innerText = 'date'
    const finishedBuuton = document.createElement('button')
        finishedBuuton.setAttribute('class', 'btn btn-primary me-2')
        finishedBuuton.setAttribute('type', 'button')
        finishedBuuton.innerText = 'Selesai Baca'
    const editButton = document.createElement('button')
        editButton.setAttribute('class', 'btn btn-primary me-2')
        editButton.innerText = 'Edit'
        finishedBuuton.setAttribute('type', 'button')
    const deleteButton = document.createElement('button')
        deleteButton.setAttribute('class', 'btn btn-danger me-2')
        deleteButton.innerText = 'Hapus'
        finishedBuuton.setAttribute('type', 'button')

    cardBody.appendChild(makeTitleCard)
    cardBody.appendChild(makeAuthorCard)
    cardBody.appendChild(makeDateCard)
    cardBody.appendChild(finishedBuuton)
    cardBody.appendChild(editButton)
    cardBody.appendChild(deleteButton)

    return makeDiv
}

