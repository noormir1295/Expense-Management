var localCategorySave = localStorage.getItem("categoryId")

$(document).ready(function() {
  
  const inputTitle = $('#inputTitle');
  const inputAmount = $('#inputAmount');
  const inputDate = $('#inputDate');
  const inputOptionalText = $('#inputOptionalText');
  const submitBtn = $('#submit-btn');

  $(submitBtn).on('click', function inputSubmit(event) {

    event.preventDefault();
    
    const newExpense = {
      title: inputTitle.val().trim(),
      amount: inputAmount.val().trim(),
      date: inputDate.val().trim(),
      optionalText: inputOptionalText.val().trim(),
      CategoryId: localCategorySave
    }

    $.post('/api/input', newExpense)
    .then( function() {
      window.location.href = '/category';
    });
  });
});