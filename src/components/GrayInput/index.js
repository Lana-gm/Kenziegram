import { InputShape } from "./style"

const GrayInput = ({placeholder, name, register, type, error = "", onChange, ...rest}) => {

    return (
        <>
        <InputShape type={type} placeholder={placeholder} name={name}
        error={error} {...register(name)} {...rest} onChange={onChange}/>
        </>
    )
}

export default GrayInput