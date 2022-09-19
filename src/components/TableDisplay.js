import React from 'react'
import { Table } from 'semantic-ui-react'

function TableDisplay(props) {
  const currentJson = props.currentJson
  const maxHeight = props.maxHeight || 200
  console.log('maxHeight', maxHeight)

  const renderTable = () => {
    const tableId = Object.keys(currentJson.clinicalData.itemGroupData)[0]
    return (
      <div style={{ maxHeight: maxHeight + 'px' }}>
        <Table celled compact striped>
          <Table.Header>
            <Table.Row>
              {currentJson.clinicalData.itemGroupData[tableId].items.map((colItem) => {
                return <Table.HeaderCell key={colItem.OID}>{colItem.label}</Table.HeaderCell>
              })}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {currentJson.clinicalData.itemGroupData[tableId].itemData.map((rowItem, i) => {
              return (
                <Table.Row key={'row_' + i}>
                  {rowItem.map((colItem, j) => {
                    return <Table.Cell key={'row_' + i + '_col_' + j}>{colItem}</Table.Cell>
                  })}
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </div>
    )
  }

  return <div className='scrollXY'>{renderTable()}</div>
}

export default TableDisplay
