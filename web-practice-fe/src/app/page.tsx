import { getPosts } from '../../lib/api';

export default async function HomePage() {
  const posts = await getPosts();
  interface WPPost {
    id: number;
    title: { rendered: string };
    excerpt?: { rendered: string };
    content?: { rendered: string };
  }

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Bài viết từ WordPress</h1>
      <ul>
        {posts.map((post: WPPost) => (
          <li key={post.id} className="mb-4">
            <h2
              className="text-xl font-semibold"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered || '' }}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
