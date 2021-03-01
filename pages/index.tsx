import { useState } from "react";

import Layout from "../components/Layout.component";
import UrlForm from "../components/UrlForm.component";
import LastAddedUrl from "../components/LastAddedUrl.component";

import { sendUrl } from "../controllers/urlSendUrl";

export default function Home() {
  const [shortUrlProp, setShortUrlProp] = useState<string>("");

  const onSend = (url: string, event) => {
    sendUrl(url)
      .then((resp) => {
        setShortUrlProp(resp.data.shortUrl);
        event.target.reset(); // clean the form
      })
      .catch((error) => {
        /*
          todo
         */
      });
  };

  return (
    <Layout>
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-200 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">url-shortener</span>
      </h1>
      <UrlForm onSend={onSend} />
      <LastAddedUrl shortUrl={shortUrlProp} />
    </Layout>
  );
}
