/*
	Script desativado: esta página é apenas informativa sobre o funcionamento
	do Feed-Educ. Implementações de envio e roteamento devem ser feitas em
	um backend seguro pela instituição. Mantemos este arquivo apenas como
	referência para futuras integrações.
*/

// Animações ao scroll
const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('animate');
		} else {
			entry.target.classList.remove('animate');
		}
	});
}, {
	threshold: 0.1
});

document.querySelectorAll('.card').forEach(card => {
	observer.observe(card);
});


