import { useState } from 'react'
import emailjs from 'emailjs-com'
import './ContactForm.css'
import ConfirmSend from './ConfirmSend'

const ContactForm = () => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
  const userId = process.env.REACT_APP_EMAILJS_USER_ID

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const [confirmMsg, setConfirmMsg] = useState({ display: 'none' })
  const [emptyMsg, setEmptyMsg] = useState({ display: 'none' })

  const [formControl, setFormControl] = useState('contact-form-control')

  const sendEmail = (e) => {
    e.preventDefault()

    if (!name || !email || !message) {
      setEmptyMsg({ display: 'block' })
      setFormControl('contact-form-control placeholderColor')
      return
    }

    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        console.log(result.text)
        setConfirmMsg({ display: 'block' })
        setTimeout(() => {
          setConfirmMsg({ display: 'none' })
        }, 3000)
      },
      (error) => {
        console.log(error.text)
      }
    )

    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
    setFormControl('contact-form-control')
    setEmptyMsg({ display: 'none' })
  }

  return (
    <div className="contact-form">
      <form onSubmit={sendEmail}>
        <div className={formControl}>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name *"
          />
        </div>
        <div className={formControl}>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email *"
          />
        </div>
        <div className="contact-form-control">
          <input
            type="phone"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
          />
        </div>
        <div className={formControl}>
          <textarea
            type="message"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message *"
          />
        </div>
        <p className="emptyNotice" style={emptyMsg}>
          Please fill out the form. Thank you!
        </p>
        <div className="contactForm-btn">
          <button type="submit">Send Message</button>
        </div>
      </form>
      <ConfirmSend showMsg={confirmMsg} />
    </div>
  )
}

export default ContactForm
