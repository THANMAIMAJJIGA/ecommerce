import React, { useContext } from "react";
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from "../Components/Item/Item";
import { ShopContext } from "../Context/ShopContext";
import './CSS/ShopCategory.css';
const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    return (
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else {
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                <a href="https://www.google.com/search?sca_esv=d71f265c45fd02a5&rlz=1C1VDKB_enIN975IN975&sxsrf=ADLYWIJwZ8KUcr0tbl0kJlZZ2sjhq31q4w:1724697039957&q=shopping&tbm=shop&source=lnms&fbs=AEQNm0COtQ6qE5snXClm_cWqGTLX_jMP5V4l2v9LemFtanifXXTKrMMqmKUWXEqMOTvUWjh32YiMrtRaydvvlf4xc59VozWZ1FcQ32Op83AMai-VD5d-zZNxEVTZrF8C6uMXBZUEcvMdTbvmEFQ8ZeQwgozwvjM48BwQHFIBec5bfqrBHXYJ7kwRceuI283h5AkAhOCzS3Mpd9jFikNUziKQxXKz27tIzw&ved=1t:200715&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer">
                    Explore More
                </a>
            </div>
        </div>
    )
}

export default ShopCategory