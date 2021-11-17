//select elements
//-----------------
//const firstLi = document.querySelector('li')
// console.log(firstLi.innerHTML)

// const allLis = document.querySelectorAll('li')
// console.log(allLis)
// allLis[0].innerHTML = "new value"

//classList example
//---------------------

// const divSquare = document.querySelector('.square')
// divSquare.classList.add("blue")
// console.log(divSquare.classList)
// divSquare.classList.replace("blue", "black")

//innerHTML
//---------------------

// const newContent = document.querySelector('.new-content')
// newContent.innerHTML = insertDOMContent("Hi there")
// console.log(newContent.innerHTML)

//insertAdjacentHTML()
//---------------------

//const newContent = document.querySelector('.new-content')
//newContent.insertAdjacentHTML('afterbegin', insertDOMContent("Hello again"))

//remove an element
//----------------------
//firstLi.remove()

function insertDOMContent(word) {
  return `
    <div>
      <p>${word}</p>
    </div>
  `
}