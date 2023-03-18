// don't let the user use this till they're logged in
const postThread = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <h2 className="text-2xl">Post a Thread</h2>
        <section>
          <form className="spacebet flex flex-col border-2 border-slate-400">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
            <label htmlFor="body">Body</label>
            <textarea name="body" id="body" cols={30} rows={10} />
            <button className="bg-blue-500 hover:bg-blue-700" type="submit">
              Post
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default postThread;
