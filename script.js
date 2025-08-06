function inserirNome(){
let nomeUsuario = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuario");
   console.log(elemento);
   elemento.textContent = nomeUsuario;
}

const lista = document.quenySelector('#lista');

lista.textCtent = linguagens[0];
lista.textCnt = linguagens[1];
lista.textCntent = linguagens[2];

let aluno1 = {
   nome: 'Maria Eduarda',
   idade:18,
   anoLetivo:'Ensino Médio',
   materiasFavoritas:['Edução Fisíca','Programação','' Português']
}
console.log(aluno1.nome);
console.log(aluno1.idade);
console.log(aluno1.materiasFavoritas);
console.log(aluno1.materiasFavoritas[1]);

const objeto = document.querySelector('#aluno');
objeto.textcontent = aluno1.nome;
objeto.textcontent = aluno1.idade;
objeto.textcontent = aluno1.materiasFavoritas[1];