import {Route, Routes} from 'react-router-dom';
import PostLists from './pages/PostList';
import Post from './pages/Post';
import EditPost from './pages/EditPost';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Blog Website</h1>
        <Routes>
          <Route path="/" element={<PostLists />}/>
          <Route path="/post/:id" element={<Post />}/>
          <Route path="/post/:id/edit" element={<EditPost />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
