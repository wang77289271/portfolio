import './SolidBtn.css'

const SolidBtn = (props) => {
  const classes = 'btn_solid ' + props.className
  return (
    <div className={classes}>
      <a href={props.href} onClick={props.onClick}>
        {props.children}
      </a>
    </div>
  )
}

export default SolidBtn
