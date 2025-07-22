import "./ChooseUs.css";
import { Link } from "react-router-dom";

import Icon10 from "../../../assets/icons/Icon10.png";

function ChooseUs() {
  return (
    <div className="chooseUs">
      <div className="container-2">
        <div className="left">
          <h1>Why choose us</h1>
          <Link to="/Book-Now">
            <button>Start Today</button>
          </Link>
        </div>
        <div className="right">
          <p>
            Wondering what makes us different from other cleaning companies? As
            a comprehensive cleaning, maintenance and repair service company, we
            stand out in the following areas:
          </p>
          <div className="text">
            <ul>
              <li>
                <span>
                  <img src={Icon10} alt="icon" />
                </span>
                <p>
                  Professional and highly skilled team members who are committed
                  to high-quality work.
                </p>
              </li>
              <li>
                <span>
                  <img src={Icon10} alt="icon" />
                </span>
                <p>
                  One-stop shop and services for all your cleaning needs,
                  provided by our friendly and efficient team.
                </p>
              </li>
              <li>
                <span>
                  <img src={Icon10} alt="icon" />
                </span>
                <p>
                  Free consultations to our customers as a reliable, dedicated
                  and cost-effective company.
                </p>
              </li>
            </ul>
            <Link to="/Book-Now">
              <button>Start Today</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
