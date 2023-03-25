// don't let the user use this till they're logged in
import { api } from "~/utils/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const categories = [
  { name: "Lore-Discussion" },
  { name: "Off-Topic" },
  { name: "Looking-for-Group" },
];

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
  const [selected, setSelected] = useState(categories[0]);
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
    if (selected != null) {
      setCategory(selected.name);
    }
  }, [session, selected]);

  function handleSubmit() {
    // e.preventDefault()

    if (!title || !body || !category) {
      alert("Please add a title, body, and category");
      return;
    }
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
  console.log(selected, "selected");
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
              <label className="text-2xl" htmlFor="category">
                Category
              </label>
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{selected?.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {categories.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-amber-100 text-amber-900"
                                : "text-gray-900"
                            }`
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            {/* <div className="mx-2 mb-3 mt-3 flex flex-col text-black">
              <label className="mx-2 text-2xl" htmlFor="category">
                <select
                  required
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
