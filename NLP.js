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

app.post("/chat", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required!" });
  }

  // Tokenize and classify the input message with probabilities
  const classifications = classifier.getClassifications(message.toLowerCase());
  console.log(classifications, "classifications");

  // Log only the most probable classification (the top one)
  const bestMatch = classifications[0]; // Get the most probable classification
  console.log(`User: ${message}`);
  console.log("Best Classification:", bestMatch); // Log only the best match

  // Respond with the best classification
  const response = bestMatch
    ? bestMatch.label
    : "Sorry, I don't understand that.";

  res.json({ response });
});

app.listen(port, () => {
  console.log(`NLP Chatbot running at http://localhost:${port}`);
});
