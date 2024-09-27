const books = document.getElementsByClassName('books');
const addedBooks = document.getElementById('addedBook');

function currentStock() {
    // console.log("working");
    for (let i = 0; i < books.length; i++) {
        books[i].style.display = "block";
    }
};

function add() {
    // console.log("working");
    if (addedBooks.value !== "") {
        const li = document.createElement('li');
        li.textContent = addedBooks.value;
        books[0].appendChild(li);
        addedBooks.value = "";           
    }
    else{
        alert("Please enter some name")
    }
}
