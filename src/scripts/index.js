const sections = document.querySelectorAll('#sections');
const emailMessage = document.querySelector('.email');
const sendEmailBtn = document.querySelector('.subscribe__section--btn');

// INTERSECTION OBSERVER
const callback = (entries, observe) => {
 entries.forEach((entry) => {
  if (!entry.isIntersecting) return;

  if (entry.isIntersecting) {
   entry.target.classList.add('active--section');
  }
 });
};

const observer = new IntersectionObserver(callback, {
 threshold: 0.1,
});

sections.forEach((element) => {
 element.classList.remove('hidden');
 observer.observe(element);
});

// SEND EMAIL WITH EMAILJS
const sendEmail = async (email) => {
 emailjs.init('p6MO_AjS7UugpgZIW');

 const templateParams = {
  to_name: 'Musa Abdulkabir',
  from_name: email,
  message: `I want to subscribe for your soleandsales newsletter. This is my email address ${email}`,
 };

 emailjs.send('service_d68r5rr', 'template_rdm9ilf', templateParams).then(
  () => {
   alert('Email sent');
  },
  () => {
   alert('Network error, Please try again later.');
  }
 );
};
// EVENT
sendEmailBtn.addEventListener('click', () => {
 const email = emailMessage.value;

 sendEmail(email);
});
