
var call = JSON.parse(localStorage.getItem("studentDataBase"))

var x=0

call.map(function(elem){
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
    var tdaccept= document.createElement("td")
    var accept = document.createElement("button")
    accept.innerText = "Accept"
    accept.setAttribute("onclick",`accept(${x})`)
    var tdreject= document.createElement("td")
    var reject = document.createElement("button")
    reject.setAttribute("onclick",`reject(${x})`)
    x++;
    reject.innerText = "Reject"

    tdaccept.append(accept)
    tdreject.append(reject)

    tr.append(name, age, gender, email, phone, tdaccept, tdreject)
    document.querySelector("#body").append(tr)
})

var addmited=JSON.parse(localStorage.getItem("admitted"))
var rejected=JSON.parse(localStorage.getItem("rejected"))

function accept(e){
    if(addmited===null){
        addmited=[]

    }
    addmited.push(call[e])
    localStorage.setItem("admitted",JSON.stringify(addmited))
}
function reject(e){
    if(rejected===null){
        rejected=[]

    }
    rejected.push(call[e])
    localStorage.setItem("rejected",JSON.stringify(rejected))
}

