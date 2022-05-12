import * as React from 'react';

const Contracts = (props) => {
    // let endURL = "http://localhost:3001";
    let endURL = "http://app.network-leads.com";
    var url = endURL+"/editor/"+props?.publishKey;
    return <iframe src={url} style={{width: "100%", height: "100%", border: "1"}} />
};

export default Contracts;