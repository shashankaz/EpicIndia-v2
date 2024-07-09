"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";
import { Fade } from "react-awesome-reveal";

const blogs = [
  {
    title: "Top 10 Must-Visit Destinations in India",
    description:
      "Explore India's diverse attractions from the Taj Mahal to Goa's beaches",
    link: "/blogs/top-10-must-visit-destinations-in-india",
    author: "Author",
    date: "09/04/2024",
  },
  {
    title: "Cuisine Delights: A Culinary Journey Through India",
    description:
      "Discover the rich flavors of Indian cuisine, from street food to regional specialties.",
    link: "/blogs/cuisine-delights-a-culinary-journey-through-india",
    author: "Author",
    date: "09/04/2024",
  },
  {
    title: "Adventure Travel: Thrills and Excitement in Leh-Ladakh",
    description:
      "Experience trekking, rafting, and cultural immersion in the rugged landscapes of Ladakh.",
    link: "/blogs/adventure-travel-thrills-and-excitement-in-leh-ladakh",
    author: "Author",
    date: "09/04/2024",
  },
];

const page = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <Image
            className={styles.image}
            src="/blog.jpg"
            width={1000}
            height={1000}
            alt="Blog Header Image"
            style={{ objectFit: "contain" }}
            quality={100}
          />
        </div>
        <div className={styles.body}>
          <h1 className={styles.title}>Explore Our Blogs</h1>

          <Fade cascade damping={0.01} triggerOnce>
            {blogs.map((blog, index) => (
              <div key={index} className={styles.blog}>
                <Link href={blog.link}>
                  <h2 className={styles.link}>{blog.title}</h2>
                </Link>

                <h4>
                  {blog.author} - {blog.date}
                </h4>

                <p>{blog.description}</p>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default page;
