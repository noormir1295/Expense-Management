var localCreditSave = localStorage.getItem("creditId")

$(document).ready(() => {
  var creditInput = localCreditSave;
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  $(".category-btn").click(function () {
    localStorage.setItem("categoryId", this.id)
    window.location.replace("/category");
  })

  $("#creditOutput").text(localCreditSave)
  $("#credit-btn").click(function () {
    creditInput = document.getElementById("creditInput").value;
    localStorage.setItem("creditId", creditInput)
    $("#creditOutput").text(creditInput)
    colorCredit()
  })

  function colorCredit() {
    const creditScoreArea = document.getElementById("creditOutput")
    if (creditInput < 580) {
      creditScoreArea.setAttribute("class", "red")
    } else if (creditInput <= 669 && creditInput >= 580) {
      creditScoreArea.setAttribute("class", "orange")
    } else if (creditInput <= 739 && creditInput >= 670) {
      creditScoreArea.setAttribute("class", "yellow")
    } else if (creditInput <= 799 && creditInput >= 740) {
      creditScoreArea.setAttribute("class", "blue")
    } else {
      creditScoreArea.setAttribute("class", "green")
    }
  };
  colorCredit()


  $.get("/api/chart").then(data => {
    let rent = data.filter(rent => rent.CategoryId === 1);
    let rentAmount = 0;
    for (let i = 0; i < rent.length; i++) {
      rentAmount += parseFloat(rent[i].amount);
    }
    let bills = data.filter(bills => bills.CategoryId === 2);
    let billsAmount = 0;
    for (let i = 0; i < bills.length; i++) {
      billsAmount += parseFloat(bills[i].amount);
    }
    let vehicle = data.filter(vehicle => vehicle.CategoryId === 3);
    let vehicleAmount = 0;
    for (let i = 0; i < vehicle.length; i++) {
      vehicleAmount += parseFloat(vehicle[i].amount);
    }
    let personal = data.filter(personal => personal.CategoryId === 4);
    let personalAmount = 0;
    for (let i = 0; i < personal.length; i++) {
      personalAmount += parseFloat(personal[i].amount);
    }
    let accessories = data.filter(accessories => accessories.CategoryId === 5);
    let accessoriesAmount = 0;
    for (let i = 0; i < accessories.length; i++) {
      accessoriesAmount += parseFloat(accessories[i].amount);
    }
    let food = data.filter(food => food.CategoryId === 6);
    let foodAmount = 0;
    for (let i = 0; i < food.length; i++) {
      foodAmount += parseFloat(food[i].amount);
    }
    let travel = data.filter(travel => travel.CategoryId === 7);
    let travelAmount = 0;
    for (let i = 0; i < travel.length; i++) {
      travelAmount += parseFloat(travel[i].amount);
    }
    let other = data.filter(other => other.CategoryId === 8);
    let otherAmount = 0;
    for (let i = 0; i < other.length; i++) {
      otherAmount += parseFloat(other[i].amount);
    }


    //Load google charts
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    // Draw the chart and set the chart values
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Expenses', 'amount of'],
        ['Rent', rentAmount],
        ['Bills', billsAmount],
        ['Vehicle', vehicleAmount],
        ['Personal', personalAmount],
        ['Accessories', accessoriesAmount],
        ['Food', foodAmount],
        ['Travel', travelAmount],
        ['Other', otherAmount]
      ]);

      // Optional; add a title and set the width and height of the chart
      var options = { 'title': 'Expence Pie chart', 'width': 500, 'height': 300 };

      // Display the chart inside the <div> element with id="piechart"
      var chart = new google.visualization.PieChart(document.getElementById('piechart'));
      chart.draw(data, options);
    }
  })
});
