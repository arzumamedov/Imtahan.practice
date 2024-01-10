import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddPage() {

  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [icon, setIcon] = useState('')
  function handleAdd() {

    fetch("http://localhost:7000/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, description: description, icon: icon })
    })
    navigate("/")
  }



  return (
    <>
      <form onSubmit={handleAdd}>
        <input type="text" placeholder='Enter Icon' onChange={(e) => setIcon(e.target.value)} />
        <input type="text" placeholder='Enter Description' onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='Enter Name' onChange={(e) => setDescription(e.target.value)} />
        <button>Add</button>
      </form>
    </>
  )
}

export default AddPage