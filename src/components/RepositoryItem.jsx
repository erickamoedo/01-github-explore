export function RepositoryItem(props) {
  return (
    /*  API do songsterr */
    <li>
      <strong>{props.repository.title ?? "Vazio"}</strong>
      <p> {props.repository.artist.nameWithoutThePrefix ?? "vazio"} </p>
      <a href={props.repository.html_url ?? "vazio"} target="_blank">
        {props.repository.id ?? "vazio"}
      </a>
    </li>

    /*  API do GIT
      <li>
        <strong>{props.repository.name ?? "Vazio"}</strong>
        <p> {props.repository.description ?? "vazio"} </p>
        <a href={props.repository.html_url ?? "vazio"} target="_blank">
          {props.repository.html_url ?? "vazio"}
        </a>
      </li>
    */
  );
}
