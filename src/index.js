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


});
