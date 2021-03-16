import { useState } from "react";

const LastAddedUrl = ({ shortUrl: key }) => {
  // todo : copy button logic
  const completeUrl = `shurl.gordonmes.dev/${key}`;
  const [copyMessage, setCopyMessage] = useState("");

  const copyToClipBoard = async (toCopy) => {
    try {
      /* 
      https://web.dev/async-clipboard/ 
      */
      await navigator.clipboard.writeText(toCopy);
      setCopyMessage("Copied !");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`${
        key === "" ? "hidden" : "block"
      } border-gray-200 rounded-lg border mt-7 sm:mt-14 flex items-center sm:justify-center lg:justify-start`}
    >
      <div className="w-full flex items-center justify-left px-3 py-3 text-gray-200 font-medium text-sm md:py-4 md:text-lg md:px-10">
        <a href={`https://${completeUrl}`} className="hover:text-orange-400">
          {completeUrl}
        </a>
      </div>
      <button
        onClick={() => copyToClipBoard(completeUrl)}
        className="mr-5 font-medium hover:text-orange-200"
      >
        Copy
      </button>
      {copyMessage}
    </div>
  );
};

export default LastAddedUrl;
