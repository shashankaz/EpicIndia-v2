"use client";

import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import styles from "../style.module.css";

const page = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <Image
            className={styles.image}
            src="/travel-1.jpg"
            width={1000}
            height={1000}
            alt="Picture of the Taj Mahal in Agra, India"
            style={{ objectFit: "contain" }}
            quality={100}
          />
        </div>
        <div className={styles.body}>
          <h1 className={styles.title}>
            Exploring the Timeless Beauty of the Taj Mahal: A Journey to
            Agra&apos;s Iconic Destination
          </h1>

          <Fade cascade damping={0.01} triggerOnce>
            <p>
              The Taj Mahal stands as an epitome of timeless beauty and
              architectural brilliance, nestled in the heart of Agra, India.
              This magnificent monument, renowned as one of the Seven Wonders of
              the World, beckons travelers from across the globe to witness its
              grandeur and unravel the tales of love and craftsmanship woven
              into its very fabric.
            </p>

            <h1>A Glimpse into History</h1>

            <p>
              Commissioned by the Mughal Emperor Shah Jahan in memory of his
              beloved wife Mumtaz Mahal, the Taj Mahal is a testament to eternal
              love and devotion. Its construction spanned over two decades,
              beginning in 1632 and culminating in 1653, employing thousands of
              artisans, craftsmen, and laborers. The result is a mausoleum that
              transcends time, captivating visitors with its symmetrical beauty
              and intricate details.
            </p>

            <h1>Architectural Marvels</h1>

            <p>
              The Taj Mahal&apos;s architectural brilliance is evident in its
              meticulous design and exquisite craftsmanship. Built primarily
              using white marble sourced from Rajasthan and embellished with
              precious gemstones and intricate carvings, every aspect of the Taj
              reflects the pinnacle of Mughal artistry.
            </p>

            <p>
              The main structure, crowned by its iconic dome, is flanked by four
              minarets that lean slightly outward to protect the monument from
              potential earthquakes. The symmetry of the Taj Mahal is
              awe-inspiring, with its reflection mirrored in the tranquil waters
              of the adjacent Yamuna River, creating a breathtaking sight that
              is especially mesmerizing during sunrise and sunset.
            </p>

            <h1>Symbolism and Significance</h1>

            <p>
              Beyond its architectural grandeur, the Taj Mahal holds deep
              symbolic significance. It is not merely a mausoleum but a symbol
              of undying love and devotion. The intricate inlay work and
              calligraphy on its walls depict verses from the Quran and floral
              motifs, symbolizing the beauty of paradise.
            </p>

            <p>
              Moreover, the Taj Mahal&apos;s location along the Yamuna River
              adds to its allure, creating a serene and picturesque ambiance
              that enhances the visitor&apos;s experience. Each aspect of its
              design and placement reflects the Mughal belief in symmetry,
              balance, and the harmony of nature.
            </p>

            <h1>Visitor Experience</h1>

            <p>
              Visiting the Taj Mahal is a transformative experience that leaves
              an indelible mark on all who witness its beauty. The entry through
              the grand gate, known as the Darwaza-i-Rauza, leads to the
              expansive gardens known as the Charbagh, which symbolize the four
              rivers of paradise in Islamic tradition.
            </p>

            <p>
              As visitors approach the main mausoleum, they are greeted by the
              mesmerizing sight of the Taj Mahal in all its glory. Inside, the
              central chamber houses the cenotaphs of Shah Jahan and Mumtaz
              Mahal, adorned with intricate marble work and semi-precious
              stones, showcasing the pinnacle of Mughal craftsmanship.
            </p>

            <h1>Preservation Efforts and Challenges</h1>

            <p>
              While the Taj Mahal remains a symbol of enduring beauty, it faces
              challenges related to pollution, environmental degradation, and
              the impact of tourism. Efforts are underway to preserve this
              architectural marvel, including measures to control air pollution,
              limit visitor numbers, and ensure sustainable tourism practices.
            </p>

            <h1>Beyond the Taj: Exploring Agra</h1>

            <p>
              A visit to Agra is incomplete without exploring its other
              historical and cultural treasures. The Agra Fort, a UNESCO World
              Heritage Site, offers insights into Mughal history and
              architecture, with its imposing walls, royal palaces, and
              panoramic views of the Taj Mahal.
            </p>

            <p>
              Additionally, the vibrant markets of Agra showcase the city&apos;s
              rich heritage in arts and crafts, including exquisite marble work,
              handcrafted textiles, and traditional cuisine that tantalizes the
              senses.
            </p>

            <h1>Conclusion: A Timeless Journey</h1>

            <p>
              In conclusion, the Taj Mahal stands as a timeless testament to
              love, craftsmanship, and architectural splendor. Its allure
              transcends borders and generations, inviting travelers to embark
              on a journey of discovery and wonder. A visit to this iconic
              destination not only unveils the secrets of the past but also
              inspires a deeper appreciation for the enduring beauty of human
              creativity.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default page;
