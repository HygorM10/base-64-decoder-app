"use client";

import "react-toastify/dist/ReactToastify.css";

import { FaCopy } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { useLogic } from "./useLogic";

export default function Home() {
  const {
    inputText,
    decodedText,
    handleInputChange,
    decodeBase64,
    copyToClipboard,
  } = useLogic();

  return (
    <>
      <ToastContainer position="top-center" />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="m-10 text-6xl font-bold">Base 64 Decode</h1>
        <div className="z-10 max-w-5xl w-full items-end font-mono text-sm lg:flex flex-col">
          <textarea
            className="w-full text-black text-left h-64 overflow-auto whitespace-pre-wrap p-3 resize-none"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Paste your text here"
          />
          <button
            onClick={decodeBase64}
            className="mt-4 p-2 bg-blue-500 text-white w-[200px] rounded-md"
          >
            Decode
          </button>
          <textarea
            className="w-full text-black text-left h-64 overflow-auto whitespace-pre-wrap p-3 mt-4 resize-none"
            value={decodedText}
            readOnly
            placeholder="Decoded text"
          />
          <button
            onClick={copyToClipboard}
            className="mt-4 p-2 rounded-md bg-blue-500 text-white w-[100px] flex justify-center items-center"
          >
            <FaCopy className="mr-2" />
            Copy
          </button>
        </div>
      </main>
    </>
  );
}
