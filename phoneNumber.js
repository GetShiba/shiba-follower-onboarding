$("#checkout-button").click((e) => {
  let phoneNumber = $("#phone-number-input").val();
  if (phoneNumber.length < 1 && $(".error-container > span").length < 1) {
    $(".error-container").append(`<span>Please provide valid phone number</span>`)
  } else {
    $(".error-container").empty();
  }
})