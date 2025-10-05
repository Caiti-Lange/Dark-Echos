import { episodeList } from "./data";
import { useState } from "react";

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  /** Detailed information about the selected episode */
  function EpisodeDetails() {
    if (!selectedEpoisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to learn more.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>{selectedEpisode.title}</h2>
        <p>
          {selectedEpisode.title} is episode number {selectedEpisode.id}.
        </p>
        <p>
          The description of the episode{selectedEpisode.title} is:{" "}
          {selectedepisode.description}
        </p>
      </section>
    );
  }

  /** List of episodes that a user can select from */
  function Roster() {
    return (
      <section className="episodes">
        <h2>Episodes</h2>
        <ul className="episodes">
          {episode.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echos</h1>
      </header>
      <main>
        <Episodes />
        <EpisodeDetails />
      </main>
    </>
  );
}
