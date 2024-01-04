const Button = (props) => {
    const {children,onClick} = props
    return (
        <button onClick={onClick}className="bg-black text-white text-center rounded-lg py-3 px-5 mt-5">
            {children}
        </button>
    )
}

export default Button;