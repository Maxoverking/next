import Link from "next/link";
import { getAllFilms } from "../actions/getAllFilms";

// export const dynamic = "force-dynamic";
const FilmsPage = async () => {
  const allFilms = await getAllFilms();
  return (
    <div className="container mx-auto mt-4">
      <h2 className="mb-2 text-lg font-semibold text-gray-900 ">Films List</h2>
      <ul className="m-5 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {allFilms.result.map((film) => (
          <li key={film.uid}>
            <Link href={`films/${film.uid}`}>{film.properties.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmsPage;
