import React from "react";

const NewsBlock = (props) => {
  return (
    <div className="flex flex-row flex-wrap sm:block hover-img">
      <figure>
        <img
          className="max-w-full w-full mx-auto"
          src={props.imageUrl}
          alt={props.title}
        />
      </figure>

      <div className="py-0 sm:py-3 pt-2">
        <h3 className="text-lg font-bold leading-tight mb-2 line-clamp-2">
          {props.title}
        </h3>
        <p className="text-gray-600 leading-tight mb-1 line-clamp-1">
          {props.abstract}
        </p>
        <span className="text-gray-500 text-xs">
          <span className="inline-block h-2 border-l-2 border-red-600 mr-2"></span>
          {props.date}
        </span>
      </div>
    </div>
  );
};

export default NewsBlock;
