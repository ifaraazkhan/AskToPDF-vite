import React from 'react';

class PDFViewer22 extends React.Component {
  scrollToPage = (pageNumber) => {
    const pdfViewer = document.getElementById('pdfViewer');
    if (pdfViewer) {
      const iframeDoc = pdfViewer.contentWindow.document;
      console.log(iframeDoc);
      iframeDoc.body.scrollTop = iframeDoc.documentElement.scrollTop = 0;
      // Assuming there is an input field with the id 'pageNumberInput' for page navigation
      const pageNumberInput = iframeDoc.getElementById('pageSelector');
      console.log(pageNumberInput);
      if (pageNumberInput) {
        pageNumberInput.value = pageNumber;
        pageNumberInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  };

  render() {
    return (
      <div>
        <iframe
          id="pdfViewer"
          title="PDF Viewer"
          src='../assets/english-guidlines-2024.pdf'
          width="100%"
          height="600px"
        ></iframe>

        <button onClick={() => this.scrollToPage(2)}>Go to Page 2</button>
        <button onClick={() => this.scrollToPage(5)}>Go to Page 5</button>
      </div>
    );
  }
}

export default PDFViewer22;
