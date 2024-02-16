import React from 'react'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'

const ContactList: React.FC = () => {
  const contacts = useSelector((state: any) => state.contacts)

  return (
    <div>
      {contacts.map((contact: any) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  )
}

export default ContactList
