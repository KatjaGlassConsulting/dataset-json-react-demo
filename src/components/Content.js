import React, { useState, useEffect } from 'react'
import { Input, Button, Menu } from 'semantic-ui-react'

import getJsonFromURL from './../API/getJsonFromURL'
import TableDisplay1 from './TableDisplay1'
import TableDisplay2 from './TableDisplay2'
import InfoDisplay from './InfoDisplay'

function Content() {
  const defaultURL =
    'https://raw.githubusercontent.com/cdisc-org/DataExchange-DatasetJson/master/examples/adam/adae.json'

  const [loadFromURL, setLoadFromURL] = useState(defaultURL)
  const [currentJson, setCurrentJson] = useState(null)
  const [display, setDisplay] = useState('Table 1')
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

  // console.log('complete file as JSON', currentJson)
  // if (currentJson) {
  //   console.log('Investigate available itemGroupData Information', Object.keys(currentJson.clinicalData.itemGroupData))
  // }

  const maxTableHeight = height - 250 > 50 ? height - 250 : 200

  const handleDisplayClick = (e, { name }) => {
    setDisplay(name);
  }

  const contentTab = () => {
    return (
      <Menu pointing secondary style={{ padding: 0 }}>
        <Menu.Item name='Table 1' active={display === 'Table 1'} onClick={handleDisplayClick} />
        <Menu.Item name='Table 2' active={display === 'Table 2'} onClick={handleDisplayClick} />
        <Menu.Item name='Info' active={display === 'Info'} onClick={handleDisplayClick} />
      </Menu>
    )
  }

  const content = () => {
    switch (display) {
      case "Table 1":
        return (<TableDisplay1 currentJson={currentJson} maxHeight={maxTableHeight} />);
      case "Table 2":
        return (<TableDisplay2 currentJson={currentJson} maxHeight={maxTableHeight} />);
      case "Info":
        return (<InfoDisplay/>);
      default:
        return (<p>Other</p>)
    }
  }

  return (
    <div>
      <Input
        label={<Button onClick={onLoadFromUrl}>Load</Button>}
        placeholder='Load'
        value={loadFromURL}
        onChange={handleOnLoadUrlChange}
        fluid
      />
      {currentJson === null && <div><br/><p>Please load a JSON file</p></div>}
      {currentJson !== null && contentTab()}
      {currentJson !== null && content()}
    </div>
  )
}

export default Content
