import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovie] = useState([
    {
      id: 1,
      title: "Forrest Gump",
      description: "The history of the United States from the fifties to the seventies unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
      genre: "drama",
      director: "Robert Zemeckis",
      image:
        "/src/img/forrest-gump.jpg"
    },
    {
      id: 2,
      title: "The Sound of Music",
      description: "A young novice is sent by her convent in 1930s Austria to become a governess to the seven children of a widowed naval officer.",
      genre: "musical",
      director: "Robert Wise",
      image:
        "/src/img/sound-of-music"
    },
    {
      id: 3,
      title: "The Godfather",
      description: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      genre: "action",
      director: "Francis Ford Cappola",
      image:
        "/src/img/the-godfather.jpg"
    },
    {
      id: 4,
      title: "Casablanca",
      description: "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
      genre: "romantic",
      director: "Michael Curtiz",
      image:
        "/src/img/casablanca.jpg"
    },
    {
      id: 5,
      title: "Citizen Kane",
      description: "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance Rosebud",
      genre: "drama",
      director: "Orson Welles",
      image:
        "/src/img/citizen-kane.jpg"
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movie.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
