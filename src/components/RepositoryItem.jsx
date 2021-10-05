export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.primeiraPropriedade.name ?? "Vazio"}</strong>
      <p> {props.primeiraPropriedade.desc ?? "vazio"} </p>
      <a href="test"> {props.primeiraPropriedade.url ?? "vazio"}</a>
    </li>
  );
}
