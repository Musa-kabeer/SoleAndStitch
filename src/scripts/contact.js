'use strict';
const form = document.querySelector('.contact__right--form');
const fullname = document.querySelector('.fullname');
const email = document.querySelector('.email');
const subject = document.querySelector('.subject');
const message = document.querySelector('.message');

form.addEventListener('submit', async (e) => {
 e.preventDefault();
 const fullnameError = document.querySelector('.form-error-fullname');
 const emailError = document.querySelector('.form-error-email');
 const subjectError = document.querySelector('.form-error-subject');
 const messageError = document.querySelector('.form-error-message');

 if (!fullname.value) {
  fullnameError.classList.remove('hidden');
  fullnameError.textContent = 'Full Name is required!';
 }

 if (!email.value) {
  emailError.classList.remove('hidden');
  emailError.textContent = 'Email is required!';
 }

 if (!subject.value) {
  subjectError.classList.remove('hidden');
  subjectError.textContent = 'Subject is required!';
 }

 if (!message.value) {
  messageError.classList.remove('hidden');
  messageError.textContent = 'Message is required!';
 }

 if (!fullname.value || !email.value || !subject.value || !message.value)
  return;

 //  FORM DATA
 const data = {
  service_id: 'service_d68r5rr',
  template_id: 'template_nf0c75q',
  user_id: 'p6MO_AjS7UugpgZIW',
  template_params: {
   fullname: fullname.value,
   email: email.value,
   subject: subject.value,
   message: message.value,
  },
 };

 try {
  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
   method: 'POST',
   body: JSON.stringify(data),
   headers: {
    'Content-Type': 'application/json',
   },
  });

  if (res.status === 200) {
   return alert('Your mail is sent!');
  }

  (fullname.value = ''),
   (email.value = ''),
   (subject.value = ''),
   (message.value = '');
 } catch (err) {
  console.log(err);
 }
});
