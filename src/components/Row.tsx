import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { IProduct } from '../interfaces/products'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { ModalComponent } from './ModalComponent'

const Row: React.FunctionComponent<IProduct> = observer((product: IProduct) => {
  const { id, name, year, color } = product
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleModalOpen = () => setIsModalOpen(true)
  return (
    <>
      <TableRow
        sx={{ backgroundColor: color, cursor: 'pointer' }}
        onClick={handleModalOpen}
      >
        <TableCell align='left'>{id}</TableCell>
        <TableCell align='center'>{name}</TableCell>
        <TableCell align='right'>{year}</TableCell>
      </TableRow>
      <ModalComponent
        properties={product}
        open={isModalOpen}
        setOpen={setIsModalOpen}
      />
    </>
  )
})

export { Row }
