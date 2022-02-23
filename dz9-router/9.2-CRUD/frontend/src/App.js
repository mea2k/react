import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';

import './main.css';

const serverURL = 'http://localhost:7777/posts'

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/">
                        <Route index element={<PostList url={serverURL} />} />
                        <Route path="/posts/new" element={<PostForm url={serverURL} />} />
                        <Route path="/posts/:id/edit" element={<PostForm url={serverURL} />} />
                        <Route path="/posts/:id" element={<PostItem url= {serverURL} />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}





export default App;
