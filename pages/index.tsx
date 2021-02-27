import { url } from "inspector";
import { useState } from "react";

import Layout from "../components/layout";
import UrlForm from "../components/urlForm";

export default function Home() {
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
                <UrlForm />
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
}
