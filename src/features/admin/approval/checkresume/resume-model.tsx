import { useState, useEffect } from 'react';

export default function useResumeCheck() {
  const [open, setOpen] = useState(false)

  const handlePreview = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return {
    open,
    setOpen,
    handlePreview,
    handleClose
  }
}