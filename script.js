
const apiUrl = "http://blockchain.i3lab.tech/api/run";

let tipoRequisicao = {
    method: 'GET'
}

// fetch(apiUrl, tipoRequisicao)
//     .then(function (response) {

//         response.json()
//             .then(function (objeto) {
//                 document.getElementById("status").innerHTML = objeto.status;
//                 document.getElementById("data").innerHTML = objeto.date;
//                 document.getElementById("versao").innerHTML = objeto.version;
//             })
//             .catch(function (ex) {
//                 console.error(ex)
//             })
//     })
//     .catch(function (ex) {
//         console.error(ex);
//     })


function validacaoCpf() {
    document.getElementById("success").style.display = 'none';
    document.getElementById("error").style.display = 'none';

    let cpf = document.getElementById("cpf").value;

    let result = testaCpf(cpf)

    if (result == true) {
        document.getElementById("success").style.display = 'block';
    }
    else {
        document.getElementById("error").style.display = 'block';
    }

}


function testaCpf(cpf) {

    //let digitosIguais = false;
    let digitosIguais = true;
    let numeros = "";
    let digitos = "";
    let soma = 0;
    let resultado = 0;

    if (cpf.length != 11) {
        return false;
    }

    for (i = 0; i < cpf.length - 1; i++) {
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            //digitosIguais = true;
            //return false;
            digitosIguais = false;
            break;
        }
    }

    if (digitosIguais == false) {

        //inicio validacao PRimeiro digito

        numeros = cpf.substring(0, 9);
        digitos = cpf.substring(9);

        for (x = 10; x > 1; x--) {
            soma += numeros.charAt(10 - x) * x;
        }

        //Mod = resto da divisao
        resultado = soma % 11
        if (resultado < 2)
            resultado = 0;
        else {
            resultado = 11 - resultado;
        }


        if (resultado != digitos.charAt(0)) {
            return false;
        }
        //fim da validacao do primiero diigito


        //inicio da validacao do segundo digito

        numeros = cpf.substring(0, 10);
        soma = 0;

        for (y = 11; y > 1; y--) {
            soma += numeros.charAt(11 - y) * y;
        }


        resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    }
    else {
        return false;
    }





    return true;



}
