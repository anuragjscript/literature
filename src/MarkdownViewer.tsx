import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownViewerProps {
  fileName: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ fileName }) => {
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        let response: Response;

        // Determine whether to load locally or from Cloudinary
        if (import.meta.env.VITE_MD_SOURCE === "local") {
          // For local development
          response = await fetch(`${import.meta.env.VITE_MD_PATH}/${fileName}`);
        } else if (import.meta.env.VITE_MD_SOURCE === "cloudinary") {
          // For production (Cloudinary)
          response = await fetch(
            `${import.meta.env.VITE_MD_CLOUDINARY_URL}/${fileName}`
          );
        } else {
          throw new Error("Invalid source for Markdown files");
        }

        const text = await response.text();
        setMarkdown(text);
      } catch (error) {
        console.error("Error fetching Markdown file:", error);
      }
    };

    fetchMarkdown();
  }, [fileName]);

  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
