import { List, ListItem } from "@mui/material";
import { getAllPostIds } from "../../../lib/posts";
import Link from "next/link";

const Page = () => {
  const x = getAllPostIds();

  return (
    <List>
      {x.map((id, index) => (
        <ListItem key={index}>
          <Link href={`pages/${id}`}>- {id}</Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Page;
