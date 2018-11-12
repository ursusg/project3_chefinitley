import React, { Component, Fragment } from "react";
import { Document, Page } from "react-pdf";
import Pdf from "../../images/Sample_Menu.pdf";

class PdfPage extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoad = ({ numPages }) => {
        // console.log("booty");
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;
        return (
            <div>
            <Fragment>
                <Document
                    file={Pdf}
                    onLoadSuccess={this.onDocumentLoad}
                >
                <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </Fragment>
            </div>
        );
    }
}
export default PdfPage;