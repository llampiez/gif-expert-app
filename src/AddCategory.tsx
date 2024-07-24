import { useState } from 'react';

type Props = {
  onAddCategory: (arg: string) => void
}

export const AddCategory = ({ onAddCategory }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.trim().length < 1) return;

    onAddCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Buscar gif' value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
