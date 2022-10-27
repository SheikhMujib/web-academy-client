import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="row my-5 d-flex justify-content-center">
      <div className="col-7">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      </div>
      <div className="col-4 bg-light">
        <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
          {courses.map((course) => ( <Link to={`/course/${course.id}`}>
          <button type="button" className="btn btn-dark mb-2 p-2">{course.name} </button>
          </Link>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
