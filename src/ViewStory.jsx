import React, { useEffect} from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {stories} from './data/data';

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


  return (
   <div>
  {story ? (
    <div className="d-flex justify-content-center align-items-center">
      <Link to={Number(id) > 1 ? `/story/${Number(id) - 1}/${tot}` : '/'}>
        <i className="bi bi-arrow-left-circle-fill"></i>
      </Link>

      <img className="vh-100" src={story.image} alt="story" />

      <Link to={Number(id) < Number(tot) ? `/story/${Number(id) + 1}/${tot}` : '/'}>
        <i className="bi bi-arrow-right-circle-fill"></i>
      </Link>
    </div>
  ) : (
    <div>Loading</div>
  )}
</div>

  );
}

export default ViewStory;
