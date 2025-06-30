import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { stories } from './data/data';

function ViewStory() {
  const { id, tot } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const storyId = Number(id);
    const total = Number(tot);

    if (storyId > total || storyId <= 0 || isNaN(storyId)) {
      navigate('/');
    }
  }, [id, tot, navigate]);

  const story = stories.find((s) => s.id === Number(id));

  const handleImageClick = (e) => {
    const clickX = e.nativeEvent.offsetX;
    const width = e.target.offsetWidth;
    const storyId = Number(id);
    const total = Number(tot);

    if (clickX < width / 2) {
      // Left click
      if (storyId > 1) {
        navigate(`/story/${storyId - 1}/${tot}`);
      } else {
        navigate('/');
      }
    } else {
      // Right click
      if (storyId < total) {
        navigate(`/story/${storyId + 1}/${tot}`);
      } else {
        navigate('/');
      }
    }
  };

  return (
    <div>
      {story ? (
        <div className="d-flex justify-content-center align-items-center" style={{ position: "relative" }}>
          <img
            className="vh-100"
            src={story.image}
            alt="story"
            onClick={handleImageClick}
            style={{ cursor: "pointer" }}
          />
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default ViewStory;
