const App = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("sumitted");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("clicked", e.target);
  };

  return (
    <div>
      <input type='text' onChange={handleInputChange} />
      <button onClick={handleClick}>Click</button>

      <br />
      <br />
      <form onSubmit={handleFormSubmit}>
        <input type='text' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default App;
