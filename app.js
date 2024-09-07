function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Imprime no console a seção encontrada para fins de depuração (pode ser removido em produção)
   
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campoPesquisa for uma string vazia
    if (!campoPesquisa) {
        section.innerHTML = "<p>DIGITE O NOME DE UM CANAL PARA PESQUISAR!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
 
    console.log(campoPesquisa);
   
    let resultados = "";
    let titulo = "";
    let descricao = ""

    // Itera sobre cada dado na array 'dados' (assumindo que 'dados' é uma array de objetos)
    for (let dado of dados) {
        titulo = dado.descricao.toLocaleLowerCase()
        descricao = dado.descricao.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href=${dado.inicial} target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nenhum Resultado foi Encontrado</p>"
    }

   
    section.innerHTML = resultados;
}


