import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export const SinglePostPage = () => {
  const router = useRouter();

  const [article, setArticle] = useState({});

  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <h1>{article?.title}</h1>
      <Footer />
    </div>
  );
};
