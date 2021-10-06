export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? "Vazio"}</strong>
      <p> {props.repository.description ?? "vazio"} </p>
      <a href={props.repository.html_url ?? "vazio"} target="_blank">
        {props.repository.html_url ?? "vazio"}
      </a>
    </li>
  );
}
