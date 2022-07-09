
document.querySelector("#form").addEventListener("submit", studentData)

var sdb = JSON.parse(localStorage.getItem("studentDataBase"))

function studentData(event){
    event.preventDefault()
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var  gender= document.getElementById("gender").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value

    var sdbObj={
        name:name,
        age:age,
        gender:gender,
        email:email,
        phone: phone,
    }
    if(sdb===null){
        sdb = []
    }
    sdb.push(sdbObj)
    localStorage.setItem("studentDataBase",JSON.stringify(sdb));
    document.getElementById("form").reset()
    
}
