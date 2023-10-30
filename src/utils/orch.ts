export async function getNoteData(id: string) {
  const res = await fetch(`/api/note-data?id=${id}`);
  return res.json();
}

export async function getNoteMeta(tag: string = "") {
  const res = await fetch(`/api/note-meta?tag=${tag}`);
  return res.json();
}
