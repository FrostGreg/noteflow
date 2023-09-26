export async function getNoteIDs(tag?: string) {
  const params = tag ? `?tag=${tag}` : "";
  const res = await fetch(`http://localhost:3000/api/note-ids${params}`);
  return res.json();
}

export async function getNoteData(id: string) {
  const res = await fetch(`http://localhost:3000/api/note-data?id=${id}`);
  return res.json();
}
