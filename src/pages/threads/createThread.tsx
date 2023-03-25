// don't let the user use this till they're logged in
import { api } from "~/utils/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

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
  const [userID, setUserID] = useState(null as any);
  const [category, setCategory] = useState("");
  console.log(category, "category");

  const { data: session, status } = useSession();
  console.log(session, "session");

  const mutation = api.example.createThread.useMutation();

  // constantly check if the user is logged in and set the userID to the user's name
  useEffect(() => {
    if (session) {
      setUserID(session.user.name);
    }
  }, [session]);

  function handleSubmit() {
    // e.preventDefault()

    const data = {
      title: title,
      body: body,
      // image: image,
      // username: session?.user.name,
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
      <div className="mx-auto my-5 flex flex-col rounded-2xl border-8 border-slate-700 bg-slate-500 p-4 text-white shadow-lg shadow-black md:w-2/4">
        <h2 className="m-7 text-4xl">Create a Thread</h2>
        <section className="rounded-lg border-4 border-sky-700 bg-slate-400">
          <form
            onSubmit={() => handleSubmit()}
            className="spacebet flex flex-col border-2 border-slate-400"
          >
            <div className="flex  flex-col text-black">
              <label className="mx-2 text-2xl" htmlFor="title">
                Title
              </label>
              <input
                className="mx-2 border-2 border-slate-400 "
                type="text"
                name="title"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="flex flex-col text-black">
              <label className="mx-2 text-2xl " htmlFor="body">
                Body
              </label>
              <textarea
                className="mx-2 border-2 border-slate-400"
                name="body"
                id="body"
                cols={30}
                rows={10}
                onChange={(e) => setBody(e.target.value)}
                value={body}
              />
            </div>
            <div className="mx-2 mb-3 mt-3 flex flex-col text-black">
              <label className="mx-2 text-2xl" htmlFor="category">
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  className=""
                  name="category"
                  id="category"
                >
                  <option value="Lore-Discussion">Lore Discussion</option>
                  <option value="Off-Topic">Off-Topic</option>
                  <option value="Looking-for-Group">Looking for Group</option>
                </select>
              </label>
            </div>
            {/* <div className="flex flex-col text-black">
              <label className="mx-2 text-2xl" htmlFor="category">
                Category
              </label>
              <input
                className="mx-2 border-2 border-slate-400"
                type="text"
                name="category"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              ></input>
            </div> */}
            <div className="flex flex-col text-black">
              <label className="mx-2 text-2xl" htmlFor="image">
                Image
              </label>
              <input
                className="mx-2 border-2 border-slate-400"
                type="file"
                name="image"
                id="image"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              ></input>
            </div>
            <button
              className="my-3 mx-auto h-8 w-16 rounded-lg bg-blue-500 hover:bg-blue-700"
              type="submit"
            >
              Create
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default createThread;
