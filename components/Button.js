const Button = ({children, customClass}) => {
  return (
    <div className={`${customClass} btn`}>
      {children}
    </div>
  )
}

export default Button;