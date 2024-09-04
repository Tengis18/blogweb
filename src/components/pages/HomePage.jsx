
import { Header } from "../header/Header";
import { BlogPostCard } from "../blog-post/BlogPost";
import { TrendingCard } from "../trending/Trending";
import { Carucel } from "../carousel/Carusel.jsx";
import { Footer } from "../footer/Footer";

export default function HomePage () {
  return (
  <div >
  <Header/>
      <BlogPostCard/>
      <TrendingCard/>
      <Carucel/>
      <Footer/>
  </div>)}