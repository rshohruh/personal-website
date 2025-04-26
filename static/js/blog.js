async function loadBlogPosts() {
    const response = await fetch('http://127.0.0.1:8000/api/blogs/');
    const data = await response.json();
  
    const blogList = document.querySelector('.blog-posts-list');
  
    data.forEach(blog => {
      const listItem = document.createElement('li');
      listItem.className = 'blog-post-item';
      
      const date = new Date(blog.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
      
      listItem.innerHTML = `
        <a href="${blog.link || '#'}" target="_blank">
          <figure class="blog-banner-box">
            <img src="${blog.image}" alt="${blog.alt}" loading="lazy">
          </figure>
          <div class="blog-content">
            <div class="blog-meta">
              <p class="blog-category">${blog.category}</p>
              <span class="dot"></span>
              <time datetime="${blog.date}">${date}</time>
            </div>
            <h3 class="h3 blog-item-title">${blog.title}</h3>
            <p class="blog-text">${blog.text}</p>
          </div>
        </a>
      `;
  
      blogList.appendChild(listItem);
    });
}

// Initialize blog posts
document.addEventListener('DOMContentLoaded', loadBlogPosts);