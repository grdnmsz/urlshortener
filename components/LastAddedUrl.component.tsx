const LastAddedUrl = ({ shortUrl }) => {
  // todo : copy button logic
  return (
    <div className={`${shortUrl === "" ? "hidden" : "block"} border-gray-200 rounded-lg border mt-7 sm:mt-14 flex items-center sm:justify-center lg:justify-start`}>
      <div className="w-full flex items-center justify-left px-3 py-3 text-orange-100 font-medium text-sm md:py-4 md:text-lg md:px-10">
        {`shurl.gordonmes.dev/${shortUrl}`}
      </div>
      <div className="mr-5 font-medium hover:text-orange-200">Copy</div>
    </div>
  );
};

export default LastAddedUrl;
