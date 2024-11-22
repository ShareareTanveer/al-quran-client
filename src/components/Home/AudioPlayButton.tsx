import { useState } from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";

export function PlayAudioButton({ audioUrl }: { audioUrl: string | undefined }) {
  const [isPlaying, setIsPlaying] = useState(false);
  // const audio = new Audio(audioUrl);

  const handlePlayPause = () => {
    if (isPlaying) {
      // audio.pause();
    } else {
      // audio.play();
    }
    setIsPlaying(!isPlaying);

    // audio.onended = () => setIsPlaying(false);
  };

  return (
    <button
      onClick={handlePlayPause}
      className="flex items-center justify-center w-12 h-12 bg-basicColor text-white rounded-full"
    >
      {isPlaying ? (
        <BsPauseFill className="text-3xl" />
      ) : (
        <BsPlayFill className="text-3xl" />
      )}
    </button>
  );
}
