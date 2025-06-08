<h1 align="center">🔗 URL Shortener Service</h1>

![Demo App](/public/screenshot-for-readme.png)

Highlights:

- ⚡ Instantly shorten long URLs with optional custom aliases  
- 🌐 MongoDB-based storage and Express-powered REST API  
- 🔐 JWT-ready structure for future secured user access  
- 📁 Clean, modular codebase with MVC architecture  
- 🚀 Tech Stack: Node.js + Express + MongoDB + Mongoose + dotenv  
- 🛠️ Local development focused, easily extendable for deployment  
- ⏳ Easily upgradable with click tracking and analytics support

---

## 🧪 `.env` Setup

```
PORT=3000
MONGODB_URI=mongodb://127.0.0.1
MONGODB_DATABASE_NAME=urlShortener
```

---

## 🔧 Run the Backend

```bash
npm install
npm run dev
```

> Make sure MongoDB is running locally before starting the server.

---

## 📬 API Usage

### ➕ Shorten a URL

**POST** `/api/url/shorten`

```json
{
  "longUrl": "https://example.com",
  "customCode": "myalias" // optional
}
```

### 🔁 Redirect

Visit `http://localhost:3000/myalias`  
→ Redirects to the original URL

---

## 🧱 Folder Structure

```
Url-Shortener/
├── models/
│   └── Url.js
├── routes/
│   └── url.js
├── .env
├── app.js
├── package.json
└── README.md
```

---

## 📌 Future Plans

- 🔢 Add click analytics & expiry timestamps  
- 👤 Add user login and dashboard  
- ☁️ Deploy with MongoDB Atlas + Render/Netlify

---

## 👨‍💻 Author

Built with 💡 by [Anurag Patel](https://github.com/AnuragPatel1)
