import express from "express";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
dotenv.config();



process.env.SERVER_NAME = "Papagei 5000";
process.env.SERVER_CPU = "Archimedes MMX";
process.env.SERVER_URL = "http://localhost:5000/";
process.env.SERVER_LOG = "LOG.txt";
console.log("Present process.env:", process.env);

/* console.log('SERVER_NAME:', process.env.SERVER_NAME);
console.log('SERVER_CPU:', process.env.SERVER_CPU);
console.log('SERVER_URL:', process.env.SERVER_URL);
console.log('SERVER_LOG:', process.env.SERVER_LOG);
 */
const serverMessage = [
  `Hello! I am ${process.env.SERVER_NAME}!`,
  `I have a ${process.env.SERVER_CPU},`,
  `and my URL is ${process.env.SERVER_URL}.`,
  `I keep a log of all activities in ${process.env.SERVER_LOG}.`,
].join(" ");

console.log(serverMessage);
