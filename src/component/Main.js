import ExpenssForm from './ExpenssForm';

import ExpenssData from './ExpenssData';  
import Update from './Update';

import React from 'react'

function Main() {
  return (
    <div className="main">
      <h1>Expenss tracker</h1>
      <ExpenssForm/>
      <ExpenssData/>
      <Update/>
    </div>
  )
}

export default Main