// Iniciando o cadastro com os elementos.
const alunos = [
    {nome: "Pedro", idade: 20, curso: "Front-end", nota: 10 },
    {nome: "Kathyelly", idade: 18, curso: "Figma", nota: 6.5 },
    {nome: "Richard", idade: 19, curso: "JavaScript", nota: 9.0 }
];

// Pegando a tabela no HTML com o getElementById()
const corpoTabela = document.getElementById('lista-alunos');

// Variável para acumular o conteúdo HTML()
let acumuladorHTML = "";

// Loop para processar os alunos()
alunos.forEach(aluno => {
    const aprovado = aluno.nota >= 7;
    const statusTexto = aprovado ? "Aprovado" : "Reprovado";
    const classeCSS = aprovado ? "aprovado" : "reprovado";

    // Criando a linha com o template string()
    acumuladorHTML += `
        <tr>
            <td>${aluno.nome}</td>
            <td>${aluno.curso}</td>
            <td>${aluno.nota.toFixed(1)}</td>
            <td class="${classeCSS}">${statusTexto}</td>
        </tr>
    `;
});

//Utiliznaod o innerHTML com o acumulador.
corpoTabela.innerHTML = acumuladorHTML;

// Feito!!