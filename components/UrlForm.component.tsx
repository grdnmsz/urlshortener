import { useState } from "react";

const UrlForm = ({ onSend }) => {
  const [urlToShort, setUrlToShort] = useState<string>("");
  const [errMessage, setErrMessage] = useState<string>("");

  const testHttpPrefix =
    urlToShort.indexOf("https://") === -1 &&
    urlToShort.indexOf("http://") === -1;

  const onSubmit = (event) => {
    event.preventDefault(); // prevent from reload

    if (urlToShort.length < 1) {
      setErrMessage("(!) Please enter a valid URL");
    } else if (testHttpPrefix) {
      setErrMessage("(!) Please prefix your URL with 'http://' or 'https://'");
    } else {
      onSend(urlToShort, event);
      setErrMessage("");
    }
    setUrlToShort("");
  };

  return (
    <>
      <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Enter a long url to make a SHORTER one
      </p>
      <div>
        <div className="mt-1 relative rounded-md shadow-sm">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="url"
              className="mt-3 sm:mt-8 bg-inputColor md:py-4 block w-full pl-7 py-3 pr-7 rounded-md"
              onChange={(event) => setUrlToShort(event.target.value)}
            />
            <button
              type="submit"
              className="mt-3 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-gray-200 bg-headerColor hover:text-gray-800 hover:bg-orange-400 md:py-4 md:text-lg md:px-10">
                Make short URL
              </div>
            </button>
          </form>
          <div
            className={`${
              errMessage !== "" ? "block" : "hidden"
            } text-red-400 pt-2`}
          >
            <i className="fas fa-exclamation-circle"></i>
            {errMessage}
          </div>
        </div>
      </div>
    </>
  );
};

export default UrlForm;
