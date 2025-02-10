// app/api/posts/route.js
import { NextResponse } from 'next/server';
import PostModel from '../../../models/Post'; // Rename the import to avoid conflict
import db from '../../../lib/db';

export async function POST(request) {
  await db(); // Connect to MongoDB
  const { title, content } = await request.json();

  try {
    const newPost = new PostModel({ title, content }); // Use the renamed model
    await newPost.save();
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating post' }, { status: 500 });
  }
}

export async function GET() {
  await db();
  try {
    const posts = await PostModel.find(); // Use the renamed model
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching posts' }, { status: 500 });
  }
}