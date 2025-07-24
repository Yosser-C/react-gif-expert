import { useState } from "react";
import { AddCategory, GifGrid } from "./componets";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  const onAddCaegory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    //console.log(newCategory);

    //categories.push(newCategory);
    setCategories([newCategory, ...categories]); // insertando al inicio
    //setCategories([...categories, "valorant"]);  //insertando al final
    //setCategories((cat) => [...cat, "valorant"]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCaegory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
