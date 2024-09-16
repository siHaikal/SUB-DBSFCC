import Swal from "sweetalert2";

function main() {
  const baseUrl = "https://notes-api.dicoding.dev/v2";
  const loader = document.querySelector("custom-loader");

  const getBooks = () => {
    fetch(`${baseUrl}/notes`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderAllCards(responseJson.data);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      })
      .finally(() => {
        loader.style.display = "none";
      });
  };

  const insertBook = (book) => {
    loader.style.display = "block";

    fetch(`${baseUrl}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": "12345",
      },
      body: JSON.stringify(book),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        showResponseMessage(responseJson.message);
        getBooks();
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const removeBook = (bookId) => {
    loader.style.display = "block";
    fetch(`${baseUrl}/notes/${bookId}`, {
      method: "DELETE",
      headers: {
        "X-Auth-Token": "12345",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        showResponseMessage(responseJson.message);
        getBooks();
      })
      .catch((err) => {
        showResponseMessage(err);
      });
  };

  const renderAllCards = (books) => {
    const cards = document.querySelector(".cards");
    cards.innerHTML = "";
    books.forEach((book) => {
      const customCard = document.createElement("custom-card");
      customCard.setData(book);
      cards.appendChild(customCard);

      const deleteButton = customCard.getDeleteButton();
      deleteButton.addEventListener("click", () => {
        removeBook(book.id);
      });
    });
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    Swal.fire(message);
  };

  document.addEventListener("DOMContentLoaded", () => {
    loader.style.display = "block";

    const customForm = document.createElement("custom-form");
    const form = document.querySelector(".form");
    form.appendChild(customForm);

    const customNav = document.createElement("custom-nav");
    const nav = document.querySelector(".navbar");
    nav.appendChild(customNav);

    const buttonAddNote = customForm.getButton();

    buttonAddNote.addEventListener("click", () => {
      const title = customForm.getTitle();
      const body = customForm.getBody();

      const book = {
        title: title,
        body: body,
      };
      insertBook(book);
    });

    getBooks();
  });
}

export default main;
