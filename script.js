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

function sugestão1() {
    document.getElementById("search").value = "Economia"
}

function sugestão2() {
    document.getElementById("search").value = "Natureza"
}

function sugestão3() {
    document.getElementById("search").value = "Tecnologia"
}

function sugestão4() {
    document.getElementById("search").value = "Futebol"
}

function sugestão5() {
    document.getElementById("search").value = "Esports"
}
