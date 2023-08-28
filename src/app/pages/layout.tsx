import Header from "../components/Header";
import { ReactElement } from "react";

const PostLayout = ({ children }: { children: ReactElement }) => (
  <>
    <Header />
    {children}
  </>
);

export default PostLayout;
