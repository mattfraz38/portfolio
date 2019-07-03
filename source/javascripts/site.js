// This is where it all goes :)
console.log('JS is working!')

$(document).ready(function() {
  $('.contact-button').click(function(event) {
    event.preventDefault()
    console.log('Button clicked')

    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusElem = $('.status')
    statusElem.empty()

    if(email.includes('@') && email.includes('.')) {
      statusElem.append('<div>Email valid</div>')
    } else {
      statusElem.append('<div>Invalid email</div>')
    };

    if(subject.null) {
      statusElem.append('<div>Subject is valid</div>')
    } else {
      statusElem.append('<div>Subject cannot be empty</div>')
    };

    if(message.length > 50) {
      statusElem.append('<div>Message is valid')
    } else {
      statusElem.append('<div>Message is too short')
    }
  })
})


// const button = document.querySelector('.contact-button');
//
// button.addEventListener('click', function(event) {
//   event.preventDefault();
//   console.log('Button clicked');

  // const email = ('.email').value;
  // const subject = ('.subject').value;
  // const message = ('.message').value;
  // const statusElem = function {
  //   ('.status');
  // };
  // statusElem.remove();

//   if(email.includes('@') && email.includes('.')) {
//     statusElem.append('<div>Email valid</div>')
//   } else {
//     statusElem.append('<div>Invalid email</div>')
//   };
//
//   if(subject.null) {
//     statusElem.append('<div>Subject is valid</div>')
//   } else {
//     statusElem.append('<div>Subject cannot be empty</div>')
//   };
//
//   if(message.length < 50) {
//     statusElem.append('<div>Message is valid')
//   } else {
//     statusElem.append('<div>Message is too short')
//   };
// });
