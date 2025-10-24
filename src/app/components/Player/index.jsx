"use client";
import React, { useRef, useState } from "react";
import "./musicplayer.scss";
import { FaPlay, FaPause, FaForward, FaBackward, FaTimes } from "react-icons/fa";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [visible, setVisible] = useState(true);

  const tracks = [
    { title: "Chill Vibes", src: "/music/track1.mp3" },
    { title: "Smooth Beat", src: "/music/track2.mp3" },
    { title: "Dream Flow", src: "/music/track3.mp3" },
  ];

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setIsPlaying(false);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) =>
      prev === 0 ? tracks.length - 1 : prev - 1
    );
    setIsPlaying(false);
  };

  if (!visible) return null;

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src={tracks[currentTrack].src}
        onEnded={nextTrack}
      ></audio>

      <div className="track-info">
        🎵 {tracks[currentTrack].title}
      </div>

      <div className="controls">
        <FaBackward onClick={prevTrack} className="icon" />
        {isPlaying ? (
          <FaPause onClick={togglePlay} className="icon" />
        ) : (
          <FaPlay onClick={togglePlay} className="icon" />
        )}
        <FaForward onClick={nextTrack} className="icon" />
      </div>

      <FaTimes onClick={() => setVisible(false)} className="close-icon" />
    </div>
  );
};

export default MusicPlayer;
