function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById('agradecimento').innerHTML="<b>Obrigado por clicar</b>"; // adiciona o paragrafo quando clicado o botão. <b> = Negrito.
}

function redirecionar(){
    window.open("https://www.linkedin.com/feed/");
}


/*function validarIdade(idade)
{ var validar;
if (idade>=18)
{validar = true}
else
{validar= false}
return validar
}
var idade= prompt("Qual a sua idade?")
console.log(validarIdade(idade));*/


/*function soma(n1, n2)
{return n1 + n2;}

console.log(soma(5 , 10))
alert(soma(5 , 10));*/


/*var d = new Date(); //visualizar data
alert(d);
alert(d.getDay());
alert(d.getHours());*/


/*var count;
for(count = 0; count <= 5; count++){
    console.log(count)
};*/


/*var count= 0;
while (count < 5)// contar enquanto for menor que 5(0,1,2,3,4)
{ console.log(count);
count++;}*/


/*var idade = prompt("Qual sua idade?")// o browser exibe uma pergunta para o usuario e o que ele responder será gravado na variavel idade
if(idade >= 18)
{ alert("maior de idade"); }
else
{ alert("menor de idade");}*/


/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas.nome);
alert(frutas[1].cor);*/


/*var list= ["maçã", "pêra", "laranja"];
list.push("uva")// insere itens a lista.
list.pop();// retira o ultimo elemento da lista
console.log(list);
console.log(list.toString()); //transforma em strings
console.log(list.join(" - ")); //separa usando (-, /,| entre outros)*/


//var name="Willian Elidio";
//var idade= 28;
//alert(name + " tem " +idade + " anos");
//var frase="Japão é o melhor time do mundo";
//console.log(name);
//console.log(idade);
//console.log(frase);
//console.log(frase.replace("Japão", "Brasil"))//trocar algo na frase, nesse caso Japão por Brasil.