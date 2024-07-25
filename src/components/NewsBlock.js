import React from "react";
import { Link } from "react-router-dom";

const NewsBlock = (props) => {
  return (
    <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
      <div className="flex flex-row sm:block hover-img">
        <Link to="">
          <img
            className="max-w-full w-full mx-auto"
            src={props.imageUrl}
            alt={props.title}
          />
        </Link>
        <div className="py-0 sm:py-3 pl-3 sm:pl-0">
          <h3 className="text-lg font-bold leading-tight mb-2">
            <Link to="#">{props.title}</Link>
          </h3>
          <p className="text-gray-600 leading-tight mb-1 line-clamp-1">
            {props.abstract}
          </p>

          <Link className="text-gray-500 text-xs" to="#">
            <span className="inline-block h-2 border-l-2 border-red-600 mr-2"></span>
            {props.date}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsBlock;
