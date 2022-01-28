import React, { useState } from 'react';
import './PostBlog.css';

const PostBlog = () => {
  
  
    const [placeData,setPlaceData]=useState('');
    // const history = useHistory();
  
    // const handleOnsubmit = (e) => {
      
    //   e.preventDefault();
    // };
  
    const handleOnChange = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      console.log(field);
      console.log(value);
  
      const newPlaceData = { ...placeData };
  
      newPlaceData[field] = value;
  
      console.log(newPlaceData);
      setPlaceData(newPlaceData);
    }

    return (
        <>
         <div className="blog-page">
            <div className="container">
                <form className="w-50 mx-auto mt-5">
                   
                    <div className="mb-3">
                
                        
                        <div>
                            <label htmlFor="exampleInputName" className="form-label">Location</label>
                            <input
                            name='location'
                            onBlur={handleOnChange}
                             type="text" className="form-control" id="exampleInputName" />
                        </div>
                        <div>
                            <label htmlFor="exampleInputName" className="form-label">Date</label>
                            <input
                              name='Date'
                              onBlur={handleOnChange}
                             type="text" className="form-control" id="exampleInputName" />
                        </div>
                        <div>
                            <label htmlFor="exampleInputName" className="form-label">Time</label>
                            <input
                              name='Time'
                              onBlur={handleOnChange}
                             type="text" className="form-control" id="exampleInputName" />
                        </div>
                        <div>
                            <label htmlFor="exampleInputName" className="form-label">Expense</label>
                            <input 
                            name='expense'
                            onBlur={handleOnChange}
                            type="text" className="form-control" id="exampleInputName" />
                        </div>
                        <div>
                            <label htmlFor="exampleInputName" className="form-label">Rating</label>
                            <input 
                              name='Rating'
                              onBlur={handleOnChange}
                            type="text" className="form-control" id="exampleInputName" />
                        </div>


                    </div>
                   

                    {/* <span className="text-danger">{error}</span> */}

                

                    <button type='submit' className="btn btn-primary me-3">submit</button>
                   

                </form>

               
            </div>
        </div>
        </>
    );
};

export default PostBlog;