import "./bathik.css";
import { Link } from "react-router-dom";

const BathikTile = ({ bathik }) => {
  return (
    <>
      <div class="col-lg-4 mb-3">
        <div class="card">
          <img src={bathik.image} alt="" class="card-img-top"  width="300" height="200"/>
          <div class="card-body">

            <h5 class="card-title">{bathik.enterpriseName}</h5>
            <p class="card-text">{bathik.introduction}</p>


            <Link
              to={`/bathikDetails/${bathik.docId}`}
              class="btn btn-outline-success btn-lg me-2"
            >
              Read More
            </Link>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default BathikTile;
