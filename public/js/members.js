var localCreditSave = localStorage.getItem("creditId")

$(document).ready(() => {
  var creditInput = localCreditSave;
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  $(".category-btn").click(function() {
    localStorage.setItem("categoryId", this.id)
    window.location.replace("/category");
  })
  
  $("#creditOutput").text(localCreditSave)
  $("#credit-btn").click(function() {
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
    } else {
      creditScoreArea.setAttribute("class", "green")
    }
  };
  colorCredit()
  // 
  // Load google charts
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  
  // Draw the chart and set the chart values
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['Expenses', 'amount of'],
    ['Rent', 1],
    ['Bills', 1],
    ['Vehicle', 1],
    ['Personal', 1],
    ['Accessories', 1],
    ['Food', 1],
    ['Travel', 1],
    ['Other', 1]
  ]);
  
    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Expence Pie chart', 'width':500, 'height':300};
  
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }
});
