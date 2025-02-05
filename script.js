// Atualiza os dados das estatísticas
function updateStats() {
    document.getElementById("usersCount").innerText = Math.floor(Math.random() * 1000);
    document.getElementById("revenue").innerText = "R$ " + (Math.random() * 10000).toFixed(2);
    document.getElementById("sales").innerText = Math.floor(Math.random() * 500);
}

// Atualiza os valores a cada 5 segundos
setInterval(updateStats, 5000);
updateStats();

// Configuração do gráfico
const ctx = document.getElementById("salesChart").getContext("2d");
const salesChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [{
            label: "Vendas",
            data: [10, 20, 30, 40, 50, 60],
            borderColor: "#00bcd4",
            backgroundColor: "rgba(0, 188, 212, 0.2)",
            fill: true
        }]
    }
});
