window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above
  console.log('hello');
  var form = document.getElementById("my-form");
  var name = document.getElementById("validationCustom01");
  var email = document.getElementById("validationCustom02");
  var message = document.getElementById("validationCustom03");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");
  // Success and Error functions for after the form is submitted

  function success() {
    form.value='';
    name.value='';
    email.value='';
    message.value='';
    status.classList.add("success");
    status.innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert">Submitted Successfully<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
function validateFormInput(){
  var name = document.getElementById("validationCustom01").value;
  var email = document.getElementById("validationCustom02").value;
  var nameErrorMsg = document.getElementById("nameErrorMsg");
  var emailErrorMsg = document.getElementById("emailErrorMsg");
  var nameValid = false;
  var emailValid = false;

  
  if(/^[a-zA-Z\0 ]*$/.test(name) && name != ""){
    nameValid = true;
    document.getElementById("validationCustom01").classList.remove("is-invalid");
  }else{
    nameValid = false;
    document.getElementById("validationCustom01").classList.add("is-invalid");
  }

  if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/.test(email) && email != ""){
    emailValid = true;
    document.getElementById("validationCustom02").classList.remove("is-invalid");
  }else{
    emailValid = false;
    document.getElementById("validationCustom02").classList.add("is-invalid");
  }
  
  if(nameValid && emailValid){
    document.getElementById("submit-btn").disabled = false;
    document.getElementById("submit-btn").classList.remove("btn-outline-dark");
  }else{
    document.getElementById("submit-btn").classList.add("btn-outline-dark");
    document.getElementById("submit-btn").disabled = true;
  }
}