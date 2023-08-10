import "./App.css";
import { useEffect, useState } from "react";

const QuoteMachine = () => {
  const [quoteData, setQuoteData] = useState(null);

  const fetchQuote = () => {
    const apiKey = "6gZrzgwWGywdmAvAm2Nj0Q==Fy32RpDN5cdLcTqE";

    fetch(`https://api.api-ninjas.com/v1/quotes?`, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setQuoteData(result);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="card-component" id="quote-box">
      {quoteData && quoteData[0] && (
        <>
          <div className="quote-container">
            <div className="quote-container-inner">
              <h1 className="text" id="text">
                {quoteData[0].quote}
              </h1>
              <h2 className="author" id="author">
                - {quoteData[0].author}
              </h2>
            </div>
          </div>
          <div className="buttons-container">
            <div className="tweet-quote" id="tweet-quote">
              <a
                className="twitter-share-button"
                href={`https://twitter.com/intent/tweet?text=${quoteData[0].quote}+-+${quoteData[0].author}`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="icon twitter-share-button">
                  <i className="bi bi-twitter"></i>
                </button>
              </a>
            </div>
            <div id="new-quote">
              <button className="icon" onClick={fetchQuote}>
                <i className="bi bi-arrow-clockwise"></i>
              </button>
            </div>
          </div>
          <footer className="attribution">
            <a
              href="https://github.com/KangFennex/"
              target="_blank"
              rel="noreferrer"
            >
              Kangkm
            </a>
          </footer>
        </>
      )}
    </div>
  );
};

export default QuoteMachine;
