import React from 'react';
import '../Styles/Resume.css'
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack5';
import ResumePDF from './Resume.pdf'


function Resume() {
  return (
    <div className='resume'>
      <div className='document'>
        <Document file={ResumePDF}>
          <Page pageNumber={1} className="page" />
        </Document>
      </div>
    </div>
  )
}

export default Resume