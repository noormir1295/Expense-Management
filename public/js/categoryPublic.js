var localCategorySave = localStorage.getItem("categoryId")
//get data for category id
$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/category/"+localCategorySave).then(data => {
    $("#categoryTitle").text(data.title);

  });

  $(".add-btn").click(function() {
    window.location.replace("/input");
  })
});

