var localCategorySave = localStorage.getItem("categoryId")
var dynamicTitle = $("#dynamicTitlesHere")
var categoryTitle = $("#categoryTitle")
//get data for category id
$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/category/"+localCategorySave).then(data => {
    categoryTitle.text(data.title);

  });

  $(".add-btn").click(function() {
    window.location.replace("/input");
  })
  
  $.get("/api/input").then(dbInput => {
    for (let i = 0; i < dbInput.length; i++) {
      const title = dbInput[i].title;
  
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.textContent = title;

      dynamicTitle.append(li);
      li.append(a)

      a.setAttribute("id", dbInput[i].id)
      a.setAttribute("href", ("/outputLog/"+dbInput[i].id))
    }
  });
});

