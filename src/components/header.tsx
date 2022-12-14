import { FormEvent, useState } from "react";

function Header({
  getSearchVideoList,
}: {
  getSearchVideoList: (searchTitle: string) => Promise<void>;
}) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements as HTMLFormControlsCollection & {
      searchBar: { value: string };
    };

    const searchBarValue = formElements.searchBar.value;
    getSearchVideoList(searchBarValue);
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
