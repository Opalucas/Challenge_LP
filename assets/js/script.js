//#region obter Inputs e botões do HTML
var btnCriptografar = document.querySelector("#btn-cripto");
var btnDescriptografar = document.querySelector("#btn-descripto");
var btnCopiar = document.querySelector("#btn-copy");

var txtMensagem = document.querySelector("#msg");
var txtEntrada = document.querySelector("#input-texto");
txtEntrada.focus();
var errorMessage = document.querySelector("#error-message");
//#endregion

//#region Funções
//Validar letras minusculas e acentos
function validarMensagem(expressao, traducao){
    if(!/^[a-z0-9 ]*$/.test(txtEntrada.value)) {
        alert('O texto não deve conter: acentuação, caracteres especiais ou letras maiúsculas!');
        txtEntrada.value = '';
    return 
    }

    txtMensagem.value = txtEntrada.value.replace(expressao, chave => traducao[chave]);
    if(txtMensagem.value == txtEntrada.value){
        alert("A mensagem não pode ser descriptografada, insira outra mensagem!");
        txtMensagem.value = "";
    }
    txtEntrada.value = '';
}
//Validar input vazio para criptografar
function validarCriptografia(){
    if(!txtEntrada.value == ""){
        validarMensagem(/[aeiou]/g, {'a':'ai','e':'enter','i':'imes','o':'ober','u':'ufat'});
    }else{
        alert("Favor, inserir texto no campo abaixo!");
        txtEntrada.focus();
    }
}
//Validar input vazio para descriptografar
function validarDescriptografar(){
    if(!txtEntrada.value == ""){
        validarMensagem(/ai|enter|imes|ober|ufat/g, {'ai':'a','enter':'e','imes':'i','ober':'o','ufat':'u'});
    }else{
        alert("Favor, inserir texto no campo abaixo!");
        txtEntrada.focus();
    }
}
//Copiar
function copiar(){
    if(!txtMensagem.value == ""){
        navigator.clipboard.writeText(txtMensagem.value);
        alert("Copiado!");
        txtMensagem.value = "";
    }else{
        alert("Antes de copiar deve ser criptografado algo!");
    }
}

//#endregion

//#region Ações
//Criptografar
btnCriptografar.addEventListener('click', (e) => {
    e.preventDefault();
    validarCriptografia();
})
//Descriptografar
btnDescriptografar.addEventListener('click', (e) => {
    e.preventDefault();
    validarDescriptografar();
})
//Copiar
btnCopiar.addEventListener('click', function(e){
    e.preventDefault();
    copiar();
})
//#endregion