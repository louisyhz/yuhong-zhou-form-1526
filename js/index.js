
let fn = document.getElementById('fullname');
let em = document.getElementById('email');
let msg = document.getElementById('message');
let fm = document.getElementById('contact');
let regEm = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


function formValidator(ev) {

    ev.preventDefault();

    let errors = [];
    let data = {};

    if (fn.value !== '') {
        data.fullName = fn.value;
    } else {
        errors.push('Full name is missing!');
    }


    if (em.value !== '') {
    if (regEm.test(em.value)) {
        data.em = em.value;  
        console.log("This is a valid email address.");
      }else {
          console.log("This is an invalid email address.");
          
      }
    }else {
        errors.push('Email is missing!');
    }
 
  
    if (msg.value !== '') {
        data.message = msg.value;
    } else {
        errors.push('Message is missing!');
    }
    

    if (errors.length !== 0 ) {
        console.log('Errors');
        console.log(errors);
    }
    else {
        console.log('Collected Data');
        console.log(data);
        document.getElementById('contact').reset();
    }
}

fm.addEventListener('submit', formValidator);




