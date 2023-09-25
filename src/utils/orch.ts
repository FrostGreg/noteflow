export async function getPostIDs() {
  const res = await fetch("http://localhost:3000/api/post-ids");
  return res.json();
}

export async function getPostData(id: string) {
  const res = await fetch(`http://localhost:3000/api/post-data?id=${id}`);
  return res.json();
}
