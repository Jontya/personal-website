import React from 'react';
import {Document} from "react-pdf";

function Resume() {
  return (
    <div classname='resume-container'>
      <Document file="./Resume.pdf" />
    </div>
  )
}

export default Resume