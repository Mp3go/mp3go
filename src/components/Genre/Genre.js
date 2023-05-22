import AlbumList from "../AlbumList";
import data from "../data";
import { useParams } from "react-router";
// error page for any random string for genretype

export default function Genre() {
  const { genreType } = useParams();

  const result = data.filter((card) => {
    switch (genreType.toLowerCase()) {
      case "all":
        return true;

      case "hip-hop":
      case "pop":
      case "punjabi":
      case "jazz":
      case "rock":
        return card.genre === genreType;

      default:
        return true;
    }
  });

  const albums = [...result].sort((a, b) =>
    a.albumName.localeCompare(b.albumName)
  );

  return (
    <div className="my-4 p-2">
      <h2 className="ml-3 text-6xl font-bold leading-none">
        {genreType.toLowerCase() === "all" ? "All Genre" : genreType}
      </h2>
      <AlbumList albums={albums} />
    </div>
  );
}
