import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Chapter = () => {
  const params = useParams();
  const id = params.id;

  const [data, setData] = useState([]);

  const callApi = async () => {
    const res = await axios.get(
      "https://api.codingthailand.com/api/course/" + id
    );
    const data_format = await res.data.data;
    setData(data_format);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-6">Chapter List</h1>
      <div className="space-y-6">
        {data.map((c) => (
          <Chaptercourse
            key={c.id}
            title={c.ch_title}
            url={c.ch_url}
            view={c.ch_view}
            timetotal={c.ch_timetotal}
          />
        ))}
      </div>
    </div>
  );
};

const Chaptercourse = (props) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="text-lg font-semibold text-gray-800 mb-4">{props.title}</div>
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          src={"https://www.youtube.com/embed/" + props.url}
          frameBorder="0"
          className="w-full h-full rounded"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-sm text-gray-600">
        <span className="font-semibold">Views: </span>
        {props.view}
      </div>
      <div className="text-sm text-gray-600">
        <span className="font-semibold">Duration: </span>
        {props.timetotal} minutes
      </div>
    </div>
  );
};

export default Chapter;
