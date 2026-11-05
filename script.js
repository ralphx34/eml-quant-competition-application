// Netlify processes submissions after deployment. Local previews do not submit data.
const form = document.getElementById('application-form');
const error = document.getElementById('form-error');
const submitButton = document.getElementById('submit-button');

form.addEventListener('submit', (event) => {
  error.hidden = true;
  const host = window.location.hostname;
  if (host === 'localhost' || host === '127.0.0.1' || window.location.protocol === 'file:') {
    event.preventDefault();
    error.textContent = 'Local preview only: the form is ready to test, but submissions are processed after deployment to Netlify.';
    error.hidden = false;
    error.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  submitButton.disabled = true;
  submitButton.textContent = 'Submitting…';
});
