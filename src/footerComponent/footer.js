import poweredBy from "../resources/images/footer/powered-by.svg";
import gmail from "../resources/images/footer/gmail.svg";
import discord from "../resources/images/footer/discord.svg";
import linkedin from "../resources/images/footer/lnkedin.svg";
import twitter from "../resources/images/footer/twitter.svg";
import github from "../resources/images/footer/github.svg";
const Footer = () => {
  return (
    <div>
      <div
        className="footer-white"
        style={{
          backgroundColor: "gray",
          display: "flex",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridGap: "0px",
        }}
      >
        <div style={{ gridColumn: "span 3" }}></div>
        <div style={{ gridColumn: "span 3" }}></div>
        <div style={{ gridColumn: "span 3" }}>
          <div style={{marginTop:"10px"}}>
            <div style={{ fontFamily: "Poppins", letterSpacing: "1px" }}>
              {/* <a href="https://docs.shyft.to/" target="_blank" rel="noreferrer">
                <img src={poweredBy} alt="Powered By SHYFT" />
              </a> */}
              <h6>Designed by group 8 UDPM</h6>
            </div>
          </div>
        </div>
        <div style={{ gridColumn: "span 3" }}>
          <div className="d-flex justify-content-center my-3 white-footer-icons" style={{marginTop:"10px"}}>
            <div className="">
              <a href="">
                <img src={gmail} alt="Mail Us" />
              </a>
            </div>
            <div className="">
              <a
                href="https://twitter.com/SuperteamVN"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="Tweet" />
              </a>
            </div>
            <div className="">
              <a
                href="https://discord.com/channels/1030133683220402348/1030138517185110077"
                target="_blank"
                rel="noreferrer"
              >
                <img src={discord} alt="Join Server" />
              </a>
            </div>
            <div className="">
              <a
                href="https://github.com/thiennvtph26140/UDPM_8_UngDungMuaBanNFT"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="Clone Our Code" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
