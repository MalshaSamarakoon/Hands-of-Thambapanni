import "./bathik.css";
import { Link } from "react-router-dom";

const BathikTile = ({ bathik, docId }) => {
  return (
    <>
      <div class="col-lg-4 mb-3">
        <div class="card">
          <img src="/img/bl7.jpg" alt="" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{bathik.enterpriseName}</h5>
            <p class="card-text">{bathik.since}</p>
            <p class="card-text">{bathik.description}</p>
            <a href="" class="btn btn-outline-success btn-lg me-2 ">
              More Details
            </a>

            <label>Owner</label>
            <p class="card-text">{bathik.ownerName}</p>
            <label>Address</label>
            <p class="card-text">{bathik.address}</p>
            <label>Owner</label>
            <p class="card-text">{bathik.ownerName}</p>
            <label>Telephone</label>
            <p class="card-text">{bathik.phone}</p>

            <h5 class="card-title">Sunset</h5>
            <p class="card-text">{bathik.description}</p>
            <Link
              to={`/bathikDetails/${docId}`}
              class="btn btn-outline-success btn-lg me-2"
            >
              Read More
            </Link>
            <a href="" class="btn btn-outline-danger btn-lg me-2 ">
              <i class="fa fa-heart-o "></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BathikTile;
