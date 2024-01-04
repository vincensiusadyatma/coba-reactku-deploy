import InputSet from "../component/InputSet"
import Button from "../component/Button"

const FormLogin = () => {
    const onClick = (e) =>{ 
        e.preventDefault();
        window.location.href = "#/products"
        localStorage.setItem("username",e.target.username.value)
      
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex justify-center items-center flex-col">
               <form action="" onSubmit={onClick}>
                <InputSet nama="username" tipe="username">username</InputSet>
                <InputSet nama="password" tipe="password">password</InputSet>
                <Button>Login</Button>
                <p className="mt-4">Doesn't have a account ? <a href="/daftar">sign up</a></p>
               </form>
            </div>
        </div>
    )
}

export default FormLogin
