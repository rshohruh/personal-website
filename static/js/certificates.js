async function loadCertificates() {
		const response = await fetch('http://127.0.0.1:8000/api/certificates/');
		const certificates = await response.json();

		const clientsList = document.querySelector('.clients-list');

		certificates.forEach((certificate) => {
			const item = document.createElement('li');
			item.className = 'clients-item';
			
			item.innerHTML = `
				<a href="${certificate.link || '#'}" target="_blank">
					<img src="${certificate.image}" alt="${certificate.title}" loading="lazy">
				</a>
			`;

			clientsList.appendChild(item);
		});
  }

  loadCertificates();