$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  module.exports = function(getCat) {
  $(".category-btn").click(function() {
    var catId = this.id
    return catId
  })
  return getCat
  }

  $(".category-btn").click(function() {
    
  });
});
