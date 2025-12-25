import { useState } from "react";
import {FaMapMarker} from "react-icons/fa"
import { Link } from "react-router-dom";

export default function JobListing({ job }) {
  const [ showFullDescription, setShowFullDescription] = useState(false);
  
  let description = job.description
  if(!showFullDescription) {
    description = description.substring(0,90) + "...";
  } 

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      
      <div className="text-gray-500 text-sm mb-1">
        {job.type}
      </div>

      <h3 className="text-lg font-semibold mb-2">
        {job.title}
      </h3>

      <p className="text-sm mb-3">
        {description}
      </p>

      <p onClick={() => setShowFullDescription(!showFullDescription)} 
      className="text-xs text-indigo-600 underline font-semibold mb-1 cursor-pointer hover:text-indigo-300 transition">
        {showFullDescription ? "Less" : "More"}
      </p>

      <h3 className="text-indigo-500 text-sm mb-2">
        {job.salary} / Year
      </h3>

      <div className="flex justify-between items-center">
        
        <span className="text-orange-700 text-sm">
          <FaMapMarker className="inline text-lg mb-1 mr-1"/>
          {job.location}
        </span>

        <Link to={`/jobs/${job.id}`} className="bg-indigo-500 text-white text-sm px-3 py-1 rounded">
          Read More
        </Link>
      </div>
    </div>
  )
}
