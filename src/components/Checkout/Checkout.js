import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Checkout = () => {
  const selectedCourse = useLoaderData();
  return (
    <div className="container text-center">
      <h1> {selectedCourse.title} </h1>
      <p>Congratulations! Now, you have the premium access to this course</p>
      <p>You can explore and buy other courses in our courses section</p>
      <Link to="/courses">
      <button type="button" class="btn btn-success">Explore other courses</button>
      </Link>
    </div>
  );
};

export default Checkout;
