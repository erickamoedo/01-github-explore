
const teste = "teste"


export function RepositoryList(){

return(

    <section className="repository-list">

        <h1>Lista de repositorios</h1>

        <ul>

            <li> 
                
                <strong>Nome: {teste}</strong>
                <p> descrição </p>
                <a href="test"> acessar repositorio</a>

            </li>
        </ul>
    </section>
);

}