import { useState } from 'react'

export const App = () => {
  const [categories, setCategories] = useState(['Kimetsu No Yaiba', 'Jujutsu Kaisen']);

  const handleAddCategory = () => {
    setCategories([...categories, 'Naruto'])
  }

  return (
    <>
      <h1>Hello, world!</h1>

      <button onClick={handleAddCategory}>Añadir</button>

      <ol>
        {categories.map((category, index) => {
          return (
            <li key={index}>{category}</li>
          )
        })}
      </ol>
    </>
  )
}