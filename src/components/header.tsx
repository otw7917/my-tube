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
    <div className='w-full h-20 flex items-center mx-10'>
      <div className='text-lg font-bold flex-1'>
        <a href='/'>MYTUBE</a>
      </div>
      <div className='flex-grow'>
        <form
          onSubmit={handleSubmit}
          className='w-3/4 bg-slate-400  border-blue-600 rounded-xl flex'
        >
          <label htmlFor='searchBar' className='p-2 flex-grow'>
            <input
              type='text'
              id='searchBar'
              name='searchBar'
              className='bg-slate-400 font-bold w-full outline-none caret-blue-600 px-2 focus:ring-4 focus:ring-blue-600 '
              placeholder='원하는 영상을 찾아보세요'
            />
          </label>
          <button
            type='submit'
            className='bg-blue-600 p-2 rounded-r-xl hover:bg-blue-800'
          >
            🔎
          </button>
        </form>
      </div>
      <div className='flex-1'></div>
    </div>
  );
}

export default Header;
