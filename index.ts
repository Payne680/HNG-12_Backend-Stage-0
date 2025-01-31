import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({
    email: "pennjunior680@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Payne680/HNG-12_Backend-Stage-0"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
