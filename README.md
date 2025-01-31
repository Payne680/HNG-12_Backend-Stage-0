# HNG_BACKEND-STAGE-ZERO - PUBLIC API 
 https://hng.tech/hire/nodejs-developers


## Project Description
*This is a simple public api for HNg12 Bcakend Stage 0 task. It returns the information below in JSON FORMAT.*

#### This API returns:
- My HNG12 registered email address.
- The current date and time in ISO 8601 format.
- The Github repository URL.

### Tech Stack
- Node.js with Express.js and TypeScript
- Deployed on: [] 

### API RESULTS
 curl 

{
    "email":"",
    "current_datetime":"","
    github_url":""
}


## To test
- Ensure you have: 
Node.js,
TypeScript
Git

1. Clone the repo. 
git clone https://github.com/yourusername/your-repo.git
cd your-repo

2. Install Dependencies.
npm install

3. Start the server, to run the api locally.
npm start

or if using nodemon
nodemon index.js

4. Test the API
Once the server is running, open your browser or use Postman/cURL to send a GET request to:
http://localhost:3000

5. Expected Response
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}



### END POINT
**GET** ``

### Response Format (`200 OK`)
```json
{
    "",
"",
""
} 
