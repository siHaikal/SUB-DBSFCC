document.addEventListener('DOMContentLoaded', () => {
    const submitForm= document.querySelector('#submitButton')
        submitForm.addEventListener('click', (e) => {
            e.preventDefault()
            addBook()
    })
})

const restoreBooks = () => {
    const dataBook = getDataBook('Bookshelf_Apps');
    console.log(dataBook)
    if (dataBook.length > 0) {
        dataBook.forEach((book) => {
            const bookList = makeListBook(book);
            const unfinishedList = document.querySelector('.unfinishedList');
            const finishedList = document.querySelector('.finishedList');
    
            if (!book.isCompleted) {
            unfinishedList.append(bookList);
            } else {
            finishedList.append(bookList);
            }
        });
    }
};

window.addEventListener('load', () => {
    if (localStorage.getItem('Bookshelf_Apps')) {
        restoreBooks()
    }
})

const getDataBook = (key) => {
    const data = JSON.parse(localStorage.getItem(key))
    return data
}

const DataBookObj = (id, title, author, release, isCompleted) => {
    return {id, title, author, release, isCompleted}
}

let dataBook = []
const addBook = () => {
    const STORAGE_KEY = 'Bookshelf_Apps'
    const RENDER_EVENT = 'render-book'
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
    const id = () => {
        return +new Date()
    }

    const bookObj = DataBookObj(id(), title, author, release, isFinished())
    dataBook.push(bookObj)
    const dataBookStorage = JSON.stringify(dataBook)
    localStorage.setItem(STORAGE_KEY, dataBookStorage)
    
    document.addEventListener(RENDER_EVENT, function () {
        const unfinishedList = document.querySelector('.unfinishedList');
        unfinishedList.innerHTML = '';

        const finishedList = document.querySelector('.finishedList');
        finishedList.innerHTML = '';
    
        for (const bookItem of dataBook) {
            const bookItemlist = makeListBook(bookItem);
            if (!bookItem.isCompleted) {
                unfinishedList.append(bookItemlist);
            } else {
                finishedList.append(bookItemlist);
            }
        }
    });

    document.dispatchEvent(new Event(RENDER_EVENT))
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
        makeTitleCard.innerText = data.title
    const makeAuthorCard = document.createElement('small')
        makeAuthorCard.setAttribute('class', 'blockquote-footer')
        makeAuthorCard.innerHTML = `<i>${data.author}</i>`
    const makeDateCard = document.createElement('p')
        makeDateCard.setAttribute('class', 'card-text')
        makeDateCard.innerText = data.release
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


