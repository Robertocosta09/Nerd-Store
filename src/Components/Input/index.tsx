import { ChangeEvent } from "react";

interface Props {
    setValue: (value: string) => void;
}

const Input = ({ setValue }: Props) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <input className="ml-3 px-2 py-1 border-2 border-blue-300 w-full" type="text" onChange={handleChange} />
    )
}

export { Input };
