// This is where it all goes :)
console.log('JS is working!')

// $(document).ready(function () {
//   $('.contact-button')click(function (event)) {
//     event.preventDefault()
//     console.log('Button clicked')
//   }
// })


const button = document.querySelector('.contact-button');

button.addEventListener('click', function() {
  event.preventDefault();
  console.log('Button clicked');
});

// button.addEventListener('click', event => {
  //   event.preventDefault();
  //   console.log('Button clicked');
  // });


// const button = document.getElementById('input');
//
// if(button) {
//   button.addEventListener('click', function(event) {
//     // event.preventDefault();
//     console.log('Button clicked');
//   });
// }


// const button = document.getElementById('h1');

// if(document.getElementById("status") != null){
  // console.log(button.innerHTML);
// }

// button.addEventListener('click', confirmationText);

// if(button) {
//   function confirmationText(event) {
//     event.preventDefault();
//     console.log('Button clicked');
//   }
// }
