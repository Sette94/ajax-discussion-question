const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  console.log("Hello")

  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
      console.log("Hi")
    })

  console.log("Sup?")

  //ORDER WOULD BE
  //  Hello, Sup, Hi because fetch is async and will take longer when the api


//Question 2
// When fetchData is executed what will be console logged?
function fetchData(){
  let data = fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( res => res)

  console.log(data)
}

fetchData()
// answer -- the promise is logged
// What will be console logged when the following code is run? Why?
function fetchData(){
  let data = fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( json => console.log(json) )
}

fetchData()

// What will be console logged when the following code is run? Why?
function fetchData(){
  let data = fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( console.log )
}

fetchData()
// NOTHING

});
