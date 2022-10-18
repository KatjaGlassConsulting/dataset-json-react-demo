import React from 'react'

function InfoDisplay(props) {
  return (
    <div>
      <h2>Description</h2>
      <p>This example shows how the dataset-json content can be displayed with a React-Application. Different table displays and formats are shown.</p>
      <hr/>
      <h3>Table 1 - limit to 200 rows</h3>
      <p>This is a very basic simple table display just using some formatting from the semantic-ui layout package.</p>
      <h3>Table 2 - limit to 200 rows</h3>
      <p>This is identical to Table 1, but the line height is not dynamic but fixed.</p>
    </div>
  )
}

export default InfoDisplay
