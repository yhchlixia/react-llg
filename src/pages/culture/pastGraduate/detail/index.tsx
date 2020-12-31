import React from "react";

const CultureDetail = (props: any) => {
  const {id} = props.match.params;
  return (
    <div className="culture-detail">
      {id}
    </div>
  )
}

export default CultureDetail;