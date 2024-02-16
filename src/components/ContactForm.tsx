import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const FormContainer = styled.div`
  margin-top: 20px;
`
const H2 = styled.h2`
  text-align: center;
`

const Button = styled.button`
  margin-top: 5px;
  text-align: center;
  margin-left: 250px;
`
const Input = styled.input`
  display: flexbox;
  margin: 5px;
  margin-left: 210px;
`

const ContactForm: React.FC = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch({ type: 'ADD_CONTACT', payload: formData })
    setFormData({ fullName: '', email: '', phone: '' })
  }

  return (
    <FormContainer>
      <H2>Adicionar Contato</H2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="fullName"
          placeholder="Nome completo"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="phone"
          placeholder="Telefone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Button type="submit">Adicionar</Button>
      </form>
    </FormContainer>
  )
}

export default ContactForm
