import "./Button.css";

const LiquidButton = ({ name, url, downloadLink }) => {

  return (
    <a href={url} className="button-56" download={downloadLink}>{name}</a>
  )
}

export default LiquidButton;
