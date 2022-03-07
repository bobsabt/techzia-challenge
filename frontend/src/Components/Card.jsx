import React from "react";

const Card = ({ title, albumid, userid }) => {
  const [showdetails, setShowdetails] = React.useState(false);

  const toggleDetails = () => {
    setShowdetails(!showdetails);
  };

  return (
    <>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{title}</p>
          <button className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i
                className="fas fa-angle-down"
                aria-hidden="true"
                onClick={toggleDetails}
              ></i>
            </span>
          </button>
        </header>
        {showdetails && (
          <div className="card-content">
            <div className="content">
              <p>id: {albumid}</p>
              <p>userId: {userid}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
