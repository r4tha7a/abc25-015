const paymentRadios = document.querySelectorAll('input[name="payment"]');
const medicalAidSection = document.getElementById('medicalAidSection');
paymentRadios.forEach(radio => {
 radio.addEventListener('change', () => {
   if (radio.value === 'medical' && radio.checked) {
     medicalAidSection.style.display = 'block';
   } else {
     medicalAidSection.style.display = 'none';
   }
 });
});
