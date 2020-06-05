const AssistantV1 = require("ibm-watson/assistant/v1");
const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1");
const SpeechToTextV1 = require("ibm-watson/speech-to-text/v1");
const LanguageTranslatorV3 = require("ibm-watson/language-translator/v3");
//const NaturalLanguageUnderstandingV1 = require("ibm-watson/natural-language-understanding/v1");
const { IamAuthenticator } = require("ibm-watson/auth");

// config ibm watson assistant
const assistant = new AssistantV1({
  url: "https://gateway.watsonplatform.net/assistant/api",
  version: "2020-01-04",
  authenticator: new IamAuthenticator({
    apikey: "P3LteZq2sXyK2UGI_-LchmFA_GI2NFuLjx90fVBOV0jb",
  }),
});

// config ibm watson Text to Speech
const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: "A-RstRgCpCoS8m5guQ97sFEswTKoPFkUJLQTbfYQRccx",
  }),
  url: "https://stream.watsonplatform.net/text-to-speech/api/",
});

// config ibm watson Speech to Text
const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey: "SRNUhgmRKwRZt4c1xZRlgOZSTQtWmGcbFnyaTd_fs1kK",
  }),
  url: "https://stream.watsonplatform.net/speech-to-text/api/",
});

const languageTranslator = new LanguageTranslatorV3({
  version: "2018-05-01",
  authenticator: new IamAuthenticator({
    apikey: "UFxxpBJTkL4We3Fle6WNagL1NhV-9aQdnY5rrRpiFfnB",
  }),
  url:
    "https://api.us-south.language-translator.watson.cloud.ibm.com/instances/beec1b1b-b2f2-4674-8d61-dfb221bb7417",
});

module.exports = { assistant, textToSpeech, speechToText, languageTranslator };
