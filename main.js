const button = document.querySelector("button")
const h1 = document.querySelector("h1")
const h2 = document.querySelector("h2")
const p = document.querySelector("p")
button.addEventListener('click' , getqoute)

async function getqoute() {
    const response = await fetch('https://quotable.io/random')
    const data =await response.json()
    console.log(data)
   const qoute = data.content
   const author = data.author
   const dateAdded= data.dateAdded
   h1.innerText = qoute
   p.innerText = "-" + " " + author
   h2.innerText =  dateAdded
} 
// setInterval(() => {
//     getqoute()
// }, 10000);