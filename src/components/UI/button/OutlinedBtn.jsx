import './OutlinedBtn.css'

const OutlinedBtn = (props) => {
  const classes = 'btn_outlined ' + props.className
  return (
    <div className={classes}>
      <button>{props.children}</button>
    </div>
  )
}

export default OutlinedBtn
