export async function getPostIDs(tag?: string) {
  const params = tag ? `?tag=${tag}` : "";
  const res = await fetch(`http://localhost:3000/api/post-ids${params}`);
  return res.json();
}

export async function getPostData(id: string) {
  const res = await fetch(`http://localhost:3000/api/post-data?id=${id}`);
  return res.json();
}
