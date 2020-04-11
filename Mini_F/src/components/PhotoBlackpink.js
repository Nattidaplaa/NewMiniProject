import React, { useEffect, useState } from 'react'
import Axios from 'axios';


const PhotoBlackpink = () => {
    const nameBlackpink = ["Jennie", "Lisa", "Rosé", "Jisoo"];
    const [photos, setPhotos] = useState([]); //สร้างอันเดียวก็ได้ แต่ตัว api เราต้องเรียงเอง ประมาณนี้ ลองทำแยกคนเช่น
    useEffect(() => {
        Axios.get("http://localhost:8000/api/bears").then(res => {
            setPhotos(res.data)
        })
    }, [])
    const PhotoTest = [...photos].map((photo, index) => {
        return (
            <div key={index}>
                <div>
                    <p>{nameBlackpink[index]}</p>
                    <img src={photo.img} width="300px" />
                </div>
            </div>
        )
    })
    return (
        <div>
            {PhotoTest}
            <button className="btc" >Home</button>
        </div>
    )
}

export default PhotoBlackpink;