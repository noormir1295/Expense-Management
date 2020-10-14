// var title = $("#title")
// var amount = $("#amount")
// var date = $("#date")
// var optionalText = $("#optionalText")

$(document).ready(() => {
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  $.get("/api/outputLog/"+window.location.pathname.split("/").pop()).then(dbInput => {
      const title = dbInput.title;
      const amount = dbInput.amount;
      const date = dbInput.date;
      const optionalText = dbInput.optionalText;
  
      $("#title").html(title)
      $("#amount").html(amount);
      $("#date").html(date);
      $("#optionalText").html(optionalText);

  });
});