import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";
const Blogs = () => {
  const [pageCount, setPageCount] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);
  const [blogs, setBlogs] = useState([]);
  // console.log(selectedPage);

  const [itemSize,setItemSize]=useState(10);

  // let size = 10;
  useEffect(() => {
    fetch(`http://localhost:5000?page=${selectedPage}&&size=${itemSize}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs);
        const count = data.count;
        let pageNumber = Math.ceil(count / 10);
        setPageCount(pageNumber);
      });
  }, [selectedPage,itemSize]);

  const handleChange = (e) => {
    console.log(e.target.value);

    setItemSize(e.target.value);
  };

  return (
    <>
      <div className="container my-5 pt-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {blogs.map((place) => (
            <div class="col">
              <div class="card h-100">
                <img
                  src={place.picture}
                  class="card-img-top"
                  height={200}
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{place.location}</h5>
                  <p class="card-text">Rating: {place.rating}</p>
                  <p class="card-text">Expense: {place.expense} TK</p>
                  <p class="card-text">Rating: {place.rating}</p>
                </div>
                <div class="card-footer bg-light">
                  <Link to={`/bookingDetails/${place._id}`}>
                    {" "}
                    <button className="btn btn-danger">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* pagination  */}

        <div className="my-5">
          <div className="row">
            <div className="col-md-8">
              <nav aria-label="Page navigation example ms-auto">
                <ul class="pagination justify-content-center">
                  <span className="me-3 fw-bold">Page: </span>
                  {[...Array(pageCount).keys()].map((number) => (
                    <span>
                      <button
                        className={`stylePage ${
                          number == selectedPage ? "selectedPage" : ""
                        }`}
                        onClick={() => setSelectedPage(number)}
                      >
                        {number}
                      </button>
                    </span>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="col-md-4">
              {/* page per view */}
              <span className="me-3 fw-bold"> Item Per View:</span>
              <select
                class="form-select form-select-sm d-inline w-25"
                aria-label=".form-select-sm example"
                onChange={handleChange}
              >
                <option selected>10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
