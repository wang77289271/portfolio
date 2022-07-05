import './SolidBtn.css'

const SolidBtn = (props) => {
  const classes = 'btn_solid ' + props.className
  return (
    <div className={classes}>
      <button>{props.children}</button>
    </div>
  )
}

export default SolidBtn
