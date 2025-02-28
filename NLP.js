const express = require("express");
const natural = require("natural");
const dataset = require("./dataset.js"); // Import the dataset
const app = express();
const port = 3000;

app.use(express.json());

// Create an NLP classifier (Naive Bayes)
const classifier = new natural.BayesClassifier();

// Add documents from the external dataset to the classifier
dataset.forEach((data) => {
  classifier.addDocument(data.phrase, data.response);
});

// Train the classifier
classifier.train();



app.listen(port, () => {
  console.log(`NLP Chatbot running at http://localhost:${port}`);
});
