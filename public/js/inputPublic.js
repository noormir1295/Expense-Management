var localCategorySave = localStorage.getItem("categoryId")

$(document).ready(function() {
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
  
  const inputTitle = $('#inputTitle');
  const inputAmount = $('#inputAmount');
  const inputDate = $('#inputDate');
  const inputOptionalText = $('#inputOptionalText');
  const submitBtn = $('#submit-btn');

  $(submitBtn).on('click', function inputSubmit(event) {
    event.preventDefault();
    console.log(inputDate.val().trim(),)
    let year = inputDate.val().trim().slice(0, 4);
    let month = inputDate.val().trim().slice(5, 7);
    let day = inputDate.val().trim().slice(8,10);
    dateTotal = month+"/"+day+"/"+year
    console.log(dateTotal)

    const newExpense = {
      title: inputTitle.val().trim(),
      amount: inputAmount.val().trim(),
      date: dateTotal,
      optionalText: inputOptionalText.val().trim(),
      CategoryId: localCategorySave
    }

    $.post('/api/input', newExpense)
    .then( function() {
      window.location.href = '/category';
    });
  });
});