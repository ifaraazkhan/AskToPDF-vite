import { useEffect, useRef } from 'react';

const PDFViewer = ({ pdf_url, scrollToPage }) => {
  const iframeRef = useRef();

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = `https://docs.google.com/gview?url=${pdf_url}&embedded=true`;
    }
  }, [pdf_url]); // Update effect only on pdf_url change

  return (
    <iframe
      ref={iframeRef}
      className="w-full h-full"
    />
  );
};

export default PDFViewer;
