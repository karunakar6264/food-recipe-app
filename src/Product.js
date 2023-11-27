import React from 'react'

const Product = ({data}) => {
  return (
       <div>
        <div className="row">
            {data.map(data => 
                <div className="col-md-4">
                    <div className="card" style={{"width": "20rem"}}>
                        <img src={data.recipe.image} alt="Card image top" className="card-img-top" />
                        <div className="card-body">
                            <center>
                            <h4 className="card-title">{data.recipe.label}</h4>
                            <p className="card-text">Course Type: {data.recipe.dishType}</p>
                            <p className="card-text">Total Amount Of Calories: {data.recipe.calories}</p>
                            <a href="#" className="btn btn-primary">Buy</a>
                            </center>
                        </div>
                    </div>
                </div>
                )}
        </div>
       </div>
    
  )
}

export default Product
