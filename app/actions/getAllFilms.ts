export function getAllFilms(): Promise<FilmsResponse2> {
    return fetch(
        // "https://swapi.dev/api/films"
        "https://swapi.tech/api/films"
        // { cache: "no-store" }//ServerSideRendering ->getServerSideProps
        // { cache: "force-cache" }//ServerSideGeneration ->getStaticProps
        // { next: { revalidate: 30 } } //IncrimentalStaticRevalidation -> getStaticProps and revalidate
    ).then((res) =>
        res.json()
    );
}