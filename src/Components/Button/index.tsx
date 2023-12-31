
interface Props {
    title: string;
    handleClick: () => void;
}

const Button = ({ title, handleClick }: Props) => {


    return (
        <button className="ml-6 bg-blue-700 px-4 py-2 text-white rounded-lg hover:opacity-90" onClick={() => handleClick()}>{title}</button>
    )
}

export {Button}