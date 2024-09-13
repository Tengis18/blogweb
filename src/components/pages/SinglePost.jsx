import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export const SinglePostPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const [article, setArticle] = useState({});

  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  console.log(id);
  return (
    <div className="flex flex-col items-center w-full">
      <div>
        <p className="text-3xl font-semibold text-ellipsis  pt-20 w-[800px] h-[80px]">
          {article?.description}
        </p>
        <div className="pt-20">
          <img
            src={article?.cover_image}
            className="l w-[800px]  h-[462px] pt-10 "
          />
        </div>
        <p className="w-[800px] h-[320px] pt-10 text-[20px]">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels. One of the most rewarding aspects of
          traveling is immersing yourself in the local culture and customs. This
          includes trying local cuisine, attending cultural events and
          festivals, and interacting with locals. Learning a few phrases in the
          local language can also go a long way in making connections and
          showing respect.
        </p>
        <div className="w-[800px] h-[300px] ">
          <h1 className="text-[32px] font-bold">Research Your Destination</h1>
          <p className="text-[20px] pt-1">
            Before embarking on your journey, take the time to research your
            destination. This includes understanding the local culture, customs,
            and laws, as well as identifying top attractions, restaurants, and
            accommodations. Doing so will help you navigate your destination
            with confidence and avoid any cultural faux pas. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. In hendrerit gravida
            rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae
            aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis
            eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
          </p>
        </div>
        <div className="w-[800px] h-[360px] ">
          <h1 className="text-[32px] font-bold">Research Your Destination</h1>
          <p className="text-[20px] pt-1">
            Before embarking on your journey, take the time to research your
            destination. This includes understanding the local culture, customs,
            and laws, as well as identifying top attractions, restaurants, and
            accommodations. Doing so will help you navigate your destination
            with confidence and avoid any cultural faux pas. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. In hendrerit gravida
            rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae
            aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis
            eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
          </p>
        </div>
      </div>
    </div>
  );
};
