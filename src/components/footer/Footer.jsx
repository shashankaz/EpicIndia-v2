"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const menuItems = [
  {
    header: "Explore India",
    links: [
      { href: "/destinations", label: "Destinations" },
      { href: "/attractions", label: "Attractions" },
      { href: "/culture-and-heritage", label: "Culture and Heritage" },
      { href: "/cuisine", label: "Cuisine" },
      { href: "/festivals", label: "Festivals" },
    ],
  },
  {
    header: "Plan Your Trip",
    links: [
      { href: "/guide", label: "Travel Guide" },
      { href: "/itineraries", label: "Itineraries" },
      { href: "/accommodations", label: "Accommodations" },
      { href: "/transportation", label: "Transportation" },
      { href: "/visa", label: "Visa Information" },
    ],
  },
  {
    header: "Resources",
    links: [
      { href: "/faqs", label: "FAQs" },
      { href: "/guide", label: "Travel Guides" },
      { href: "/terms", label: "Terms of Use" },
      { href: "/privacy", label: "Privacy Policy" },
      {
        href: "/sustainability-initiatives",
        label: "Sustainability Initiatives",
      },
    ],
  },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/",
    icon: <FaFacebook />,
    label: "Facebook",
  },
  { href: "https://twitter.com/", icon: <FaTwitter />, label: "Twitter" },
  {
    href: "https://www.instagram.com/",
    icon: <FaInstagram />,
    label: "Instagram",
  },
  { href: "https://www.youtube.com/", icon: <FaYoutube />, label: "YouTube" },
];

const Footer = () => {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.top} onClick={backToTop}>
        <IoIosArrowUp />
        Back to top
      </div>
      <div className={styles.middle}>
        {menuItems.map((menu, index) => (
          <div key={index} className={styles.content}>
            <ul>
              <li className={styles.header}>{menu.header}</li>
              {menu.links.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={styles.content}>
          <ul>
            <li className={styles.header}>Follow us</li>
            <div className={styles.social}>
              {socialLinks.map((social, idx) => (
                <li key={idx}>
                  <Link
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <Link href="/">
          <div className={styles.logo}>
            <h1>Visit</h1>
            <span>
              <Image
                src="/India.svg"
                width={40}
                height={40}
                alt="Flag of India"
              />
            </span>
            <h1>India</h1>
          </div>
        </Link>
        <p>Copyright © 2024 India</p>
      </div>
    </div>
  );
};

export default Footer;
