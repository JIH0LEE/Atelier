import React from 'react'
import { Pagination } from 'react-bootstrap'

const PageBar = ({ lastIndex, activePage, changePage }) => {
  let items = []
  let start = parseInt(activePage / 11) * 10 + 1
  let isFirst = parseInt(activePage / 11) === 0
  let isLast = lastIndex - activePage < 10

  if (isLast) {
    for (let number = start; number <= lastIndex; number++) {
      items.push(
        <Pagination.Item
          onClick={() => {
            changePage(number)
          }}
          key={number}
          active={number === activePage}
        >
          {number}
        </Pagination.Item>
      )
    }
  } else {
    for (let number = start; number <= start + 9; number++) {
      items.push(
        <Pagination.Item
          onClick={() => {
            changePage(number)
          }}
          key={number}
          active={number === activePage}
        >
          {number}
        </Pagination.Item>
      )
    }
  }
  return (
    <Pagination style={{ justifyContent: 'center' }}>
      {isFirst ? (
        <></>
      ) : (
        <>
          <Pagination.First />
          <Pagination.Prev />
        </>
      )}
      {items}
      {isLast ? (
        <></>
      ) : (
        <>
          <Pagination.Next />
          <Pagination.Last />
        </>
      )}
    </Pagination>
  )
}

export default PageBar
