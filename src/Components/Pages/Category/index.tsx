import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../../Services/api.services";
import { IRepo } from "../../interface";

const Category = () => {
    const [listRepo, setListRepo] = useState<IRepo[]>([]);
    const { id } = useParams();
  
    useEffect(() => {
      const onMount = async () => {
        try {
          const resp = await getApi(`https://api.github.com/users/${id}/repos`);
          setListRepo(resp.data);
        } catch (error) {
          console.error('Erro ao obter dados da API:', error);
        }
      };
  
      onMount();
    }, [id]);
  
    return (
      <div className="container mx-auto">
        {listRepo.map((repo) => (
          <div className="flex items-center border-4 p-5 mt-5" key={repo.id}>
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-medium text-gray-600 dark:text-gray-300">
                {typeof repo.name === 'string' ? repo.name.slice(0, 2) : '??'}
              </span>
            </div>
            <h1 className="ml-5 text-2xl">{typeof repo.name === 'string' ? repo.name : 'Nome Indisponível'}</h1>
          </div>
        ))}
      </div>
    );
  };
  
  export { Category };