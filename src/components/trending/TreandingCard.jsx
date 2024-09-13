export const TreandingCard = ({ article }) => {
  const publishedDate = new Date(article.published_at);
  console.log("publishedDate", publishedDate);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div
          style={{
            backgroundImage: `url(${article.cover_image})`,
            width: "239px",
            height: "320px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "6px",
            paddingLeft: "200px",
          }}
        ></div>
      </div>
    </div>
  );
};
