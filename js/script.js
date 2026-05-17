const form =
		document.getElementById('whatsappForm');

	  const emailInput =
		document.getElementById('email');

	  const phoneInput =
		document.getElementById('phone');

	  const emailError =
		document.getElementById('emailError');

	  const phoneError =
		document.getElementById('phoneError');

	  /* VALIDATION FUNCTIONS */

	  function validateEmail() {

		const email =
		  emailInput.value.trim();

		const emailPattern =
		  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailPattern.test(email)) {

		  emailError.style.display = 'block';
		  emailInput.classList.add('input-error');

		  return false;

		}

		emailError.style.display = 'none';
		emailInput.classList.remove('input-error');

		return true;

	  }

	  function validatePhone() {

		const phone =
		  phoneInput.value.trim();

		const phonePattern =
		  /^[6-9]\d{9}$/;

		if (!phonePattern.test(phone)) {

		  phoneError.style.display = 'block';
		  phoneInput.classList.add('input-error');

		  return false;

		}

		phoneError.style.display = 'none';
		phoneInput.classList.remove('input-error');

		return true;

	  }

	  /* LIVE VALIDATION */

	  emailInput.addEventListener('input', validateEmail);

	  phoneInput.addEventListener('input', validatePhone);

	  /* FORM SUBMIT */

	  form.addEventListener('submit', function(e) {

		e.preventDefault();

		const isEmailValid =
		  validateEmail();

		const isPhoneValid =
		  validatePhone();

		/* STOP IF INVALID */

		if (!isEmailValid || !isPhoneValid) {
		  return;
		}

		/* GET VALUES */

		const name =
		  document.getElementById('name').value.trim();

		const email =
		  emailInput.value.trim();

		const phone =
		  phoneInput.value.trim();

		const subject =
		  document.getElementById('subject').value.trim();

		const message =
		  document.getElementById('message').value.trim();

		/* WHATSAPP MESSAGE */

		const whatsappMessage =
	`New Appointment Request

	Name: ${name}
	Email: ${email}
	Phone: ${phone}
	Subject: ${subject}

	Message:
	${message}`;

		const encodedMessage =
		  encodeURIComponent(whatsappMessage);

		const whatsappURL =
		  `https://wa.me/919650993876?text=${encodedMessage}`;

		window.open(whatsappURL, '_blank');

	  });

