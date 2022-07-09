var addmited=JSON.parse(localStorage.getItem("admitted"))

addmited.map(function(elem){
    var tr = document.createElement("tr")
    
    var name = document.createElement("td")
    name.innerText = elem.name
    var age = document.createElement("td")
    age.innerText = elem.age
    var gender = document.createElement("td")
    gender.innerText = elem.gender
    var email = document.createElement("td")
    email.innerText = elem.email
    var phone  = document.createElement("td")
    phone.innerText = elem.phone

    tr.append(name, age, gender, email, phone)
    document.querySelector("#body").append(tr)
})
