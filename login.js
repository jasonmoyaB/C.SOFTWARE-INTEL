function login(){
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;

    if (user=="Admin" || user=="admin" && pass=="123") {
        window.location="crud.html";
    }else{
        alert("Datos incorrectos");
    }
}