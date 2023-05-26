import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput = () => {
  return (
    <div className="relative cursor-text">
      <span className="absolute inset-y-0 flex items-center left-2 pl-2">
        <FontAwesomeIcon className="text-slate-400 h-5" icon={faSearch} />
      </span>
      <input
        className="py-3 px-10 w-full 
        text-slate-500 
        focus:outline-none 
        outline-none 
        rounded-md 
        bg-slate-50
        dark:bg-slate-700 
        dark:text-slate-300"
        type="text"
        placeholder="Search for songs"
      />
      <style jsx>{`
       
        @media (max-width: 340px) {
          input {
            width: 53%%;
          }
        }
        
        @media (max-width: 768px) {
          .absolute {
            left: 1rem;
          }
          
          .pl-2 {
            padding-left: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchInput;
