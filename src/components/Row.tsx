import React from 'react'
import { observer } from 'mobx-react-lite'
import { IProduct } from '../interfaces/products'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

const Row: React.FunctionComponent<IProduct> = observer(
  ({ id, name, year, color }: IProduct) => {
    return (
      <TableRow sx={{ backgroundColor: color }}>
        <TableCell align='left'>{id}</TableCell>
        <TableCell align='center'>{name}</TableCell>
        <TableCell align='right'>{year}</TableCell>
      </TableRow>
    )
  }
)

export { Row }
