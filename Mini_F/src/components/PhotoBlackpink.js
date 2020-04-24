import React, { useEffect, useState } from 'react'
import Axios from 'axios';



const PhotoBlackpink = () => {
    const nameBlackpink = ["Jennie(제니)", "Lisa(리사)", "Rosé(로제)", "Jisoo(지수)", "Blackpink"];
    const [photos, setPhotos] = useState([]); //สร้างอันเดียวก็ได้ แต่ตัว api เราต้องเรียงเอง ประมาณนี้ ลองทำแยกคนเช่น

    useEffect(() => {
        Axios.get("http://localhost:8000/api/bears").then(res => {
            setPhotos(res.data)
        })
    }, [])

    const dataBlackpink =
        ["ชื่อ : Jennie Kim เจนนี่ คิม, ตำแหน่ง : แรปเปอร์-นักร้อง, วันเกิด : 16 มกราคม 1996, สถานที่เกิด : เกาหลีใต้, ส่วนสูง : 163 ซม, สัญชาติ นิวซีเเลนด์, เจนนี่ได้ไปเรียนและเติบโตในประเทศนิวซีแลนด์ โดยเธอได้เรียนที่ ACG Parnell College ผ่านการออดิชั่นของค่าย YG g 2011 ก่อนหน้านี้เจนนี่มีผลงานในวงการบันเทิงไม่น้อยทั้งการเล่น MV ของรุ่นพี่ G-Dragon ในเพลง 그XX (That XX) ร่วมฟีเจอริ่งในเพลง GG BE (지지베) ของ ซึงรี Bigbang และ Black ของ G-Dragon เจนนี่มีความสามารถทั้งในการแรปและร้องเพลง โดยเฉพาะสไตล์การแรปที่โดดเด่น บวกกับภาพลักษณ์ที่ดู swag ทำให้เธอจึงมีเสน่ห์ในสายตาหลายๆคน IG : @jennierubyjane",
            "ชื่อ : Rose โรเซ่, ตำแหน่ง : นักร้อง, วันเกิด : 11 กุมภาพันธ์ 1997, สถานที่เกิด : ออกแลนด์ นิวซีแลนด์, ส่วนสูง : 168 ซม",
            "Roโรแซนเน พัก หรือ พัก แช-ยอง (เกาหลี: 박채영; เกิด 11 กุมภาพันธ์ ค.ศ. 1997) หรือชื่อในวงการคือ โรเซ่ (Rosé) เป็นนักร้องชาวเกาหลีใต้ที่เกิดในนิวซีแลนด์ เมืองออกแลนด์ ... 1 ประวัติ. 1.1 ชีวิตช่วงแรก; 1.2 แบล็กพิงก์. 2 โฆษณา; 3 ผลงานดนตรี. 3.1 ซิงเกิลในฐานะนักร้อง",
            "Jisoo(지수)"];
    const buttons = ['JennieInfo', 'LisaInfo', 'RoséInfo', 'JisooInfo', 'Blackpink']
    const [Dis, setDis] = useState({ id: null, Data: null });
    // const [Jdis, setJdis] = useState(false)
    // const [Ldis, setLdis] = useState(false)
    // const [Rdis, setRdis] = useState(false)
    // const [Jidis, setJidis] = useState(false)
    const Display = (index) => {
        setDis({ id: index, Data: dataBlackpink[index] })
    }

    const PhotoTest = [...photos].map((photo, index) => {
        return (
            <div key={index}>
                <div>
                    <p>{nameBlackpink[index]}</p>
                    <img src={photo.img} width="300px" />
                </div>
                <button onClick={() => Display(index)}>{buttons[index]}</button>
                {Dis.id == index && <p>{Dis.Data}</p>}
            </div>
        )
    })



return (
    <div>
        {PhotoTest}
        <a href="/">HOME</a>
        <div>
            <a href="#">Top</a>
        </div>
    </div>

);
}

export default PhotoBlackpink;