import { InputShape } from "./style"

const GrayInput = ({placeholder, type, error = "", register, ...rest}) => {

    return (
        <InputShape type={type} placeholder={placeholder} 
        error={error} register={register} rest={rest}/>
    );
}

export default GrayInput