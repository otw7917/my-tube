import { FormEvent, useState } from "react";

function Header() {
  const [data, setData] = useState();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    // console.dir(form.elements);
    const formElements = form.elements as HTMLFormControlsCollection & {
      searchBar: { value: string };
    };

    const searchBarValue = formElements.searchBar.value;

    async function getSearchVideoList(searchTitle: string) {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTitle}&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        const result = await response.json();
        setData(result);
        return result;
      } else {
        throw new Error(`net work Error ${response.status}`);
      }
    }
    // getSearchVideoList(searchBarValue);
  };

  return (
    <div className='w-full h-20 flex items-center '>
      <div className='text-lg font-bold flex-1'>
        <a href='/'>MYTUBE</a>
      </div>
      <div className='flex-grow'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='searchBar'>
            <input type='text' id='searchBar' name='searchBar' />
          </label>
          <button type='submit'>🔎</button>
        </form>
      </div>
      <div className='flex-1'></div>
    </div>
  );
}

export default Header;
