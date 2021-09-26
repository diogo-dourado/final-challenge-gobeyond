import React, { useEffect, useState } from 'react'
import "./intro.scss"
import api from '../../services/api';
import ImagesList from '../imagesList/ImagesList';
import {
    image1, 
    image2, 
    image3, 
    image4,
} from "../../data";

export default function Intro() {

    const [selected, setSelected] = useState(1);
    const [itemsInfo, setItemsInfo] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        api.get('').then(({data}) => {
            setItems(data);
        })
        //console.log(items);
         
        // para carregar apenas uma vez
        //// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(()=>{

        switch(selected){
            case 1:
                setItemsInfo(image1);
                //console.log(itemsInfo);
                break;
            case 2:
                setItemsInfo(image2);
                //console.log(itemsInfo);
                break;
            case 3:
                setItemsInfo(image3);
                //console.log(itemsInfo);
                break;
            case 4:
                setItemsInfo(image4);
                //console.log(itemsInfo);
                break;
            default:
                setItemsInfo(image1);
                //console.log(itemsInfo);
        }

    }, [selected])

    return (
        <div className="intro">
            <div className="left">
                <div className="wrapper">
                    {itemsInfo.map((d) => (
                        <h3>{d.title}</h3>
                    ))}
                    <br/>
                    <a href="https://www.corebiz.ag/">veja mais&nbsp;<img src="assets/arrow-circle.svg" alt="" /></a>
                    <ul className="thumbsContainer">
                        {items.map(item=>(
                            <ImagesList 
                                thumb={item.thumbnailUrl}
                                active={selected === item.id}
                                setSelected={setSelected}
                                id={item.id}
                            />
                        ))}
                    </ul>
                </div>
            </div>
            <div className="right">
                {itemsInfo.map((d) => (
                    <div className="imgContainer">
                        <img src={d.url} alt="" />
                    </div>
                ))}

            </div>
        </div>
    )
}
