import React from "react";
import { Link } from "react-router-dom";

const Course = ({course}) => {
    const { name, img} = course;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <Link to={`/course/${course.id}`}>
          <button type="button" class="btn btn-dark">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
