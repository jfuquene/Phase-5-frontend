import react from 'react'

const Resources = () => {
    

    return(
        <div className="grid">
        <div className="box" style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
        <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
        <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg" alt="Sample" style={{ height: `180px` }}/>
        <div className="e-card-stacked">
            <div className="e-card-header">
                <div className="e-card-header-caption">
                    <div className="e-card-header-title">Philips Trimmer</div>
                </div>
            </div>
            <div className="e-card-content">
                Powered by the innovative DuraPower Technology which optimizes power consumption, Philips trimmers are designed to last longer
                than 4 ordinary trimmers.
            </div>
        </div>
    </div>
  </div>
  <div  className="box"style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
        <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
        <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg" alt="Sample" style={{ height: `180px` }}/>
        <div className="e-card-stacked">
            <div className="e-card-header">
                <div className="e-card-header-caption">
                    <div className="e-card-header-title">Philips Trimmer</div>
                </div>
            </div>
            <div className="e-card-content">
                Powered by the innovative DuraPower Technology which optimizes power consumption, Philips trimmers are designed to last longer
                than 4 ordinary trimmers.
            </div>
        </div>
    </div>
  </div>
  </div>)

}

export default Resources; 