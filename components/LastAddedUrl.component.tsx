const LastAddedUrl = ({ shortUrl }) => {
  // todo : copy button logic
  const completeUrl = `shurl.gordonmes.dev/${shortUrl}`;
  return (
    <div
      className={`${
        shortUrl === "" ? "hidden" : "block"
      } border-gray-200 rounded-lg border mt-7 sm:mt-14 flex items-center sm:justify-center lg:justify-start`}
    >
      <div className="w-full flex hover:text-orange-400 items-center justify-left px-3 py-3 text-gray-200 font-medium text-sm md:py-4 md:text-lg md:px-10">
        <a href={`https://${completeUrl}`}>{completeUrl}</a>
      </div>
      <div className="mr-5 font-medium hover:text-orange-200">Copy</div>
    </div>
  );
};

export default LastAddedUrl;
