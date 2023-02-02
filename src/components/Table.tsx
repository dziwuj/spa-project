import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import { IProduct } from '../interfaces/products'
import { Row } from './Row'
import { StoreContext } from '../index'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

const TableComponent: React.FunctionComponent = observer(() => {
  const store = useContext(StoreContext)
  const { products } = store.AppStore

  return (
    <Table sx={{ maxWidth: 500 }}>
      <TableHead>
        <TableRow>
          <TableCell align='left'>id</TableCell>
          <TableCell align='center'>name</TableCell>
          <TableCell align='right'>year</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product: IProduct) => (
          <Row {...product} key={product.id} />
        ))}
      </TableBody>
    </Table>
  )
})

export { TableComponent }
