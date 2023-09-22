import { getAllFilms } from "@/app/actions/getAllFilms";
import { getFilm } from "@/app/actions/getFilm";

interface Params {
  params: {
    filmId: number;
  };
}

const Film = async ({ params: { filmId } }: Params) => {
  console.log("🚀  filmId:", filmId);
  const film = await getFilm(filmId);

  console.log("🚀  film:", film);
  return (
    <div>
      <h4>{film.result.properties.title}</h4>
    </div>
  );
};

export default Film;

export async function generateStaticParams() {
  const allFilms = await getAllFilms();
  return allFilms.result.map((film) => ({ filmId: film.uid }));
}
