import React, { useEffect, useRef, useState } from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";
import SocialLinks from "./components/_SocialLinks";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const mainRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true)
  const [headerHeight, setHeaderHeight] = useState(1536);
  const [bannerHeight, setBannerHeight] = useState(256);

  useEffect(() => {
    const tempHeaderHeight = Math.max(384, window.innerHeight);
    setHeaderHeight(tempHeaderHeight);
    setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    setIsLoading(false);
    mainRef.current.hidden = false;
  }, []);

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>
        <div
          className={styles.heroBannerWrapper}
          style={{ minHeight: bannerHeight, display: isLoading ? "none" : "block" }}
        >
          <p>Bonjour, je suis</p>
          <h1 className="text-success">Ghassen Hamdi</h1>
          <p>
             <span className="text-warning">Enseignant</span> et{" "}
            <span className="text-danger">Docteur en Informatique.</span> 
          </p>
      <br></br>
          <p>
            <Link to={useBaseUrl("#main")}>
              <button className="border-0 rounded p-2 pl-4 pr-0 bg-primary-900 hover:bg-primary-800 transition text-white text-lg cursor-pointer">
              À propos de moi<span className="pl-1 animate-pulse">▎</span>
              </button>
            </Link>
          </p>
        </div>
      </header>
      <main id="main" ref={mainRef} hidden={true}>
      <div className={styles.aboutHeader}>
        <h2 className="border-0 border-b-4 border-solid border-success">À propos de moi </h2>
      </div>
       <div className={styles.about}>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/photo.jpg")}
            />
          </div>
          <div className={styles.aboutText}>
            <h2>Salut!</h2>
            <p>
              🇹🇳 Je suis Ghassen Hamdi, Docteur en informatique. Basé à Sousse, Tunisie.
            </p>
            <p>
            👨‍🎓 Titulaire d'un doctorat en informatique  de l'Institut supérieur d'informatique et des technologies de communication de Hamman Sousse, Tunisie  le 12 décembre 2020.
            </p>
            <p>
            🖥️ Membre du laboratoire de recherche MARS (Modeling of Automated Reasoning Systems).
            </p>
 
          </div>
        </div>
        <section className={styles.directory}>
          <div className="container">
            <h3>Poursuivre l'exploration?</h3>
            <nav className="pagination-nav">
              <div className="pagination-nav__item">
                <Link className="pagination-nav__link" href={useBaseUrl("pdf/pubs.pdf")}>
                  <div className="pagination-nav__sublabel">Consulter</div>
                  <div className="pagination-nav__label">Mes Publications</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <Link className="pagination-nav__link" to={useBaseUrl("docs/")}>
                  <div className="pagination-nav__sublabel">Consulter</div>
                  <div className="pagination-nav__label">My Cours</div>
                </Link>
              </div>
            </nav>
            <nav className="pt-4 pagination-nav">
              <div className="pagination-nav__item">
                <Link
                  className="pagination-nav__link"
                  href={useBaseUrl("pdf/rapportsc.pdf")}
                >
                  <div className="pagination-nav__sublabel">Consulter</div>
                  <div className="pagination-nav__label">Mon Rapport Scientifique</div>
                </Link>
              </div>
              <div className="pagination-nav__item">
                <Link
                  className="pagination-nav__link"
                  href={useBaseUrl("pdf/rapportpeda.pdf")}
                >
                  <div className="pagination-nav__sublabel">Consulter</div>
                  <div className="pagination-nav__label">Mon Rapport Pédagogique</div>
                </Link>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', width: '200%' }}>

                <a
                  className="pagination-nav__link"
                  href={useBaseUrl("pdf/resume.pdf")}
                >
                  <div className="pagination-nav__sublabel">Télécharger</div>
                  <div className="pagination-nav__label">Mon CV</div>
                </a>
              </div>
            </nav>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
