import React, { useEffect, useState , useRef} from 'react';
import './../css/memecreate.css';
import html2canvas from 'html2canvas';

export default function MemeCreate({text1, text2, image}){
    const [imgg, setImage]=useState('');
  
    const onCapture = (id) => {
      window.scrollTo( 0, 0 );
        const input = document.getElementById("capture");
        html2canvas(input, {
          useCORS: true,
          width: 650,
          height: 450,
         
          windowWidth: document.body.scrollWidth,
          windowHeight: document.body.scrollHeight,
          x: 250,
          y: window.pageYOffset,
            onclone: function (clonedDoc) {
            clonedDoc.getElementById('capture').style.display = 'block';
        }
        }).then(function(canvas){
            const imgData=canvas.toDataURL();
            setImage(imgData);
            console.log(canvas.toDataURL());
            // const pdf = new jsPDF();
            // pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.save("download.pdf");
          })  
          
    };
    return(
        <>
            <div id="capture">
                <img className='abcd' src={image} alt='meme' />
                <div class="bottom-left">{text2}</div>
                <div class="top-left">{text1}</div>
            </div>
            <button onClick={()=>{onCapture()}}>Capture</button>
            <h2>show:</h2>
            <img src={imgg}></img>
        </>
        
        
    );
}