async function loadProjects() {
  const response = await fetch('http://127.0.0.1:8000/api/projects/');
  const projects = await response.json();

  const projectList = document.querySelector('.project-list');

  projects.forEach((project) => {
    const item = document.createElement('li');
    item.className = 'project-item active';
    item.setAttribute('data-filter', '');
    item.setAttribute('data-category', project.category.toLowerCase());
    
    item.innerHTML = `
      <a href="${project.link || '#'}" target="_blank">
        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
          <img src="${project.image}" alt="${project.alt}" loading="lazy">
        </figure>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-category">${project.category}</p>
      </a>
    `;

    projectList.appendChild(item);
  });
}

loadProjects();