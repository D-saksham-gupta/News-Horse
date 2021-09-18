import React from 'react'
// import loading from './ajax-loader.gif'

const Spinner = () => {
    
        return (
            // <div className="text-center">
            //     <img src={loading} alt="loading" />
            // </div>
            <div className="text-center ">
            <div className="spinner-border my-50 " role="status" style={{color:'#7952b3'}}>
              <span className="visually-hidden my-50">Loading...</span>
            </div>
          </div>
        )
    
}

export default Spinner
