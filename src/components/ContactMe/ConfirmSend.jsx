import './ConfirmSend.css'

const ConfirmSend = (props) => {
  const displayMsg = props.showMsg

  return (
    <div className="confirmSend" style={displayMsg}>
      <h5>
        <i>Thank you for contacting me!</i>
      </h5>
      <h2>I will contact you shortly!</h2>
    </div>
  )
}

export default ConfirmSend
