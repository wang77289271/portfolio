import ContactForm from './ContactForm'
import './ContactMe.css'

const ContactMe = () => {
  return (
    <div className="contactme">
      <div className="contactme-wrapper">
        <div className="contactme-title">
          <h2>Let's get in touch!</h2>
        </div>
        <div className="contactme-main">
          {/* <div className="contactMe-content">
            <img src={mailImg} alt="contact me" />
          </div> */}
          <div className="contactme-form">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
