import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
 
export default function Home() {
  return (
    <div className="mx-auto max-w-screen-lg p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">My Blog</h1>
      <PostForm />
      <PostList />
    </div>
  );
}
