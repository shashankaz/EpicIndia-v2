import React from "react";
import styles from "./blog.module.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Card from "@/components/card/Card";

const blogArticles = [
  {
    title: "Top 10 Must-Visit Destinations in India",
    description:
      "Explore India's diverse attractions from the Taj Mahal to Goa's beaches",
    image: "/article-1.jpg",
    slug: "/blogs/top-10-must-visit-destinations-in-india",
  },
  {
    title: "Cuisine Delights: A Culinary Journey Through India",
    description:
      "Discover the rich flavors of Indian cuisine, from street food to regional specialties.",
    image: "/article-2.jpg",
    slug: "/blogs/cuisine-delights-a-culinary-journey-through-india",
  },
  {
    title: "Adventure Travel: Thrills and Excitement in Leh-Ladakh",
    description:
      "Experience trekking, rafting, and cultural immersion in the rugged landscapes of Ladakh.",
    image: "/article-3.jpg",
    slug: "/blogs/adventure-travel-thrills-and-excitement-in-leh-ladakh",
  },
];

const Blog = () => {
  return (
    <div className={styles.container}>
      <h1>Stories from India</h1>
      <p>Dive into India with feature articles, guides, and much more!</p>
      <div className={styles.wrapper}>
        {blogArticles.map((article, index) => (
          <div key={index} className={styles.card}>
            <Card
              title={article.title}
              description={article.description}
              image={article.image}
              slug={article.slug}
            />
          </div>
        ))}
      </div>
      <div className={styles.btn}>
        <Link href={"/blogs"}>
          <button>
            Show all Blogs
            <div className={styles.arrow}>
              <FaArrowRight />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
