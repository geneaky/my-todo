<<<<<<< HEAD
=======
import React from 'react';
import TodoBody from './todoBody';
>>>>>>> 655929eb87aff0fe55f749a9293eb880b650439b
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

   let autoId = useRef(3);

   const onPost = ()=>{
     const autoPost = {
       id:autoId.current,
       text: "auto auto",
       img:null,
     }

     setInterval(()=>{
       autoId +=1;
       if(autoId ===100){
         clearInterval();
       }
       else{
         setPost(post.concat(autoPost));
       }
      },1000)

    }


  return (
    <div className="App">
<<<<<<< HEAD
      <Header/>
      <PostTemplate onPost={onPost}>
        <PostList post={post}/>
      </PostTemplate>

=======
      <TodoBody />
>>>>>>> 655929eb87aff0fe55f749a9293eb880b650439b
    </div>
  );
}

export default App;
