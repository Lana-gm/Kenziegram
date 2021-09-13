import { InputShape } from "./style"

const GrayInput = ({placeholder, name, register, type, error = "", onChange, ...rest}) => {

    return (
        <>
        { register ?
        <InputShape type={type} placeholder={placeholder} name={name}
        error={error} {...register(name)} {...rest} onChange={onChange}/>
        :
        <InputShape type={type} placeholder={placeholder} name={name}
        error={error} {...rest} onChange={onChange}/>
        }
        </>
    )
}

export default GrayInput