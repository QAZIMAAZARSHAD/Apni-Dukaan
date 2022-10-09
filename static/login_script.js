// Show Password
$(".show-pass").on("click", function () {
  var type = $(this).prev("input").attr("type");
  if (type == "password") {
    $(this).prev("input").attr("type", "text");
    $(this).find("i").removeClass("fi-rr-eye").addClass("fi-rr-eye-crossed");
  } else {
    $(this).prev("input").attr("type", "password");
    $(this).find("i").removeClass("fi-rr-eye-crossed").addClass("fi-rr-eye");
  }
});
