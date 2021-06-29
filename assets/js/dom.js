const LIST_BOOK_UNCOMPLETED = "incompleteBookshelfList";
const LIST_BOOK_COMPLETED = "completeBookshelfList";
const ID_BUKU = "bukuId";
const searchBookTitle = document.querySelector("#searchBookTitle");
searchBookTitle.addEventListener("keyup", searchListBookTitle);

function makeLogBook(
  inputBookTitle,
  inputBookAuthor,
  inputBookYear,
  isComplete
) {
  const textTitle = document.createElement("h3");
  textTitle.innerHTML = inputBookTitle;

  const textAuthor = document.createElement("p");
  textAuthor.innerHTML = "Penulis : " + inputBookAuthor;

  const textYear = document.createElement("p");
  textYear.innerHTML = "Tahun : " + inputBookYear;

  const textContainer = document.createElement("article");
  textContainer.classList.add("book_item");
  textContainer.append(textTitle, textAuthor, textYear);

  if (isComplete) {
    textContainer.append(createUndoButton(), createTrashButton());
  } else {
    textContainer.append(createCheckButton(), createTrashButton());
  }
  return textContainer;
}

function addLogBook() {
  const completeBookList = document.getElementById(LIST_BOOK_COMPLETED);
  const uncompleteBookList = document.getElementById(LIST_BOOK_UNCOMPLETED);

  const titleBook = document.getElementById("inputBookTitle").value;
  const authorBook = document.getElementById("inputBookAuthor").value;
  const yearBook = document.getElementById("inputBookYear").value;
  const checkBox = document.getElementById("inputBookIsComplete");

  if (checkBox.checked == true) {
    const book = makeLogBook(titleBook, authorBook, yearBook, true);

    const objek_buku = composeBookObject(titleBook, authorBook, yearBook, true);

    book[ID_BUKU] = objek_buku.id;
    books.push(objek_buku);

    completeBookList.append(book);
    updateDataToStorage();
  } else {
    const book = makeLogBook(titleBook, authorBook, yearBook, false);

    const objek_buku = composeBookObject(
      titleBook,
      authorBook,
      yearBook,
      false
    );

    book[ID_BUKU] = objek_buku.id;
    books.push(objek_buku);

    uncompleteBookList.append(book);
    updateDataToStorage();
  }
}

function createButton(buttonTypeClass, text, eventListener) {
  const button = document.createElement("button");
  button.classList.add(buttonTypeClass);
  button.innerText = text;
  button.addEventListener("click", function (event) {
    eventListener(event);
  });
  return button;
}

function addBookToCompleted(bookElement) {
  const listCompleted = document.getElementById(LIST_BOOK_COMPLETED);

  const elTitleBook = bookElement.querySelector(".book_item > h3").innerText;
  const elAuthorBook = bookElement.querySelector(".book_item > p").innerText;
  const elYearBook = bookElement.querySelector(".book_item > p").innerText;

  const buku_baru = makeLogBook(elTitleBook, elAuthorBook, elYearBook, true);

  const buku = findBook(bookElement[ID_BUKU]);
  buku.isComplete = true;

  buku_baru[ID_BUKU] = buku.id;
  listCompleted.append(buku_baru);

  bookElement.remove();
  updateDataToStorage();
  window.location.reload();
}

function undoBookToStillRead(bookElement) {
  const listUncompleted = document.getElementById(LIST_BOOK_UNCOMPLETED);

  const elTitleBook = bookElement.querySelector(".book_item > h3").innerText;
  const elAuthorBook = bookElement.querySelector(".book_item > p").innerText;
  const elYearBook = bookElement.querySelector(".book_item > p").innerText;

  const buku_baru = makeLogBook(elTitleBook, elAuthorBook, elYearBook, false);

  const buku = findBook(bookElement[ID_BUKU]);
  buku.isComplete = false;

  buku_baru[ID_BUKU] = buku.id;
  listUncompleted.append(buku_baru);

  bookElement.remove();
  updateDataToStorage();
  window.location.reload();
}

function removeBookFromCompleted(bookElement) {
  const posisi_buku = findBookIndex(bookElement[ID_BUKU]);

  books.splice(posisi_buku, 1);

  bookElement.remove();
  updateDataToStorage();
}

function createButtonContainer() {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("action");
  return buttonContainer;
}

function createCheckButton() {
  return createButton("green", "Selesai Dibaca", function (event) {
    addBookToCompleted(event.target.parentElement);
  });
}

function createTrashButton() {
  return createButton("red", "Hapus Buku", function (event) {
    removeBookFromCompleted(event.target.parentElement);
  });
}

function createUndoButton() {
  return createButton("green", "Belum selesai baca", function (event) {
    undoBookToStillRead(event.target.parentElement);
  });
}

function searchListBookTitle(event) {
  const searchBookList = event.target.value.toLowerCase();
  const itemBookList = document.querySelectorAll(".book_item");

  itemBookList.forEach((item) => {
    const isiItem = item.firstChild.innerText.toLowerCase();

    if (isiItem.indexOf(searchBookList) != -1) {
      item.setAttribute("style", "display: block;");
    } else {
      item.setAttribute("style", "display: none !important;");
    }
  });
}
