import React from 'react'

const Donate = () => {
    var link="https://co.clickandpledge.com/advanced/default.aspx?wid=54509"
return(

    <div>
        <div className="grid">
        <div className="box" style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
        <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
        <img src="https://149439182.v2.pressablecdn.com/wp-content/uploads/2017/04/Petfinder20thAnniv-683x1024.jpg" alt="Sample" style={{ height: `380px` }}/>
        <div className="e-card-stacked">
            <div className="e-card-header">
                <div className="e-card-header-caption">
                    <div className="e-card-header-title">Please Donate!</div>
                </div>
            </div>
            <div className="e-card-content">
                Please consider donating to agencies like PetFinder that donate their funds to shelters and other animal related organizations across the Country.
                <a href={link} target="/blank"> Click here</a>
                to be redirected to a page to donate to to the PetFinder Foundation
            </div>
        </div>
    </div>
  </div>
  </div>
  </div>
       
) 

}

export default Donate; 