
import React, { Suspense, useEffect } from "react";
import HomePage from "./HomePage";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/counterSlice";
import Head from "next/head";
import { Container } from "@mui/system";
import Navbar from "../components/Navbar/Navbar";


export default function Home() {
  
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.counter);

  useEffect(() => {
    const token = localStorage.getItem("identifier");
    if (token) {
      dispatch(fetchUsers());
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Virtue Poker</title>
        <meta
          name="description"
          content="We're building the most diverse selection of Web 3.0 poker games. Powered
          by a Global Network of Players. Play for free, and start earning today."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@id": "#issue",
                  "@type": "PublicationIssue",
                  issueNumber: "5",
                  datePublished: `2022`,
                  isPartOf: {
                    "@id": "#periodical",
                    "@type": ["PublicationVolume", "Periodical"],
                    name: `The Global Home of Web 3.0 Poker`,
                    issn: ["1544-4554", "0163-9374"],
                    volumeNumber: "50",
                    publisher: `poker`,
                  },
                },
                {
                  "@type": "ScholarlyArticle",
                  isPartOf: "#issue",
                  description:
                    "We're building the most diverse selection of Web 3.0 poker games. Powered by a Global Network of Players. Play for free, and start earning today",
                  sameAs: "https://doi.org/10.1080/01639374.2012.682254",
                  about: ["Works", "Catalog"],
                  pageEnd: "368",
                  pageStart: "360",
                  name: "The Global Home of Web 3.0 Poker",
                  author: `poker`,
                },
              ],
            }),
          }}
        />
      </Head>
    
     
      <HomePage />
     
    </div>
  );
}
