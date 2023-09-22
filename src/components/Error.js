import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 offset-md-3 text-center">
          <h1 class="display-4">{err.status}</h1>
          <p class="lead">{err.statusText}</p>
          <p>Sorry, the page you are looking for doesn't exist.</p>
          <a href="/" class="btn btn-primary">
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
