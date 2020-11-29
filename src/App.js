import './App.css';
import React,{useState,useRef} from 'react';
import Header from './Header';
import PostTemplate from './PostTemplate';
import PostList from './PostList';


function App() {
   const [post,setPost] = useState([
     {
       id:1,
       text: "user1 text",
       img:null,
     },
     {
       id:2,
       text:"user2 text",
       img: 'src',
     }
   ]);

   const autoId = useRef(3);

   const onPost = ()=>{
     const autoPost = {
       id:autoId.current,
       text: "auto auto",
       img:null,
     }
     setPost(post.concat(autoPost));
     autoId.current +=1;
    }


  return (
    <div className="App">
      <Header/>
      <PostTemplate>
        <PostList post={post} onPost={onPost}/>
      </PostTemplate>

    </div>
  );
}

export default App;
