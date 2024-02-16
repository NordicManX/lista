import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const ItemContainer = styled.div`
  border: 3px solid #080808;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #086375;
  row-gap: 1fr;
  text-align: center;
  color: #dbdbdb;
`

interface ContactItemProps {
  contact: {
    id: number
    fullName: string
    email: string
    phone: string
  }
}

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [editedContact, setEditedContact] = useState(contact)

  const handleRemoveContact = () => {
    dispatch({ type: 'REMOVE_CONTACT', payload: { id: contact.id } })
  }

  const handleToggleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditedContact({ ...editedContact, [name]: value })
  }

  const handleSaveEdit = () => {
    dispatch({
      type: 'EDIT_CONTACT',
      payload: { id: contact.id, updatedContact: editedContact }
    })
    setIsEditing(false)
  }

  return (
    <ItemContainer>
      {isEditing ? (
        <>
          <input
            type="text"
            name="fullName"
            value={editedContact.fullName}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            value={editedContact.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            value={editedContact.phone}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveEdit}>Salvar</button>
        </>
      ) : (
        <>
          <p>
            <strong>Nome:</strong> {contact.fullName}
          </p>
          <p>
            <strong>Email:</strong> {contact.email}
          </p>
          <p>
            <strong>Telefone:</strong> {contact.phone}
          </p>
          <button onClick={handleToggleEdit}>Editar</button>
          <button onClick={handleRemoveContact}>Remover</button>
        </>
      )}
    </ItemContainer>
  )
}

export default ContactItem
