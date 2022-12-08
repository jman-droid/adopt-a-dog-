const checkoutWrapper = document.querySelector('.checkout-wrapper');


const h1 = document.createElement('h1');
h1.textContent = 'Reach out if you have any questions!';
checkoutWrapper.appendChild(h1);

const fields =  [
  {
    name: 'full-name',
    label: 'Full Name'

  },
  {
    name: 'email',
    label: 'Email Address'
  },
  {
    name: 'phone',
    label: 'Phone'
  },

];

const form = document.createElement('form');
form.id = "contact-us";

checkoutWrapper.appendChild(form);

for (let i= 0; i < fields.length; i+= 1){
    const field = fields[i];

    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', field.name);

    const input = document.createElement('input');
    input.setAttribute('name', field.name);
    input.setAttribute('type', 'text');


    form.appendChild(label);
    form.appendChild(input);

}


const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

form.appendChild(submitButton);

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//
//   for (let i= 0; i < fields.length; i+= 1){
//     const field = fields[i];
//     const element = document.getElementById(field.name);
//     console.log(`${field.label}: ${element.value}`);
//   }
//
//   alert('Thank you. The form information has been received.');
//
// });


$( "#contact-us" ).on("submit", function(event){
  event.preventDefault();
  var arr = $(this).serializeArray();
  console.log(arr);
  })
