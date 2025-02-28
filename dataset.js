module.exports = [
  // Greetings
  { phrase: "hello", response: "Hi there! How can I help you?" },
  { phrase: "hi", response: "Hello! How can I assist you?" },
  { phrase: "hey", response: "Hey there! How can I help?" },
  {
    phrase: "good morning",
    response: "Good morning! How can I help you today?",
  },
  { phrase: "good evening", response: "Good evening! How can I help?" },
  { phrase: "what’s up?", response: "Not much! How can I assist you?" },

  // Asking for help
  { phrase: "help", response: "Sure, how can I assist you today?" },
  { phrase: "I need help", response: "What do you need help with?" },
  { phrase: "can you help me", response: "Of course, how can I assist?" },

  // Adding more complex scenarios
  { phrase: "how are you", response: "I'm just a bot, but I'm doing well!" },
  {
    phrase: "tell me a joke",
    response: "Why don’t skeletons fight each other? They don’t have the guts!",
  },
  {
    phrase: "more jokes",
    response: "Why don’t eggs tell jokes? Because they might crack up!",
  },
  {
    phrase: "another",
    response: "What do you call fake spaghetti? An impasta!",
  },

  // Unknown questions
  {
    phrase: "what is the weather",
    response: "Sorry, I cannot give weather updates right now.",
  },
  {
    phrase: "who are you",
    response:
      "I am a chatbot powered by NLP. I can assist you with basic queries.",
  },
];
