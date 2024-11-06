export default function ListeDepenses({depenses})
{
    return(
        <>
            <ul>
                {depenses.map((element) => (
                    <li>
                        <a href={element.id}>{element.titre}</a>
                    </li>
                )
            )}
            </ul>
        </>
    )
}