import React from "react";
import FooterStyle from "./FooterStyle.module.scss";
import Link from "./Partials/Link";
import Logo from "/image/logo/astroLogo.png";

const Footer = () => {
  return (
    <div className={FooterStyle.footer}>
      <div className={FooterStyle.logo}>
        <img src={Logo} alt="Logo" />
        <p>AstroWb</p>
      </div>
      <div className={FooterStyle.contentContainer}>
        <div className={FooterStyle.content}>
          <p className={FooterStyle.footerTitle}>
            <b>SMK</b> Yadika Soreang
          </p>
          <a
            style={{
              color: "white",
              textDecoration: "none",
            }}
            href="https://www.google.com/maps/place/SMA+Yadika+Soreang/@-7.0239388,107.534957,17z/data=!3m1!4b1!4m6!3m5!1s0x2e68ed28408eab67:0xc39aa21e7016ed40!8m2!3d-7.0239388!4d107.5371457!16s%2Fg%2F11h7rmrsg3"
          >
            <p className={FooterStyle.location}>
              Jl. Raya Soreang, Cingcin, Kec. Soreang, Kabupaten Bandung, Jawa
              Barat 40921
            </p>
          </a>
        </div>
        <Link
          title={"Contact"}
          link={
            <>
              <p>0895632035020</p>
              <p style={{ position: "relative", top: "-10px" }}>
                smkyadikasoreang@gmail.com
              </p>
            </>
          }
        />
        <Link
          title={"Media Social"}
          link={
            <>
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                href="https://www.instagram.com/smkyadikasoreangofficial/"
              >
                <p style={{ position: "relative", top: "-10px" }}>Instagram</p>
              </a>
            </>
          }
        />
        <Link
          title={"Helper"}
          link={
            <>
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                href="#planets"
              >
                <p>Planets</p>
              </a>
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                href="#astronaut"
              >
                <p style={{ position: "relative", top: "-10px" }}>Astronaut</p>
              </a>
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                href="#iss"
              >
                <p style={{ position: "relative", top: "-20px" }}>
                  ISS Tracker
                </p>
              </a>
            </>
          }
        />
      </div>
      <div className={FooterStyle.copyright}>
        <hr />
        <p style={{ padding: "20px 0px" }}>Website By SMK Yadika Soreang</p>
      </div>
    </div>
  );
};

export default Footer;
