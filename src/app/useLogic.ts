"use client";

import { SetStateAction, useState } from "react";

import { toast } from "react-toastify";

export const useLogic = () => {
  const [inputText, setInputText] = useState("");
  const [decodedText, setDecodedText] = useState("");

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputText(event.target.value);
  };

  const decodeBase64 = () => {
    const decodedString = atob(inputText);
    setDecodedText(decodedString);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(decodedText).then(
      function () {
        toast.success("Texto copiado para a área de transferência!");
      },
      function (err) {
        toast.error("Não foi possível copiar o texto: ", err);
      }
    );
  };

  return {
    inputText,
    decodedText,
    handleInputChange,
    decodeBase64,
    copyToClipboard,
  };
};
