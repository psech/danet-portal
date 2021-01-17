import React from "react";
import "./Home.css";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="Home">
      <div className="lander">
        {!isAuthenticated ? (
          <h1>Please log in</h1>
        ) : (
          <h1>
            Welcome <FontAwesomeIcon icon={faSmile} />
          </h1>
        )}
      </div>
    </div>
  );
};

export default Home;
