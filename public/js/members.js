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
  })
});
