import React from "react";
import useFetch from "./useFetch";

// const url = 'https://course-api.netlify.app/api/javascript-store-products'
const url = "https://course-api.com/javascript-store-products";
export default function FetchExample() {
  const { loading, data } = useFetch(url);
  const products = data.map(entry => {
    const { id, fields } = entry;
    return (
      <article key={id}>
        <h2>{fields.name}</h2>
        <h3>{fields.price}</h3>
        <img src={fields.image[0].thumbnails.small.url} alt="" />
      </article>
    );
  });

  return <div>{loading ? "loading" : products}</div>;
}
