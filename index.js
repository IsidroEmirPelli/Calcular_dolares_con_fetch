
const btn = document.getElementById('btn');
const cant = document.getElementById("cant");
const result = document.getElementById("resultado")
function get_dolar() {
    const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
    fetch(url)
        .then(function (response) {
            return response.json();})
        .then( function (data) {
            const dolar = data[1].casa.venta
            const resultado =parseInt(dolar)*parseInt(cant.value);
            result.innerHTML = "El resultado es: $"+resultado+" ARS";
            result.classList.remove("d-none")
        })
    }