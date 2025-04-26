# Shohruh Personal Portfolio

A personal portfolio website built with Django and Django REST Framework that showcases projects, certificates, blog posts, and includes a contact form with Telegram integration.

## Features

- **Responsive Design:** Modern, mobile-first layout built with HTML, CSS, and JavaScript.
- **Dynamic Content Loading:** Projects, certificates, blog posts, and testimonials are dynamically loaded via REST API endpoints.
- **API Endpoints:**  
  - Projects: `/api/projects/`  
  - Certificates: `/api/certificates/`  
  - Blogs: `/api/blogs/`
- **Contact Form:** Sends contact messages directly to Telegram using a bot integration.

## Technology Stack

- **Backend:** Django 5.2, Django REST Framework
- **Frontend:** HTML5, CSS3, JavaScript
- **APIs:** Telegram Bot API for contact messaging

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/rshohruh/personal-website.git
   cd personal-website
   ```

2. **Create a Virtual Environment:**

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install Dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure Environment Variables:**

   Create a `.env` file in the root directory:
   ```
   SECRET_KEY=your-secret-key
   TELEGRAM_BOT_TOKEN=your-telegram-bot-token
   TELEGRAM_CHAT_ID=your-telegram-chat-id
   ```

5. **Apply Migrations:**

   ```bash
   python manage.py migrate
   ```

6. **Collect Static Files (if needed):**

   ```bash
   python manage.py collectstatic
   ```

## Running the Project

Start the development server with:
   
```bash
python manage.py runserver
```

## Contributions

Contributions and improvements are welcome! If you encounter any issues or have suggestions, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
