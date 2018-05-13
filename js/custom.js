// Acessing Second Heading
// $(function($){
//   $('.heading:nth-child(1)').css("padding-top","15px");
// });
//
//
// let signUp = function(){
//   let emails = [];
//
//   let passwords = [];
//
//   let emailValue = getElementById('email').value;
//   let passwordValue = getElementById('password').value;
//
//     emails = emails.push(email);
//
//     passwords = passwords.push(passwordValue);
//
//   console.log(emails);
//
//   console.log(passwords);
//
// }

// if(window.innerWidth <= 540){
//   $('#shiftDown').css('padding-top', '50px');
// }


  var emails = [];

  var passwords = [];

$('#signUp').on('click', function(){
  let emailValue = $('#email').val();
  let passwordValue = $('#password').val();
  if((emailValue.length > 0) && (passwordValue.length > 0)){
    emails.push(emailValue);
    passwords.push(passwordValue);
  }else{
    alert('Insert SignUp Details');
  }

  console.log(emails);
  console.log(passwords);
});



// var x = document.getElementById('loginMail').value;



// Script for Login Area
$('#login').on('click', function(){

  let emailValue = $('#loginMail').val();
  let passwordValue = $('#loginPassword').val()
      if((emailValue.length > 0) ||(passwordValue.length > 0)){
        if((emailValue === emails[0]) && (passwordValue === passwords[0])){
          alert('Login Successfully.');
          window.location = "wireframe/wireframe.html"
      }else {
        alert("Check Email or Password");
      }
    }else{
      alert("Enter Login Details")
    }


});
