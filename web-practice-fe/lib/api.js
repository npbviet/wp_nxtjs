//Ví dụ
export async function getPosts() {
  const baseUrl = process.env.NEXT_PUBLIC_WP_API_URL;
  console.log('Fetching from:', baseUrl);

  const res = await fetch(`${baseUrl}/posts`, { next: { revalidate: 60 } });

  if (!res.ok) {
    const text = await res.text();
    console.error('Fetch failed:', text);
    throw new Error(`Failed to fetch posts: ${res.status}`);
  }

  return res.json();
}

// export async function getPostById(id) {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/posts/${id}`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch post");
//   }
//   return res.json();
// }
//
