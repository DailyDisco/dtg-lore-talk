// don't let the user use this till they're logged in
import { api } from "~/utils/api";
import { useState, useEffect } from "react";

const createThread = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC", title: "asdxi", "description": "asdas" });
  const [title, setTitle] = useState("");
  console.log(title);
  const [body, setBody] = useState("");
  console.log(body);
  const [image, setImage] = useState("");
  console.log(image);
  const [createObjectURL, setCreateObjectURL] = useState("");
  // const [userID, setUserID] = useState('')
  const [category, setCategory] = useState("");
  console.log(category);
  // const views = 0
  // const replies = 0

  function handleImage({ e }: any) {
    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  }

  function handleSubmit({ e }: any) {
    // e.preventDefault()
    console.log("handleSubmit");
    api.example.createThread.useMutation({
      title: title,
      body: body,
      category: category,
      image: image,
    });
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <h2 className="text-2xl">Post a Thread</h2>
        <section>
          <form className="spacebet flex flex-col border-2 border-slate-400">
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div>
              <label htmlFor="body">Body</label>
              <textarea
                name="body"
                id="body"
                cols={30}
                rows={10}
                onChange={(e) => setBody(e.target.value)}
                value={body}
              />
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="category"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              ></input>
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                type="file"
                name="image"
                id="image"
                onChange={(e) => handleImage(e)}
                value={image}
              ></input>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700"
              type="submit"
            >
              Post
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default createThread;
