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
    txtEntrada.value = '';
}
//Copiar
btnCopiar.addEventListener('click', function(e){
    e.preventDefault();
    if(!txtMensagem.value == ""){
        navigator.clipboard.writeText(txtMensagem.value);
        alert("Copiado!");
        txtMensagem.value = "";
    }else{
        alert("Nenhuma mensagem encontrada");
    }
})
//#endregion

//#region Ações
//Criptografar
btnCriptografar.addEventListener('click', (e) => {
    e.preventDefault()
    validarMensagem(/[aeiou]/g, {'a':'ai','e':'enter','i':'imes','o':'ober','u':'ufat'});
})
//Descriptografar
btnDescriptografar.addEventListener('click', (e) => {
    e.preventDefault();
    validarMensagem(/ai|enter|imes|ober|ufat/g, {'ai':'a','enter':'e','imes':'i','ober':'o','ufat':'u'});
})
//#endregion


/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     


**Requisitos:**
- Deve funcionar apenas com letras minúsculas  (OK)
- Não devem ser utilizados letras com acentos nem caracteres especiais (OK)
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original. 
Por exemplo: (OK)
`"gato" => "gaitober"`
`gaitober" => "gato"`
- A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções (OK)
- O resultado deve ser exibido na tela. (OK)
**Extras:**
- Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do `ctrl+C` ou da opção "copiar" do menu dos aplicativos. (OK)
** Mensagem da Alura**
"pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!"
*/