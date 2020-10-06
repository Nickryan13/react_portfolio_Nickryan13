import React from 'react';
import 'C:/Users/19496/ravenous/src/components/business/BusinessList.css';
import Business from 'C:/Users/19496/ravenous/src/components/business/business.js';

class BusinessList extends React.Component{
  render(){
    return(
      <div className="BusinessList">
      {
        this.props.businesses.map(business => {
          return <Business business={business} key = {business.id} />
        })
      }
</div>
    )
  }
}
export default BusinessList;
