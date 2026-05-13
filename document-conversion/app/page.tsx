"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import gfm from "remark-gfm";
import { exportToDocx } from "../exportToDocx";
import { exportToPptx } from "../exportToPptx";

export default function Home() {
  const [markdown, setMarkdown] = useState('# markdown preview');
  const [fileName, setFileName] = useState('default');

  const handleGoogleExport = () => {
    const generatedFileName = `markdown_${Date.now()}`;
    setFileName(generatedFileName);

    window.open(
      `/api/startOAuth?content=${encodeURIComponent(
        markdown
      )}&fileName=${encodeURIComponent(generatedFileName)}`,
      "_blank"
    );
  };

  const handleWordExport = () => {
    const generatedFileName = `markdown_${Date.now()}.doc`;
    exportToDocx(markdown, generatedFileName);
  };

  const handlePptxExport = () => {
    const generatedFileName = `markdown_${Date.now()}.pptx`;
    exportToPptx(markdown, generatedFileName);
  };

  return (
    <main>
      <section className="markdown mx-auto p-4">
        <textarea
          className="markdown"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />

        <button onClick={handleGoogleExport} className="export-btn mt-3">
          Export Markdown
        </button>

        <button onClick={handleWordExport} className="export-btn mt-3">
          Export Word
        </button>

        <button onClick={handlePptxExport} className="export-btn mt-3">
          Export PowerPoint
        </button>

        <article className="preview">
          <ReactMarkdown
            remarkPlugins={[gfm]}
            components={{
              code({ className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    style={dark as any}
                    language={match[1]}
                    PreTag="div"
                    wrapLongLines={true}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {markdown}
          </ReactMarkdown>
        </article>
      </section>
    </main>
  );
}
