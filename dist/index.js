import React, {useEffect, useState, useRef} from "react";

// const endURL = "http://localhost:3001";
const endURL = "http://app.network-leads.com";

const ContractEditor = (props) => {
	var url = endURL+"/editor/edit?PK="+props?.publishKey+"&subAccountId="+props?.subAccountId+"&id="+props?.id;

	// todo: make it run
	// useEffect((e)=>{
	window.addEventListener("message", (event)=>{
		try{
			var data = JSON.parse(event.data);
			if(data?.type == "onSave" && props?.onSave){
				props?.onSave(data?.data);
			}
		}catch(e){

		}
	}, false);
	// },[]);

	return <iframe src={url} style={{width: "100%", height: "100%", border: "1"}} />
};
const ContractSign = (props) => {
	var url = endURL+"/editor/send?PK="+props?.publishKey+"&contractKey="+props?.contractKey;

	// todo: make it run
	// useEffect((e)=>{
	window.addEventListener("message", (event)=>{
		try{
			var data = JSON.parse(event.data);
			if(data?.type == "onSubmit" && props?.onSubmit){
				props?.onSubmit(data?.data);
			}
		}catch(e){

		}
	}, false);
	// },[]);

	return <iframe src={url} style={{width: "100%", height: "100%", border: "1"}} />
};

export {ContractEditor,ContractSender};