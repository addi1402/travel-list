import LogoImage from "../images/logo.svg";

export default function Logo() {
  return (
    <header className="logo">
      <img src={LogoImage} alt="Logo" />
      <span className="logoText">Travel Packing Checklist</span>
    </header>
  );
}
