import InputSet from "../component/InputSet"
import Button from "../component/Button"

const FormDaftar = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex justify-center items-center flex-col">
                <InputSet nama="emailDaftar" tipe="email">email</InputSet>
                <InputSet nama="usernameDaftar" tipe="username">username</InputSet>
                <InputSet nama="passwordDaftar" tipe="password">password</InputSet>
                <Button>Sign Up</Button>
                <p className="mt-4">have a account ? <a href="/">Login</a></p>
            </div>
        </div>
    )
}

export default FormDaftar
