import React from 'react';
import Slick from 'react-slick';
import styles from './slider.module.css';
import { Link } from 'react-router-dom';

const SliderTemplates = (props) => {

    let template = null;

    const settings = {
        dots:false,
        infinite:false,
        arrows:true,
        speed:500,
        slidesToshow:1,
        slidesToScroll:1,
        ...props.settings
    }

    switch(props.type){
        case ('featured'):
            template = props.data.map((item,i) => {
                return(
                    <div key={i}>
                        <div className={styles.featured_item}>
                            <div className={styles.featured_image}
                                style={{
                                    background:`url(${process.env.PUBLIC_URL}/images/articles/${item.image})`
                                }}>
                            </div>
                            
                            <Link to={`/articles/${item.id}`}>
                                <div className={styles.featured_caption}>
                                    {item.title}
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            })
            break;
        default:
        template = null;
    }


    return ( 
        <Slick {...settings}>
            {template}
        </Slick>
     );
}
 
export default SliderTemplates;