const bookshelf = [
  {name: 'Harry Potter', author: ['J.K.Rowling'], pages: '450', year: '1999', purpose: 'to borrow', status: 'borrowed'},
  {name: 'Lord of the rings', author: ['J.R.R. Tolkien'], pages: '670', year: '1968', purpose: 'to borrow', status: 'free to borrow'},
  {name: 'Hercule Poirot', author: ['Agatha Christie'], pages: '340', year: '1970', purpose: 'to be viewed',},
  {name: 'The Witcher', author: ['Andrzej Sapkowski'], pages: '1200', year: '1978', purpose: 'to be viewed'},
]

document.addEventListener('DOMContentLoaded', () => {

  const knizka = document.querySelector('section');

  for (const item of bookshelf) {
  const book = document.createElement('div');
  book.classList = `kniha`;
  book.innerHTML = (
    `<div class="booky">
      <div class="name">${item.name}</div>
      <div class="author">${item.author}</div>
      <div class="pages">${item.pages}</div>
      <div class="year">${item.year}</div>
      <div class="purpose">${item.purpose}</div>
      <div class="status">${item.status}</div>
    </div>`    
  );
  knizka.appendChild(book);
  }

  const addBook = 

})