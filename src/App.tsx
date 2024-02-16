import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import contactsReducer from './store/reducers/contactsReducers'
import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm'

const store = createStore(contactsReducer)

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Oswald', sans-serif;
  background-color: #3c1642;
  color: #dbdbdb;
`

const H1 = styled.h1`
  text-align: center;
`

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container>
        <H1>Lista de Contatos</H1>
        <ContactList />
        <ContactForm />
      </Container>
    </Provider>
  )
}

export default App
