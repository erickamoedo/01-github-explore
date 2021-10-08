import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

//https://api.github.com/users/ckamoedo
//https://api.github.com/orgs/rocketseat/repos

//  const repositorio = {
//    name: "nome teste",
//    desc: "descricao curta",
//    url: "gomake.com.br"
//  };

interface Repository {
  name: string;
  description: string;
  html_url: string;
}
export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]); // lista começa sempre um array vazio

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      //fetch("https://www.songsterr.com/a/ra/songs.json?pattern=Marley")
      .then((response) => response.json()) // convertendo a resposta em json
      .then((data) => setRepositories(data));
  }, []);
  // no useEffect precisa sempre ter o [] que é a dependencia que diz pra ele, se é uma unica vez ou varias... se deixar sem [], ele ira entrar em loop

  console.log(repositories);

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        {
          // o .map percorre todo o repositorio e devolve alguma coisa pra cada repositorio
          repositories.map((repositorio) => {
            return (
              <RepositoryItem key={repositorio.name} repository={repositorio} /> // quando usa um map, precisa sempre passar uma chave unica para a sequencia.
            );
          })
        }
      </ul>
    </section>
  );
}
