import { useState } from "react";
import { toast } from "react-toastify";

export default function ShowPost() {
  const [post, setPost] = useState(undefined);

  function loadPost() {
    toast.loading("Loading..post");
    ///load post from server
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    fetch(url)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        toast.dismiss();
        toast.success("Post loaded");

        setPost(data);
      });
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">SHowing posts</h1>
      <button
        onClick={loadPost}
        className="text-white bg-orange-800 px-3 py-1 rounded"
      >
        Load Post
      </button>

      {post && (
        <div className="my-10 w-1/2  p-10 rounded shadow bg-gray-700  text-white">
          <h1 className="text-2xl">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}
