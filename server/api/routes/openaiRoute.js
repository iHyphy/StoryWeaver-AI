const express = require("express");
const router = express.Router();
require("dotenv").config(); // Import dotenv to access environment variables

router.get("/", (req, res) => {
  console.log(`are we in this route: ${process.env.OPENAI_API_KEY}`);
  const openaiApiKey = process.env.OPENAI_API_KEY;
  if (!openaiApiKey) {
    return res
      .status(500)
      .json({ error: "OpenAI API key not found in environment variables" });
  }
  console.log(`are we in this route: ${openaiApiKey}`);
  res.json(openaiApiKey);
});

module.exports = router;
