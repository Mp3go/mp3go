import AlbumList from "../AlbumList";
import data from "../data";
import { useParams } from "react-router";

export default function Genre() {
  const { genreType } = useParams();

  const albums = data.filter((card) => {
    switch (genreType) {
      case "All":
        return true;

      case "Hip-Hop":
      case "PoP":
      case "Punjabi":
      case "Jazz":
      case "Rock":
        return card.genre === genreType;

      default:
        return true;
    }
  });

  return (
    <div className="my-4 p-2">
      <h2 className="ml-3 text-6xl font-bold leading-none">{genreType}</h2>
      <AlbumList albums={albums} />
    </div>
  );
}
