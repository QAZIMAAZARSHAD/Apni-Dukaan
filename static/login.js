function login() {
  var uname = document.getElementById("email").value;
  var pwd = document.getElementById("pwd1").value;
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (uname == "") {
    alert("please enter user name.");
  } else if (pwd == "") {
    alert("enter the password");
  } else if (!filter.test(uname)) {
    alert("Enter valid email id.");
  } else if (pwd.length < 6) {
    alert("Password min  length is 6.");
  } else {
    window.location = "home.html";
    return false;
  }
}

function signup() {
  alert("If you are a new member please Signup");
  window.location = "signup.html";
}
