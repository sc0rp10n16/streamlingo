"use client"

import { useEffect, useRef, useState } from "react";
import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { IconLanguageHiragana } from "@tabler/icons-react";
import { Button } from "./ui/button";


export default function SpeechTranslation() {
  const speechKey = "406a02682daf4042a3cbb70214456c50";
  const speechRegion = "eastus";
  const targetLanguage = "te"
  // State variables to store the recognized and translated text
  const [recognizedText, setRecognizedText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const startTranslation = () => {
    // Set up the Azure Speech Translation Config
    const speechTranslationConfig = SpeechSDK.SpeechTranslationConfig.fromSubscription(
      speechKey,
      speechRegion
    );
    speechTranslationConfig.speechRecognitionLanguage = "en-US";
    speechTranslationConfig.addTargetLanguage(targetLanguage);

    // Use microphone input for real-time translation
    const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
    const translationRecognizer = new SpeechSDK.TranslationRecognizer(
      speechTranslationConfig,
      audioConfig
    );

    // Start recognition
    translationRecognizer.recognizeOnceAsync((result) => {
      switch (result.reason) {
        case SpeechSDK.ResultReason.TranslatedSpeech:
          setRecognizedText(result.text);
          setTranslatedText(result.translations.get(targetLanguage));
          speechSynthesis(result.translations.get(targetLanguage)); // Speak the translated text
          break;
        case SpeechSDK.ResultReason.NoMatch:
          console.log("Speech could not be recognized.");
          break;
        case SpeechSDK.ResultReason.Canceled:
          const cancellation = SpeechSDK.CancellationDetails.fromResult(result);
          console.log(`CANCELED: ${cancellation.reason}`);
          if (cancellation.reason === SpeechSDK.CancellationReason.Error) {
            console.log(`Error: ${cancellation.errorDetails}`);
          }
          break;
        default:
          break;
      }
      translationRecognizer.close();
    });
  };

  // Function for speech synthesis (text-to-speech)
  const speechSynthesis = (text: string) => {
    const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(
      speechKey,
      speechRegion
    );
    const audioConfig = SpeechSDK.AudioConfig.fromDefaultSpeakerOutput();
    speechConfig.speechSynthesisVoiceName = "en-US-AvaMultilingualNeural";

    const synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig, audioConfig);
    synthesizer.speakTextAsync(
      text,
      (result) => {
        if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {
          console.log("Synthesis finished.");
        } else {
          console.error("Speech synthesis canceled: " + result.errorDetails);
        }
        synthesizer.close();
      },
      (err) => {
        console.trace("Error: " + err);
        synthesizer.close();
      }
    );
  };

  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Dialog>
        <DialogTrigger className='cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]'>
            <IconLanguageHiragana size={20} className="text-white" />
          </DialogTrigger>
          <DialogContent className="bg-black text-white">
            <DialogHeader>
              <DialogTitle>Translation</DialogTitle>
              <DialogDescription>
                <Button onClick={startTranslation}>Start Translation</Button>
              <div className="results">
                <h2>Recognized Speech:</h2>
                <p>{recognizedText || "Waiting for input..."}</p>
                <h2>Translated Text:</h2>
                <p>{translatedText || "Waiting for translation..."}</p>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        
    </div>
  );
}
