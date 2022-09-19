import React, { useState, useEffect } from 'react'
import { Input, Button } from 'semantic-ui-react'

import TableDisplay from './TableDisplay'

import getJsonFromURL from './../API/getJsonFromURL'

function Content() {
  const defaultURL =
    'https://raw.githubusercontent.com/cdisc-org/DataExchange-DatasetJson/master/examples/adam/adae.json'

  const [loadFromURL, setLoadFromURL] = useState(defaultURL)
  const [currentJson, setCurrentJson] = useState(null)
  const [height, setHeigth] = useState({})

  useEffect(() => {
    setHeigth(window.innerHeight)
    window.addEventListener('resize', updateWindowDimensions, false)

    return () => {
      window.removeEventListener('resize', updateWindowDimensions)
    }
  }, [])

  const updateWindowDimensions = () => {
    setHeigth(window.innerHeight)
  }

  const handleOnLoadUrlChange = (event) => {
    setLoadFromURL(event.target.value)
  }

  const loadFromURLSuccess = (content) => {
    setCurrentJson(JSON.parse(content))
  }

  const onLoadFromUrl = () => {
    getJsonFromURL(loadFromURL, loadFromURLSuccess)
  }

  console.log('complete file as JSON', currentJson)
  if (currentJson) {
    console.log('Investigate available itemGroupData Information', Object.keys(currentJson.clinicalData.itemGroupData))
  }

  const maxTableHeight = height - 210 > 50 ? height - 210 : 200

  return (
    <div>
      <Input
        label={<Button onClick={onLoadFromUrl}>Load</Button>}
        placeholder='Load'
        value={loadFromURL}
        onChange={handleOnLoadUrlChange}
        fluid
      />
      <br></br>
      {currentJson === null && <p>Please load a JSON file</p>}
      {currentJson !== null && <TableDisplay currentJson={currentJson} maxHeight={maxTableHeight} />}
    </div>
  )
}

export default Content
