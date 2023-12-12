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
    const text = window.atob(inputText);
    const decoder = new TextDecoder("utf-8");
    const decodedString = decoder.decode(
      new Uint8Array(text.split("").map((c) => c.charCodeAt(0)))
    );
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

  const copyMessageToClipboard = () => {
    const message = _extractTextAfterBrace(decodedText);
    if (message === "") {
      toast.error("Não foi possível copiar o texto: Mensagem não encontrada");
      return;
    }
    navigator.clipboard.writeText(message).then(
      function () {
        toast.success("Mensagem copiada para a área de transferência!");
      },
      function (err) {
        toast.error("Não foi possível copiar o texto: ", err);
      }
    );
  };

  const _extractTextAfterBrace = (input: string) => {
    const bracePosition = input.indexOf("{");
    if (bracePosition !== -1) {
      return input.substring(bracePosition);
    }
    return "";
  };

  return {
    inputText,
    decodedText,
    handleInputChange,
    decodeBase64,
    copyToClipboard,
    copyMessageToClipboard,
  };
};
