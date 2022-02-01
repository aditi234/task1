import React,{useEffect, useState} from 'react';
import './../css/template.css';

export default function Template({image, setImage}){
    const [images, setImages]=useState([]);
    
    useEffect(()=>{
        fetch('/api/meme/',{
            headers:{
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        }).then(res => res.json())
        .then(result =>{
            if(result.error){
                console.log("error",result.error);
            }else{
                setImages(result.img);
            }
        })
    },[])
    const handleOnChange=(url)=>{
        setImage(url);
    }
    return(
        <div className='template-design'>
           <div>
                <ul>
                {
                    images.map(item=>{
                        return(
                            <li key={item._id}>
                                <img src={item.imageUrl} onClick={()=>{handleOnChange(item.imageUrl)}} alt='memes'/>
                            </li> 
                        )
                    })
                }
                </ul>
           </div>
        </div>
    );
}