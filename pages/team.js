import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Team.module.css";
const team = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.heading}>OUR TEAM</div>
      </div>
      <section className={styles.team}>
        <div className={styles.container}>
          <div className={styles.teamgrid}>
            {/* team item start */}
            <div className={styles.itemTeam}>
              <div className={styles.itemTeamImgBox}>
                <Image
                  src="/Aakash.jpg"
                  alt="Picture of the Developer"
                  width={300}
                  height={370}
                />
              </div>
              <div className={styles.itemTeamText}>
                <div className={styles.itemTeamNumber}>
                  <span data-text="0">0</span>
                  <span data-text="1">1</span>
                </div>
                <div className={styles.itemTeamLine}></div>
                <div className={styles.itemTeamName}>Aakash Garg</div>
              </div>
              <div className={styles.itemTeamHover}>
                <div className={styles.itemTeamDesignation}>
                  FrontEnd Developer
                </div>
                <div className={styles.itemTeamSocialLinks}>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* team item end */}
            {/* team item start */}
            <div className={styles.itemTeam}>
              <div className={styles.itemTeamImgBox}>
                <Image
                  src="/anant.jpg"
                  alt="Picture of the Developer"
                  width={300}
                  height={370}
                />
              </div>
              <div className={styles.itemTeamText}>
                <div className={styles.itemTeamNumber}>
                  <span data-text="0">0</span>
                  <span data-text="2">2</span>
                </div>
                <div className={styles.itemTeamLine}></div>
                <div className={styles.itemTeamName}>Anant Patel</div>
              </div>
              <div className={styles.itemTeamHover}>
                <div className={styles.itemTeamDesignation}>
                  Front-end Developer
                </div>
                <div className={styles.itemTeamSocialLinks}>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* team item end */}
            {/* team item start */}
            <div className={styles.itemTeam}>
              <div className={styles.itemTeamImgBox}>
                <Image
                  src="/ankit.jpg"
                  alt="Picture of the Developer"
                  width={300}
                  height={370}
                />
              </div>
              <div className={styles.itemTeamText}>
                <div className={styles.itemTeamNumber}>
                  <span data-text="0">0</span>
                  <span data-text="3">3</span>
                </div>
                <div className={styles.itemTeamLine}></div>
                <div className={styles.itemTeamName}>Ankit Tyagi</div>
              </div>
              <div className={styles.itemTeamHover}>
                <div className={styles.itemTeamDesignation}>
                  BackEnd Developer
                </div>
                <div className={styles.itemTeamSocialLinks}>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* team item end */}
            {/* team item start */}
            <div className={styles.itemTeam}>
              <div className={styles.itemTeamImgBox}>
                <Image
                  src="/photo.webp"
                  alt="Picture of the Developer"
                  width={300}
                  height={370}
                />
              </div>
              <div className={styles.itemTeamText}>
                <div className={styles.itemTeamNumber}>
                  <span data-text="0">0</span>
                  <span data-text="4">4</span>
                </div>
                <div className={styles.itemTeamLine}></div>
                <div className={styles.itemTeamName}>Divyansh Rah</div>
              </div>
              <div className={styles.itemTeamHover}>
                <div className={styles.itemTeamDesignation}> Developer</div>
                <div className={styles.itemTeamSocialLinks}>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* team item end */}
          </div>
        </div>
      </section>
    </>
  );
};

export default team;
