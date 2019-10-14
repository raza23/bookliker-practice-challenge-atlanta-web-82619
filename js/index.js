document.addEventListener("DOMContentLoaded", function() {});
// document.addEventListener("DOMContentLoaded", function() {});
// document.addEventListener("DOMContentLoaded", function() {});

//const
const showPanel = document.querySelector("#show-panel")
const allBooks = "http://localhost:3000/books/"
const mainUrl = "http://localhost:3000/"
const booklist = document.querySelector("#list")
//pillar 1, fetch
fetchBooks()

function fetchBooks() {
    fetch(allBooks)
    .then(resp => resp.json())
    .then(putBooks)}

function clearNode(node){
   while(node.firstChild) {
         node.removeChild(node.firstChild)
    }
    }

function putBooks(books){
    books.forEach(book => {
        const bookLi = document.createElement('li')
        bookLi.textContent = book.title
        booklist.appendChild(bookLi)
        bookLi.dataset.id = book.id
        // bookLi.addEventListener('click',function(){console.log('hey')})
        bookLi.addEventListener('click',displayBook)
    })}

function displayBook(e){
    // console.log(e.target)
    clearNode(showPanel)
    let book = e.target.textContent
    const title = document.createElement('h1')
    title.textContent = book 
    showPanel.appendChild(title)
    // const book_id = e.target.dataset.id)
    fetch(allBooks +`${e.target.dataset.id}`)
    .then(resp => resp.json())
    .then(book => {
        const cover = document.createElement('img')
        const button = document.createElement('button')
        console.log(button)
        const myUser = {id:1,name:"Porous"}
        button.innerText = 'Read Book'
        // button.addEventListener('click', function(e){
        //     fetch(allbooks + `${e.target.dataset.id}`,
        //     method: "PATCH")
            
        // })


        cover.src = book.img_url
        console.log(cover)
        const summary = document.createElement('p')
        summary.textContent = book.description
        
        
        
        showPanel.appendChild(summary)
        showPanel.appendChild(cover)
        showPanel.appendChild(button)
        
    }
    
    
    
    
    )
     

    
    

    
    
}
    // .then(data => console.log("hi",data))





