interface Props {
    id: number;
    fullName: string;
    url: string;
}

const List = ({ fullName, id, url }: Props) => {

    return (
        <div className="flex items-center border-4 p-5 mt-5">
            <img src={url} alt="foto da pessoa" className="rounded-full w-32" />

            <h1 className="ml-5 text-2xl">
                {fullName}
            </h1>
        </div>
    )
}

export {List} 