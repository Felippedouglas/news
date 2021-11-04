function ativarDarkTheme() {
    document.body.style.backgroundColor = "#000"
    document.getElementById("dark-theme").style.display = "none"
    document.getElementById("dark-theme-off").style.display = "block"
}

function desativarDarkTheme() {
    document.body.style.backgroundColor = "#fff"
    document.getElementById("dark-theme").style.display = "block"
    document.getElementById("dark-theme-off").style.display = "none"
}

function abrirPesquisar() {
    document.getElementById("exibir-search").style.display = "block"
}

function fecharPesquisar() {
    document.getElementById("exibir-search").style.display = "none"
}

function insert(sugestao) {
    document.getElementById("search").value = sugestao
}