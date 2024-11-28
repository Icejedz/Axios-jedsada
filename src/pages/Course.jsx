import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Course = () => {
  const [data, setData] = useState([]);

  const callApi = async () => {
    const res = await axios.get("https://api.codingthailand.com/api/course");
    const data_format = await res.data.data;

    setData(data_format);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-4">Course</h1>
      <hr className="my-4 border-gray-300" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {data.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </>
  );
};

const CourseCard = (props) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="mb-4">
        <img src={props.picture} alt={props.title} className="w-full h-48 object-cover rounded-t-lg" />
      </div>
      <div className="font-bold text-lg text-gray-800">{props.title}</div>
      <div className="text-gray-600 text-sm mt-2">{props.detail}</div>
      <div className="mt-4">
        <NavLink
          to={"course/" + props.id}
          className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors duration-300"
        >
          เนื้อหาในหลักสูตร
        </NavLink>
      </div>
    </div>
  );
};

export default Course;
