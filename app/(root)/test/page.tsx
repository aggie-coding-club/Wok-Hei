"use client";
import React, { useState } from 'react'
import Modal from '@/components/Modal'

const Test = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default Test
