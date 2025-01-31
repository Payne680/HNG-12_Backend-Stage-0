# HNG12 Stage 0 Backend API

## Description
This is a simple public API for the HNG12 Stage 0 Backend task. The API provides basic information, including:
- The registered email address used on the HNG12 Slack workspace.
- The current datetime in ISO 8601 format (UTC).
- The GitHub repository URL for this project.

## Technologies Used
- TypeScript
- Express
- CORS

## Setup Instructions
### Prerequisites
Ensure you have Node.js installed (version 14 or later). If not, download and install it from [nodejs.org](https://nodejs.org/).

### Steps to Run Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/Payne680/HNG-12_Backend-Stage-0.git
   ```
2. Navigate into the project directory:
   ```bash
   cd HNG-12_Backend-Stage-0
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. The API will be accessible at:
   ```
   http://127.0.0.1:3000/
   ```

## API Documentation
### Endpoint
**GET /**

### Response Format (200 OK)
```json
{
  "email": "pennjunior680@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Payne680/HNG-12_Backend-Stage-0"
}
```

### Example Usage
#### Using cURL
```bash
curl -X GET http://127.0.0.1:3000/
```

#### Using Node.js
```javascript
const fetch = require('node-fetch');

fetch('http://127.0.0.1:3000/')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Deployment
The API is hosted at: [https://hng-12-backend-stage-0.vercel.app/]([https://hng-12-2.onrender.com](https://hng-12-backend-stage-0.vercel.app/))

## Acceptance Criteria
### Functionality
- The API must accept GET requests and return the required JSON response.
- The `current_datetime` field must be dynamically generated in ISO 8601 format (UTC).
- The API must provide an appropriate HTTP status code.

### Code Quality
- Organized code structure.

### Documentation
- The `README.md` includes:
  - A clear project description.
  - Setup instructions for running the project locally.
  - API documentation with endpoint details, request/response format, and example usage.

## Additional Resources
For more information about Node.js development, visit:
[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

## License
This project is licensed under the MIT License.

---
