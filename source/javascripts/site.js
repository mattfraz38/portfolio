// This is where it all goes :)
console.log('JS is working!')

$(document).ready(function() {
  $('.contact-button').click(function(event) {
    console.log('Button clicked')

    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusElem = $('.status')
    statusElem.empty()

// ADD SUCCESS MESSAGE IF SENT

  // let contactStatus = []
  // function checkContactStatus(contactStatus) {
  //   if(contactStatus != null && !contactStatus.includes(false)) {
  //     return true
  //   };
  // };

  // if(email != (/\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i)) {
    if(email.length > 5 && email.includes('@') && email.includes('.')) {
      // statusElem.append('<div class="success-msg">Thank you for your message! I\'ll be in concact soon!</div>')
    } else {
      event.preventDefault()
      statusElem.append('<div class="error-msg">Invalid email</div>')
    };

    if(subject.length < 1) {
      event.preventDefault()
      statusElem.append('<div class="error-msg">Subject cannot be empty</div>')
    // } else {
    //   statusElem.append('<div class="success-msg">Thank you for your message! I\'ll be in concact soon!</div>')
    };

    if(message.length < 50) {
      event.preventDefault()
      statusElem.append('<div class="error-msg">Message is too short')
    // } else {
    //   statusElem.append('<div class="success-msg">Thank you for your message! I\'ll be in concact soon!</div>')
    };

    // if(contactStatus.every(checkContactStatus)) {
    //   statusElem.append('<div class="success-msg">Thank you for your message! I\'ll be in concact soon!</div>')
    // };


    // setTimeout(function() {
    //   $('.error-msg').remove();
    // }, 20000);
  });
});



// var validEmail = $(function() {
//   if(email.includes('@') && email.includes('.')) {
//   } else {
//     statusElem.append('<div class="error-msg">Invalid email</div>')
//   };
// });
//
// var validSubject = $(function() {
//   if(subject.length < 1) {
//     statusElem.append('<div class="error-msg">Subject cannot be empty</div>')
//   };
// });
//
// var validMessage = $(function() {
//   if(message.length < 50) {
//     statusElem.append('<div class="error-msg">Message is too short')
//   };
// });
//
// if(validEmail == false && validSubject == false && validMessage == false) {
//   statusElem.append('<div class="success-msg">Thank you for your message! I\'ll be in concact soon!')
// };
