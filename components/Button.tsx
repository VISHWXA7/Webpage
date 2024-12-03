type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    varient: 'btn_dark_green'
}

const Button = ({ type, title, icon, varient }: ButtonProps) => {
  return (
    <button type={type} >
        
    </button>
  )
}

export default Button