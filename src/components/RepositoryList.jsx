import { RepositoryItem } from "./RepositoryItem";

const repositorio = {
  name: "nome teste",
  desc: "descricao curta",
  url: "gomake.com.br"
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        <RepositoryItem primeiraPropriedade={repositorio} />
        <RepositoryItem primeiraPropriedade={repositorio} />
        <RepositoryItem primeiraPropriedade={repositorio} />
        <RepositoryItem primeiraPropriedade={repositorio} />
      </ul>
    </section>
  );
}
