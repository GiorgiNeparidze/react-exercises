import React from "react";
import { LanguageContext } from "./LanguageContext";
import { useContext } from "react";

const Languages = {
  en: {
    hello: "Hi!",
  },
  ru: {
    hello: "Здарова!",
  },
  it: {
    hello: "Ciao!",
  },
};

export function DisplayLanguage() {
  const language = useContext(LanguageContext);

  return (
    <div>
      <h1>{language}</h1>
    </div>
  );
}
