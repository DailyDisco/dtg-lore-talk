// don't let the user use this till they're logged in
import { api } from "~/utils/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const createThread = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC"});

  // const router = useRouter();

  const [title, setTitle] = useState("");
  console.log(title, "title");
  const [body, setBody] = useState("");
  console.log(body, "body");
  const [image, setImage] = useState("");
  console.log(image, "image");
  const [createObjectURL, setCreateObjectURL] = useState("");
  const [userID, setUserID] = useState("GroupWork");
  const [category, setCategory] = useState("");
  console.log(category, "category");

  // function handleImage({ e }: any) {
  //   if (e.target.files && e.target.files[0]) {
  //     const i = e.target.files[0];

  //     setImage(i);
  //     setCreateObjectURL(URL.createObjectURL(i));
  //   }
  // }
  const mutation = api.example.createThread.useMutation();

  function handleSubmit() {
    // e.preventDefault()

    const data = {
      title: title,
      body: body,
      // image: image,
      userID: userID,
      category: category,
      views: 0,
      replies: 0,
      votes: 0,
    };
    console.log(data, "data");
    mutation.mutate(data);
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="m-7 text-4xl">Create a Thread</h2>
        <section className="border-2 border-sky-700 bg-slate-200">
          <form
            onSubmit={() => handleSubmit()}
            className="spacebet flex flex-col border-2 border-slate-400"
          >
            <div className="flex flex-col">
              <label className="text-xl" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xl" htmlFor="body">
                Body
              </label>
              <textarea
                name="body"
                id="body"
                cols={30}
                rows={10}
                onChange={(e) => setBody(e.target.value)}
                value={body}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xl" htmlFor="category">
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="text-xl" htmlFor="image">
                Image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              ></input>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700" type="submit">
              Create
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default createThread;
