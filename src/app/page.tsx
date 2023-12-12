"use client";

import "react-toastify/dist/ReactToastify.css";

import { FaCopy, FaRegTrashAlt } from "react-icons/fa";

import { LuClipboardCopy } from "react-icons/lu";
import { ToastContainer } from "react-toastify";
import { useLogic } from "./useLogic";

export default function Home() {
  const {
    inputText,
    decodedText,
    handleInputChange,
    decodeBase64,
    copyToClipboard,
    copyMessageToClipboard,
    clearTextArea,
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
          <div className="flex flex-row">
            <button
              onClick={decodeBase64}
              className="mt-4 mr-2.5 p-2 bg-blue-500 text-white w-[200px] rounded-md"
            >
              Decode
            </button>
            <button
              onClick={clearTextArea}
              className="mt-4 p-2 rounded-md bg-red-500 text-white w-[60px] flex justify-center items-center"
            >
              <FaRegTrashAlt />
            </button>
          </div>
          <textarea
            className="w-full text-black text-left h-64 overflow-auto whitespace-pre-wrap p-3 mt-4 resize-none"
            value={decodedText}
            readOnly
            placeholder="Decoded text"
          />
          <div className="flex flex-row">
            <button
              onClick={copyToClipboard}
              className="mt-4 mr-2.5 p-2 rounded-md bg-blue-500 text-white w-[100px] flex justify-center items-center"
            >
              <FaCopy className="mr-2" />
              Copy
            </button>
            <button
              onClick={copyMessageToClipboard}
              className="mt-4 p-2 rounded-md bg-blue-500 text-white w-[150px] flex justify-center items-center"
            >
              <LuClipboardCopy className="mr-2" />
              Copy message
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
