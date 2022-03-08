function abrirPesquisar() {
    document.getElementById("exibir-search").style.display = "block"
}

function fecharPesquisar() {
    document.getElementById("exibir-search").style.display = "none"
}

function insert(sugestao) {
    document.getElementById("search").value = sugestao
}

var theme = localStorage.getItem("theme")
function darkTheme() {
    theme = '#000'
    document.getElementById("dark-theme").style.display = "none"
    document.getElementById("dark-theme-off").style.display = "block"
    atualizarLocalStorage()
    verificarTema()
}
function lightTheme() {
    theme = '#fff'
    document.getElementById("dark-theme").style.display = "block"
    document.getElementById("dark-theme-off").style.display = "none"
    atualizarLocalStorage()
    verificarTema()
}
function atualizarLocalStorage() {
    localStorage.setItem("theme", theme)
    document.body.style.backgroundColor = theme
}

setTimeout( function() {

    function verificarTema() {
        if (theme == '#000') {
            document.body.style.backgroundColor = "#000"
            document.getElementById("dark-theme").style.display = "none"
            document.getElementById("dark-theme-off").style.display = "block"
        } else {
            localStorage.setItem("theme", "#fff")
            document.getElementById("dark-theme").style.display = "block"
            document.getElementById("dark-theme-off").style.display = "none"
        }
    }
    verificarTema()
},1)