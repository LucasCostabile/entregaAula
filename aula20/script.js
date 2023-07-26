// Elementos

const calculadora = document.getElementById("calculadora");

// Ações

const somar = document.getElementById("somar");

const sub = document.getElementById("sub");

const mult = document.getElementById("mult");

const dividir = document.getElementById("dividir");

const inp1 = document.getElementById("valor1");

const inp2 = document.getElementById("valor2");

somar.addEventListener("click", () => {

	const divResultado = document.getElementById("resultado");

	const valor1 = inp1.value

 const valor2 = inp2.value

 const resultado = parseInt(valor1) + parseInt(valor2)

 divResultado.innerHTML = resultado

})

sub.addEventListener("click", () => {

	const divResultado = document.getElementById("resultado");

	const valor1 = inp1.value

 const valor2 = inp2.value

 const resultado = parseInt(valor1) - parseInt(valor2)

 divResultado.innerHTML = resultado

})

mult.addEventListener("click", () => {

	const divResultado = document.getElementById("resultado");

	const valor1 = inp1.value

 const valor2 = inp2.value

 const resultado = parseInt(valor1) * parseInt(valor2)

 divResultado.innerHTML = resultado

})

dividir.addEventListener("click", () => {

	const divResultado = document.getElementById("resultado");

	const valor1 = inp1.value

 const valor2 = inp2.value

 const resultado = parseInt(valor1) / parseInt(valor2)

 divResultado.innerHTML = "<h2>" + resultado + "</h2>"

})