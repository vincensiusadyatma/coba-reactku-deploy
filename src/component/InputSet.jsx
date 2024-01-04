const InputSet = (props) => {
    const {nama,tipe,children} = props
    return (
        <div className="flex flex-col justify-center items-center mt-3">
            <label htmlFor={nama} className="font-bold text-black">{children}</label>
            <input type={tipe} id={nama} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={nama}/>
        </div>
    )

}

export default InputSet