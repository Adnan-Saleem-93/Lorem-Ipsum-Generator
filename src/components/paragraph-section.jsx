import React from "react";
import "../css/paragraph-section.css";
import {lorem_ipsum} from "../utils/constants";

const ParagraphSection = ({paraLength}) => {
  const renderParagraphs = () => {
    let paras = [];
    let arr = lorem_ipsum.split(" ");
    let len = arr.length;

    // first, iterate for the amount of paraLength value
    for (let count = 0; count < paraLength; count++) {
      // this loop will be used to shuffle the words in the lorem_ipsum string
      for (let i = len - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
      paras.push(`${arr.join(" ").trim()}`);
    }
    return paras.map((para, index) => {
      return (
        <article key={`para_${index}`} className="paragraph">
          <p>{para}</p>
        </article>
      );
    });
  };

  return (
    <>
      {parseInt(paraLength) === 0 ? (
        <h3>No paragraphs</h3>
      ) : (
        <section>{renderParagraphs()}</section>
      )}
    </>
  );
};

export default ParagraphSection;
