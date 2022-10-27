import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const details = useLoaderData();
  return (
    <div>
      <div class="card">
        <img src={details.img} class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{details.title}</h5>
          <p class="card-text">{details.details}</p>
          <Link to="/courses">
          <button type="button" class="btn btn-warning me-2">
            Back to Courses
          </button>
          </Link>
          <Link to={`/checkout/${details.id}`}>
          <button type="button" class="btn btn-dark">
            Get premium access
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
