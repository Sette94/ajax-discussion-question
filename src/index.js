
const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  // Question 1
  //Given the following code, list the order of console.logs:


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
  function fetchData() {
    let data = fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(res => res)

    console.log(data)
  }

  fetchData()
  // answer -- the promise is logged
  // What will be console logged when the following code is run? Why?
  function fetchData() {
    let data = fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(json => console.log(json))
  }

  fetchData()

  // What will be console logged when the following code is run? Why?
  function fetchData() {
    let data = fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(console.log)
  }

  fetchData()
  // NOTHING


  //Question 3


  //Question 4


  const url = "https://randomuser.me/api/"

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
    })

  //Question 5

  // Adding a new person

  const buttonContain = document.getElementById("nickButton")
  const fullnameContain = document.getElementById("fullname")
  const emailContain = document.getElementById("email")
  const streetContain = document.getElementById("street")
  const cityContain = document.getElementById("city")
  const stateContain = document.getElementById("state")
  const postcodeContain = document.getElementById("postcode")
  const cellContain = document.getElementById("cell")
  const dobContain = document.getElementById("date_of_birth")
  const phoneContain = document.getElementById("phone")


  buttonContain.addEventListener('click', (e) => { //Needs to be click because it is a button and not a form!!!
    e.preventDefault()

    fullnameContain.textContent = "Nick"
    emailContain.textContent = "njs"
    streetContain.textContent = "bay"
    cityContain.textContent = "nyc"
    stateContain.textContent = "nys"
    postcodeContain.textContent = "11"
    cellContain.textContent = "555-555-555"
    dobContain.textContent = "1927"
    phoneContain.textContent = "digits"


  })



});
