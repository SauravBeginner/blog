import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../utils/baseUrl";

export interface Blog {
  title: string;
  content: string;
  id: string;
  author: {
    name: string;
  };
  publishedDate?: string;
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    axios
      .get(`${baseURL}/blog/post/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        // console.log(response.data.post);
        setBlog(response.data.post);
        setLoading(false);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, [id]);

  return {
    loading,
    blog,
  };
};
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/blog/bulk`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        // console.log(response.data.posts);
        setBlogs(response.data.posts);

        setLoading(false);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, []);

  return {
    loading,
    blogs,
  };
};
