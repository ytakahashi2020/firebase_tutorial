import { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase";
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    console.log("postData", postData);
    getDocs(postData).then((snapshot) => {
      console.log("snapshot", snapshot);
      // console.log(
      //   "snapshot.docs",
      //   snapshot.docs.map((doc) => ({ ...doc.data() }))
      // );
      setPost(snapshot.docs.map((doc) => ({ ...doc.data() })));
    });

    onSnapshot(postData, (post) => {
      setPost(post.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);
  return (
    <div className="App">
      <div>
        {post.map((post) => (
          <div key={post.title}>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
            {/* <p>{post.timestamp}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
