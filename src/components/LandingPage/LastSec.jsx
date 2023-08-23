function LastSec() {
  const handleButtonClick = () => {
    window.location.href = "/login";
  };
  return (
    <div className="last-sec">
      <span>
        Are you tired of clutter and ready to swap your gently used items for
        something new and exciting?
      </span>
      <button className="btn2" onClick={handleButtonClick}>
        REGISTER NOW
      </button>
    </div>
  );
}

export default LastSec;
