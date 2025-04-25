# 🛡️ Project Name:Basa Finder – Secure Notes API

A secure, scalable, and modern RESTful API built with **Node.js**, **Express**, **Mongoose**, and **TypeScript**. This API allows users to create, read, update, and delete encrypted notes, ensuring full control and privacy over their data.

---

## 🚀 Live API

🌐 (https://basa-finder-server.vercel.app/)

## Admin credential

- email: admin@gmail.com
- Password: Mizan@123

## LandLord credential

- Email: landlord@gmail.com
- Password: Mizan@123

## Tenant credential

- email: tenant@gmail.com
- Password: Mizan@123

---

## 📹 Video Explanation

🎥 [Watch the demo](https://your-video-link.com)

---

## 📂 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Environment Variables](#-environment-variables)
- [Folder Structure](#-folder-structure)
- [API Endpoints](#-api-endpoints)
- [License](#-license)

---

## ✨ Features

- ✅ User authentication with JWT
- 🔐 End-to-End encryption for notes
- 🧠 CRUD operations for notes
- 🧾 Well-structured REST API
- 💬 Detailed error handling
- 🛠️ Modular and scalable codebase with TypeScript
- 🌍 MongoDB for data storage with Mongoose ODM

---

## 🧰 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Language:** TypeScript
- **Authentication:** JWT (JSON Web Tokens)
- **Environment Management:** dotenv
- **Encryption:** crypto / bcrypt / AES (based on your implementation)
- **Other Tools:** Nodemon, ts-node, Prettier, ESLint

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/mizan-rh/basa-finder-server.git
cd secure-notes-api

# Install dependencies
npm install

# Build TypeScript
npm run build

# Start the server
npm run start


```

## 🔐 Features

- ✅ Role-based Authentication (Admin / Landlord / Tenant)

- 🔑 JWT Authentication & Authorization

- 🏡 Property Management – Add, Edit, Delete Listings

- 📥 Rental Requests – Request, Approve, Reject

- 💳 Payments – Integrated with Stripe and ShurjoPay

- ✉️ Email Notifications – Send rental updates

- 📃 Invoice Generation – On successful rentals

```

```

## Environment Variables

Create a .env file in the root and add the following:

- PORT=5000
- DATABASE_URL=your_mongodb_uri
- JWT_SECRET=your_jwt_secret
- JWT_EXPIRES_IN=1d

- STRIPE_SECRET_KEY=your_stripe_key
- SHURJOPAY_KEY=your_shurjopay_key
- SHURJOPAY_SECRET=your_shurjopay_secret

- EMAIL_USER=your_email_address
- EMAIL_PASS=your_email_password

## Run the Server

### Development:

- npm run dev

### Production:

- npm run build
- npm start

```

```

## ✍️ Code Commenting Style

Each module is well-documented with clear comments for better developer experience:
/\*\*

- @desc Create a new rental request
- @route POST /api/rental
- @access Tenant
  \*/
  const createRentalRequest = asyncHandler(async (req: Request, res: Response) => {
  // logic here
  });

## 🧪 Backend Modules (Sample)

- auth – JWT generation, login/register

- user – Role management

- property – CRUD for property listings

- rental – Rental requests/approvals

- payment – Stripe & ShurjoPay integrations

- notification – Email alerts

- invoice – Auto-generation after payments

```
```
# 📁 Folder Structure

src/
├── controllers/     # Route handlers
├── middleware/      # Custom middleware (e.g., auth)
├── models/          # Mongoose models
├── routes/          # Express routes
├── services/        # Business logic
├── utils/           # Utility functions
├── types/           # TypeScript type declarations
├── config/          # DB connection and config
└── index.ts         # Entry point

```
```

# 📡 API Endpoints

- Base URL: https://basa-finder-server.vercel.app

  Method Endpoint Description

  POST /auth/register Register a new user
  POST /auth/login Login and receive a token
  GET /notes Get all notes (auth req.)
  POST /notes Create a new note
  PUT /notes/:id Update a note
  DELETE /notes/:id Delete a note

# 📝 Usage

Once the server is running, use an API client like Postman or Insomnia to test the endpoints. Make sure to include the Authorization: Bearer <token> header for protected routes.

# 🧪 Scripts

npm run dev # Run with nodemon
npm run build # Build TypeScript
npm run start # Run built app
npm run lint # Run ESLint
npm run format # Format with Prettier

# 📌 Contribution Guidelines

1. Fork the repository:

2. Create a feature branch:

- git checkout -b feature/your-feature-name

3. Commit your changes:

- git commit -m "Add: Your feature name"

4. Push to GitHub:
   git push origin feature/your-feature-name

5. Create a Pull Request

# 🙋‍♂️ Author

- Name: mst. Rebeka Sultana
- Email: rebakpi@gmail.com

- Name: md. Mizanur Rahman
- Email: mizan@gmail.com

- Name: md. Ahsanur Rahman Tonmoy
- Email: ahosant82@gmail.com

```

```
