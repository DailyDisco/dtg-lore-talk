// don't let the user use this till they're logged in
import { api } from "~/utils/api";
import { useState, useEffect } from "react";

const createThread = () => {
    // const hello = api.example.hello.useQuery({ text: "from tRPC", title: "asdxi", "description": "asdas" });
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    
    const [image, setImage] = useState('')
    const [createObjectURL, setCreateObjectURL] = useState('');
    // const [userID, setUserID] = useState('')
    const [category, setCategory] = useState('')
    // const views = 0
    // const replies = 0

    function handleTitle({e}: any){
      console.log(title)
        setTitle(e.target.value)
    }
    function handleBody({e}: any){
      // e.preventDefault()
      setBody(e.target.value)
      console.log(body)
    }
    function handleImage({e}: any){
        if(e.target.files && e.target.files[0]){
            const i = e.target.files[0];

            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    }
    function handleCategory({e}: any){
        setCategory(e.target.value)
    }

    
    function handleSubmit(e){
      // e.preventDefault()
      console.log('handleSubmit')
      api.example.createThread.useMutation({title: title, body: body, category: category, image: image})
    }

    return (
        <>
        <main className="flex flex-col items-center justify-center">
            <h2 className="text-2xl">Post a Thread</h2>
            <section>
            <form className="spacebet flex flex-col border-2 border-slate-400">
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" onChange={(e) => handleTitle(e.currentTarget.value)} value={title}/>
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <textarea name="body" id="body" cols={30} rows={10} onChange={handleBody} value={body}/>
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <input type="text" name="category" id="category" onChange={handleCategory}value={category}></input>
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type="file" name="image" id="image" onChange={handleImage} value={image}></input>
                </div>
                <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700" type="submit">
                Post
                </button>
            </form>
            </section>
        </main>
        </>
    );
};

export default createThread;
