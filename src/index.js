import React, {useEffect, useState, useRef} from "react";

// const endURL = "http://localhost:3001";
const endURL = "https://www.contracter.io";


const ContractEditor = (props) => {
    var url = endURL+"/editor/edit?PK="+props?.publishKey+"&subAccountSID="+props?.subAccountSID+"&id="+props?.id+"&color="+props?.color;


    // useEffect((e) => {
        window.addEventListener("message", (event)=>{
            try{
                var data = JSON.parse(event.data);
                if(data?.type == "onSave" && props?.onSave){
                    props?.onSave(data?.data);
                }
            }catch(e){

            }
        }, false);
    // },[])

    return <iframe src={url} style={{width: "100%", height: "100%", border: "1"}} />
};
const ContractSign = (props) => {
    var url = endURL+"/editor/sign/"+props?.contractKey+"/?PK="+props?.publishKey;

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
    // },[])

    return <iframe src={url} style={{width: "100%", height: "100%", border: "1"}} />
};

export {ContractEditor,ContractSign};