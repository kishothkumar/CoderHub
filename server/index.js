import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';
import questionRoutes from './routes/questions.js';
import answerRoutes from './routes/answers.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is a CoderHub API");
});

app.use('/user', userRoutes);
app.use('/questions', questionRoutes);
app.use('/answers', answerRoutes);

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); }))
    .catch((error) => console.error(error.message));
