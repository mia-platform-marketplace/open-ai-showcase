import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";


// send request to api/generate.js function
export default function Home() {
  const [messageInput, setMessageInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    if (messageInput.length === 0) {
      setResult("Please write some request :-)");
    } else {
      setResult("Request sent, wait some seconds...");
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: messageInput }),
      });
      const data = await response.json();
      setResult(data.result);
    }
  }

  // a simple web page to input data and show results
  return (
    <div>
      <Head>
        <title>OpenAI Example Request</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <img src="/logo.png" className={styles.icon} />
        <p>Mia-Platform Playground Example to test OpenAI. Try some request like
          <pre>Generate a JSON schema for Books, its Authors and Libraries that sell them</pre>
          <pre>Generate a Kubernetes CronJob file for a Docker Image named DailyCleaner that run every day al 12am</pre>
          <pre>Generate a Rego Policy that allow request to user with admin property equal to true</pre>
        </p>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="message"
            placeholder="Enter a request to OpenAI"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <input type="submit" value="Send request" />
        </form>
        <pre><code className="language-javascript">{result}</code></pre>
      </main>

    </div>
  );
}
