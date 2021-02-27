import { url } from "inspector";
import { useState } from "react";
import Layout from "../components/layout";

export default function Home() {
  const [urlToShort, setUrlToShort] = useState<String>("");

  const onSubmit = (event) => {
  };

  return (
    <Layout>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-26">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 lg:px-8 ">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-200 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">url-shortener</span>
                </h1>
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
                    </form>
                  </div>
                </div>
                <div className="mt-3 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-gray-200 bg-headerColor hover:text-gray-800 hover:bg-orange-400 md:py-4 md:text-lg md:px-10">
                    Make short URL
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
}
