function login() {
  var uname = document.getElementById("email").value;
  var pwd = document.getElementById("pwd1").value;
  var filter =
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var filter1=
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
  if (uname == "") {
    alert("Please enter user name.");
    return false;
  } else if (pwd == "") {
    alert("Enter the password");
    return false;
  } else if (!filter.test(uname)) {
    alert("Enter valid email id.");
    return false;
  } else if (!filter1.test(pwd)) {
    alert("Password must contain at least one number, one uppercase letter, one lowercase letter, one special character, and length should be minimum 8 and maximum 16 characters");
    return false;
  } else {
    window.location = "home.html";
    return false;
  }
}

function signup() {
  alert("If you are a new member please Signup");
  window.location = "signup.html";
}