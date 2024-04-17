window.onload = function() {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
            datasets: [
                {
                    label: "Income",
                    data: [],
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                },
                {
                    label: "Expenses",
                    data: [],
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
    document.getElementById("chart-tab").addEventListener("click", function () {
        var incomeJanuary = document.getElementById("incomeJanuary").value;
        var expensesJanuary = document.getElementById("expensesJanuary").value;
        var incomeFebruary = document.getElementById("incomeFebruary").value;
        var expensesFebruary = document.getElementById("expensesFebruary").value;
        var incomeMarch = document.getElementById("incomeMarch").value;
        var expensesMarch = document.getElementById("expensesMarch").value;
        var incomeApril = document.getElementById("incomeApril").value;
        var expensesApril = document.getElementById("expensesApril").value;
        var incomeMay = document.getElementById("incomeMay").value;
        var expensesMay = document.getElementById("expensesMay").value;
        var incomeJune = document.getElementById("incomeJune").value;
        var expensesJune = document.getElementById("expensesJune").value;
        var incomeJuly = document.getElementById("incomeJuly").value;
        var expensesJuly = document.getElementById("expensesJuly").value;
        var incomeAugust = document.getElementById("incomeAugust").value;
        var expensesAugust = document.getElementById("expensesAugust").value;
        var incomeSeptember = document.getElementById("incomeSeptember").value;
        var expensesSeptember = document.getElementById("expensesSeptember").value;
        var incomeOctober = document.getElementById("incomeOctober").value;
        var expensesOctober = document.getElementById("expensesOctober").value;
        var incomeNovember = document.getElementById("incomeNovember").value;
        var expensesNovember = document.getElementById("expensesNovember").value;
        var incomeDecember = document.getElementById("incomeDecember").value;
        var expensesDecember = document.getElementById("expensesDecember").value;

        myChart.data.datasets[0].data = [
            incomeJanuary,
            incomeFebruary,
            incomeMarch,
            incomeApril,
            incomeMay,
            incomeJune,
            incomeJuly,
            incomeAugust,
            incomeSeptember,
            incomeOctober,
            incomeNovember,
            incomeDecember,
        ].map(Number);
        myChart.data.datasets[1].data = [
            expensesJanuary,
            expensesFebruary,
            expensesMarch,
            expensesApril,
            expensesMay,
            expensesJune,
            expensesJuly,
            expensesAugust,
            expensesSeptember,
            expensesOctober,
            expensesNovember,
            expensesDecember,
        ].map(Number);

        myChart.update();
    });
    document.getElementById('download').addEventListener('click', function() {
    var canvas = document.getElementById('myChart');
    var image = canvas.toDataURL('image/png');

    var link = document.createElement('a');
    link.href = image;
    link.download = 'chart.png';
    link.click();
});
}
