import React from "react";
interface Props {
  params: {
    id: string[];
  };
}

export async function generateStaticParams() {
  const films = await fetch("https://swapi.dev/api/films").then((res) =>
    res.json()
  );
  console.log(films);
  return films.results.map((film: any) => ({
    slug: film.title.replace(/\s+/g, "-"),
  }));
}

const Product = ({ params }: any) => {
  return (
    <div>
      <h1>Product {JSON.stringify(params)}</h1>
    </div>
  );
};

export default Product;
