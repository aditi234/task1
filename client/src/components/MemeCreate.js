import React, { useCallback, useRef } from 'react';
import './../css/memecreate.css';
import { toPng } from 'html-to-image';

export default function MemeCreate({text1, text2, image}){
    const ref = useRef<HTMLDivElement>(null)

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

    return(
        <>
            <div className='container'>
                <img src={image} alt='meme' />
                <div class="bottom-left">{text1}</div>
                <div class="top-left">{text2}</div>
            </div>
            <button onClick={()=>{onButtonClick()}}>Capture</button>
        </>
        
        
    );
}