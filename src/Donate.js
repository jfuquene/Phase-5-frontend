import React from 'react'

const Donate = () => {
    var link="https://co.clickandpledge.com/advanced/default.aspx?wid=54509"
return(

    <div>
        this is my page where people will be redirected to a donation page on petfinder.
        <a href={link} target="/blank"> Click here</a>
        to be redirected to a page to donate to to the PetFinder Foundation
    </div>
) 

}

export default Donate; 