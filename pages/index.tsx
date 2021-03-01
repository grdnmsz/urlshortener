import Layout from "../components/layout";
import UrlForm from "../components/urlForm";

import { sendUrl } from "../controllers/urlSendUrl";

export default function Home() {
  const onSend = (url: string) => {
    return sendUrl(url);
  };

  return (
    <Layout>
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-200 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">url-shortener</span>
      </h1>
      <UrlForm onSend={onSend} />
    </Layout>
  );
}
