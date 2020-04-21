function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}

function renderBooks(json) { // to pass the lab you need this function uncommented
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

// fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(json => console.log(json));

// function fetchBooks() {
//     return fetch('https://anapioficeandfire.com/api/books')
//     // return fetch('https://anapioficeandfire.com/api/characters/1531')
//     .then(resp => resp.json())
//     .then(json => renderBooks(json));
//   }
    
  // // for the fifth book of the series
  //   function renderBooks(json) {
  //   const main = document.querySelector('main')
  //   const h2 = document.createElement('h2')
  //   h2.innerHTML = `<h2>${json[5].name}</h2>`
  //   main.appendChild(h2)
  // }

  // this gets me the URL. in order to retrieve name, I need to modify the fetch url
  // function renderBooks(json) { 
  //   arr = []
  //   const main = document.querySelector('main')
  //   const h2 = document.createElement('h2')
  //   json.map(book => {
  //     arr.push(book.characters)
  //   })
  //   const flatArr = arr.flat()
  //   let char = flatArr[1031]
  //   console.log(flatArr[1031])
  //   h2.innerHTML = `<h2>${char}</h2>`
  //   main.appendChild(h2)
  // }

 // to find total number of pages in series
//  function renderBooks(json) { 
//   arr = []
//   const main = document.querySelector('main')
//   json.map(book => {
//     arr.push(book.numberOfPages)
//   })
//   const totalNumPages = arr.reduce((a, b) => a + b, 0)
//   console.log(totalNumPages)
//     const h2 = document.createElement('h2')
//     h2.innerHTML = `<h2>${totalNumPages}</h2>`
//     main.appendChild(h2)
// }