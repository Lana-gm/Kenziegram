import { InputShape } from "./style"

const GrayInput = ({placeholder, name, type, error = "", register, onChange, ...rest}) => {

    return (
        <InputShape type={type} placeholder={placeholder} name={name}
        error={error} register={register} rest={rest} onChange={onChange}/>
    )
}

export default GrayInput