document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('.addButton')
    const submitForm = document.querySelector('.tambahDataBuku')
    const submitButton = document.getElementById('submitButton')
    const search = document.getElementById('search')

    addButton.addEventListener('click', () => {
        const exampleModalLabel = document.getElementById('exampleModalLabel')
        exampleModalLabel.innerText = 'Tambah Data Buku'
        submitButton.innerText = 'Tambah Buku'
        addButton.setAttribute('value', 'true')
        document.getElementById('inputTitle').setAttribute('value', '')
        document.getElementById('inputName').setAttribute('value', '')
        document.getElementById('inputDate').setAttribute('value', '')
    })

    search.addEventListener('keyup', (e) => {
        searching(e)
    })

    submitForm.addEventListener('submit', () => {
        if(addButton.value == 'true') {
            addBook()
        } else {
            if(confirm('Apakah anda yakin ingin mengubah data')) {
                editBook()
            }
        }
    })
})

const restoreBooks = () => {
    const dataBooks = getDataBook('Bookshelf_Apps');
    if (dataBooks.length > 0) {
        dataBooks.forEach((book) => {
            dataBook.push(book)
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

let dataBook = []
const RENDER_EVENT = 'render-book'
const STORAGE_KEY = 'Bookshelf_Apps'

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

window.addEventListener('load', () => {
    if (localStorage.getItem('Bookshelf_Apps')) {
        restoreBooks()
    }
})


// FUNGSI TAMBAH BUKU
const addBook = () => {
    const title = document.getElementById('inputTitle').value
    const author = document.getElementById('inputName').value
    const release = document.getElementById('inputDate').value
    const is = isFinished(document.getElementById('isFinished'))
    const id = () => {
        return +new Date()
    }

    const bookObj = DataBookObj(id(), title, author, release, is)
    dataBook.push(bookObj)
    const dataBookStorage = JSON.stringify(dataBook)
    localStorage.setItem(STORAGE_KEY, dataBookStorage)

    document.dispatchEvent(new Event(RENDER_EVENT))
    alert('data berhasil di tambahkan')
}


// FUNGSI EDIT BUKU
const editBook = () => {
    const bookId = document.getElementById('inputId').value
    for (const index in dataBook) {
        if(dataBook[index].id == bookId ) {
            dataBook[index].title = document.getElementById('inputTitle').value
            dataBook[index].author = document.getElementById('inputName').value
            dataBook[index].release = document.getElementById('inputDate').value
            dataBook[index].isFinished = isFinished(document.getElementById('isFinished'))
            
            const dataBookStorage = JSON.stringify(dataBook)
            localStorage.setItem(STORAGE_KEY, dataBookStorage)
            document.dispatchEvent(new Event(RENDER_EVENT))
        }
    }
}

const searching = (e) => {
    const filter = e.target.value.toLowerCase()
    const hasilPencarian = document.getElementById('hasilPencarian')
    const hasilPencarianList = document.querySelector('.hasilPencarian')
    hasilPencarianList.innerHTML = ''
    
    for (let i = 0; i < dataBook.length; i++) {
        const judul = dataBook[i].title.toLowerCase()

        if(judul.startsWith(filter)) {
            hasilPencarian.hidden = false
            const searchBookList = makeListBook(dataBook[i])
            hasilPencarianList.appendChild(searchBookList)
            document.getElementById('unfinishedList').hidden = true
            document.getElementById('finishedList').hidden = true
        } 
    }
    
    if(filter.length <= 0) {
        hasilPencarian.hidden = true
        document.getElementById('unfinishedList').hidden = false
        document.getElementById('finishedList').hidden = false
    }
}

// FUNGSI BUAT ELEMENT HTML DAFTAR BUKU
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
    const deleteButton = document.createElement('button')
        deleteButton.setAttribute('class', 'btn btn-danger me-2')
        deleteButton.innerText = 'Hapus'
        deleteButton.setAttribute('type', 'button')
        deleteButton.addEventListener('click', () => {
            deleteBookList(data)
        })
    const editButton = document.createElement('button')
        editButton.setAttribute('class', 'btn btn-primary me-2')
        editButton.classList.add('editButton')
        editButton.innerText = 'Edit'
        editButton.setAttribute('type', 'button')
        editButton.setAttribute('data-bs-toggle', 'modal')
        editButton.setAttribute('data-bs-target', '#exampleModal')
        editButton.addEventListener('click', () => {
            editBookButton(data)
    })

    if(data.isCompleted) {
        finishedBuuton.addEventListener('click', () => {
            UnfinishedButton(data)
        })
        finishedBuuton.innerText = 'Belum Selesai Baca'
    } else {
        finishedBuuton.addEventListener('click', () => {
            finishedButton(data)
        })
        finishedBuuton.innerText = 'Selesai Baca'
    }

    cardBody.appendChild(makeTitleCard)
    cardBody.appendChild(makeAuthorCard)
    cardBody.appendChild(makeDateCard)
    cardBody.appendChild(finishedBuuton)
    cardBody.appendChild(editButton)
    cardBody.appendChild(deleteButton)

    return makeDiv
}

const getDataBook = (key) => {
    const data = JSON.parse(localStorage.getItem(key))
    return data
}

const DataBookObj = (id, title, author, release, isCompleted) => {
    return {id, title, author, release, isCompleted}
}

const isFinished = (is) => {
    if (is.checked) {
        return is.value
    }
    return false
}

const saveData = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBook))
}

const checkData = (id, param) => {
    if (id)  {
        dataBook[id].isCompleted = param
        document.dispatchEvent(new Event(RENDER_EVENT))
        saveData()
    }
}

const findBookIndex = (id) => {
    for (const index in dataBook) {
        if(dataBook[index].id === id) {
            return index
        }
    }
    return -1
}

const finishedButton = (data) => {
    const BookId = findBookIndex(data.id)
    checkData(BookId, true)
}
const UnfinishedButton = (data) => {
    const BookId = findBookIndex(data.id)
    checkData(BookId, false)
}

const deleteBookList = (data) => {
    const BookId = findBookIndex(data.id)
    if (BookId)  {
        dataBook.splice(BookId, 1)
        document.dispatchEvent(new Event(RENDER_EVENT))
        saveData()
    } 
}

const editBookButton = (data) => {
    const exampleModalLabel = document.getElementById('exampleModalLabel')
    exampleModalLabel.innerText = 'Edit Data Buku'
    const submitButton = document.getElementById('submitButton')
    submitButton.innerText = 'Edit Data'
    const addButton = document.querySelector('.addButton')
    addButton.setAttribute('value', 'false')

    document.getElementById('inputId').setAttribute('value', data.id)
    document.getElementById('inputTitle').setAttribute('value', data.title)
    document.getElementById('inputName').setAttribute('value', data.author)
    document.getElementById('inputDate').setAttribute('value', data.release)
}

