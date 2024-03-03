import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Explore() {
  const { modelName } = useParams();
  const [model, setModel] = useState(null);

  useEffect(() => {
    const fetchModelDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/modelDetails/${modelName}`
        );
        const data = await response.json();
        setModel(data);
      } catch (error) {
        console.error("Error fetching model details:", error);
      }
    };

    fetchModelDetails();
  }, [modelName]);

  return (
    <>
      <div style={{ backgroundColor: "#c5c5e5", marginBottom: "75px" }}>
        <Navbar />
      </div>
      {/* //   #90A8C3 */}
      <div
        style={{
          // backgroundColor: " #c5c5e5",
          height: "100vh",
          margin: 0,
          padding: 0,
          paddingTop: "10px",
          overflow: "hidden",
        }}
      >
        <div
          className="container"
          style={{
            backgroundColor: "#c2e1c2",
            fontFamily: "monospace",
            fontSize: "14px",
            borderRadius: "10px",
            paddingTop: "5px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: "800px",
              marginTop: "2px",
              paddingLeft: "-10px",
              backgroundColor: "#BAC7BE",
            }}
          >
            Description:
          </div>
          <div className="description">
            BERT (Bidirectional Encoder Representations from Transformers) is a
            state-of-the-art natural language processing (NLP) model developed
            by Google. It utilizes transformer architecture to understand the
            context of words in a sentence. Unlike previous models that process
            text sequentially, BERT employs bidirectional training, allowing it
            to capture the full context of a word by considering both left and
            right context simultaneously.
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "800px",
              backgroundColor: "#BAC7BE",
            }}
          >
            Documentation:
          </div>
          <div className="documentation">
            BERT's official documentation can be found on the BERT GitHub
            repository.
            {/* <Link to="/https://github.com/google-research/bert">hii</Link> */}
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "800px",
              backgroundColor: "#BAC7BE",
            }}
          >
            Potential Use Cases:
          </div>
          <div>
            <strong>Text classification:</strong> Sentiment analysis, spam
            detection.
            <br />
            <strong>Question answering:</strong> Natural language understanding,
            chatbots.
            <br />
            <strong>Named entity recognition:</strong> Identifying entities like
            people, organizations, and locations in text.
          </div>
          <div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "800px",
                backgroundColor: "#BAC7BE",
              }}
            >
              # Example code for using BERT for text classification
            </div>
            from transformers import BertTokenizer,
            BertForSequenceClassification
            <br />
            import torch
            <br />
            tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
            <br />
            model =
            BertForSequenceClassification.from_pretrained('bert-base-uncased')
            <br />
            inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
            <br />
            outputs = model(inputs)
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
