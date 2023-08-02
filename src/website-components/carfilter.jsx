import React from 'react';

export const Carfilter = () => {
  return (
    <carfilter id="carfilter">
   <section className="search-banner bg- text-white py-5" id="search-banner">
    <div className="container py-5 my-5">
    <div className="row text-center pb-4">
        <div className="col-md-12">
            <h2>Find the New & Used Car</h2>
        </div>
    </div>   
    <div className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                <div className="col-md-2">
                    <div className="form-group ">
                          <select id="inputState" className="form-control" >
                            <option selected>Select New/Used</option>
                            <option>New</option>
                            <option>Used</option>
                          </select>
                        </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group ">
                          <select id="inputState" className="form-control" >
                            <option selected>Select Make</option>
                            <option>BMW</option>
                            <option>Audi</option>
                            <option>Toyota</option>
                            <option>Tesla</option>
                          </select>
                        </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group ">
                          <select id="inputState" className="form-control" >
                            <option selected>Select Model</option>
                            <option>City</option>
                            <option>Jazz</option>
                            <option>Brio</option>
                            
                          </select>
                        </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group ">
                          <select id="inputState" className="form-control" >
                            <option selected> Select Location</option>
                            <option>Dubai</option>
                            <option>Sharjah</option>
                            <option>Test</option>
                            <option>Test</option>
                          </select>
                        </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group ">
                          <select id="inputState" className="form-control" >
                            <option selected> Select Budget</option>
                            <option>1 Lac-5 Lac</option>
                            <option>5 Lac-10 Lac</option>
                            <option>10 Lac-15 Lac</option>
                            <option>15 Lac-20 Lac</option>
                            <option>20 Lac-25 Lac</option>
                            <option>25 Lac & Above</option>
                          </select>
                        </div>
                </div>
                <div className="col-md-2">
                    <button type="button" className="btn btn-dark">Search Car</button>

                </div>
            </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
</section>
    </carfilter>
  );
};
