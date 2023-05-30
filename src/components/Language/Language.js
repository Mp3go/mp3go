import { useAxios } from "../../hooks/useAxios";
import AlbumList from "../AlbumList";
import { useParams } from "react-router";
// error page for any random string for genretype

export default function Language() {
  const { language } = useParams();
  const { data, error } = useAxios('/albums/all', "GET");

  const result = data.filter((card) => {
        return card.language === language;
    });

  const albums = [...result].sort((a, b) =>
    a.albumName.localeCompare(b.albumName)
  );

  return (
    // <div className="my-4 p-2">
    <div className='pt-10 pb-10 bg-[#DEE4E799] dark:bg-[#202124] min-h-[100vh] px-10'>
      <h2 className="ml-3 text-6xl font-bold leading-none">
        {language.toUpperCase()}
      </h2>
      <AlbumList albums={albums} />
    </div>
  );
}
