import React, { useState } from "react";
import { Page, Document, pdfjs } from "react-pdf";

//PDFjs worker from an external cdn

export default function CertificatePdf(props) {
  const url = `https://cors-anywhere.herokuapp.com/${props.url}`;
  pdfjs.GlobalWorkerOptions.workerSrc = `;//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  return (
    <>
      <div>
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} width="300" />
        </Document>
      </div>
    </>
  );
}
