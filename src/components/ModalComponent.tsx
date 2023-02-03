import React from 'react'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { IProduct } from '@interfaces/products'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

interface IModalComponentProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  properties: IProduct
}

const ModalComponent: React.FunctionComponent<IModalComponentProps> = ({
  open,
  setOpen,
  properties,
}: IModalComponentProps) => {
  const handleClose = () => setOpen(false)

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        {Object.entries(properties).map(([key, value]) => (
          <Typography
            className='modal-modal-property'
            variant='h6'
            component='h2'
            key={key}
          >
            {`${key}: ${value}`}
          </Typography>
        ))}
      </Box>
    </Modal>
  )
}

export { ModalComponent }
