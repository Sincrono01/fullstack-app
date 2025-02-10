// app/components/PostList.js
'use client'; // This is required for client-side components

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('/api/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post._id} className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">{post.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}