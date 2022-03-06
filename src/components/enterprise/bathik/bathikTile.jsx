import "./bathik.css";

const BathikTile = ({ bathik }) => {
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
