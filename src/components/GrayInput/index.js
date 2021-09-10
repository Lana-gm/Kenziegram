import { InputShape } from "./style"

const GrayInput = ({placeholder, name, type, error = "", register, ...rest}) => {

    return (
        <InputShape type={type} placeholder={placeholder} name={name}
        error={error} register={register} rest={rest}/>
    );
}

export default GrayInput