import './OutlinedBtn.css'

const OutlinedBtn = (props) => {
  const classes = 'btn_outlined ' + props.className
  return (
    <div className={classes}>
      <a href={props.href} onClick={props.onClick}>
        {props.children}
      </a>
    </div>
  )
}

export default OutlinedBtn
