import { useState } from 'react';
import { AddCategory } from './AddCategory';

export const App = () => {
  const [categories, setCategories] = useState(['Kimetsu No Yaiba', 'Jujutsu Kaisen']);

  const handleAddCategory = (newCategory: string) => {
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>Hello, world!</h1>

      <AddCategory
        onAddCategory={handleAddCategory}
      />

      <ol>
        {categories.map((category, index) => {
          return <li key={index}>{category}</li>;
        })}
      </ol>
    </>
  );
};
