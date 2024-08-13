let titulo = document.getElementById("titulo");

console.log(titulo);

function submeter() {
    let nome = document.getElementById("nome").value;
    console.log(nome)
    
    let CPF = document.getElementById("CPF").value;
    console.log(CPF);
    console.log(validaCPF(CPF));
    
}

function validaCPF(CPF) {
    if(CPF == ""){
        alert("Campo CPF nao pode ser vazio");
        return false;
    }
    
    CPF = CPF.trim();
    
    if (/[a-zA-Z]/.test(CPF)) {
       alert ("Campo CPF nao pode ter letras");
       return false;
    }

    if ( ! /^[\d.-]+$/.test(CPF)) {
       alert ("Campo CPF so pode conter ponto ,numero e hifen");
       return false;
    }

    if(CPF.lenght != 11 && CPF.lenght != 14){
        alert("Formato Invalido");
        return false;
    }
    return true; 
    
}