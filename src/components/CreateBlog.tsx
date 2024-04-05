import { useState } from "react";
import { LabelInput } from "./LabelInput";
import TextAreaInput from "./TextAreaInput";
import { Button } from "./Button";
import axios from "axios";
import { baseURL } from "../utils/baseUrl";
import { useNavigate } from "react-router-dom";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const publishBlog = async () => {
    try {
      const response = await axios.post(
        `${baseURL}/blog/create`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      navigate(`/blog/${response.data.id}`);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col  px-4 py-12">
        <div className="flex items-center justify-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-12 w-12 text-gray-400"
          >
            <circle cx={12} cy={12} r={10} />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
          <LabelInput
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            className="text-5xl font-bold text-gray-600 placeholder-gray-400 border-none focus:outline-none focus:ring-0"
          />
        </div>
        <div className="mt-4">
          <TextAreaInput onChange={(e) => setContent(e.target.value)} />
        </div>
        <div className="flex flex-colitems-center justify-center">
          <Button onClick={publishBlog}>Publish</Button>
        </div>
      </main>
    </div>
  );
};
