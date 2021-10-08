interface RepositoryItemProps {
  // vou tipar minha propriedade, explicando para o typescript o que tem dentro da propriedade props
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    /*  API do songsterr 
    <li>
      <strong>{props.repository.title ?? "Vazio"}</strong>
      <p> {props.repository.artist.nameWithoutThePrefix ?? "vazio"} </p>
      <a href={props.repository.html_url ?? "vazio"} target="_blank">
        {props.repository.id ?? "vazio"}
      </a>
    </li>
    */

    /*  API do GIT */
    <li>
      <h1> teste</h1>
      <strong>{props.repository.name ?? "Vazio"}</strong>
      <p> {props.repository.description ?? "vazio"} </p>
      <a href={props.repository.html_url ?? "vazio"} target="_blank">
        {props.repository.html_url ?? "vazio"}
      </a>
    </li>
  );
}
