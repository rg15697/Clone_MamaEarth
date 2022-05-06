
import React from 'react';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import {BabyCare, Colorcare, Newlaunches, OnionRange, singleProduct, summerFav, UbtanRange, VitaminRange} from 

import styles from "./SIngleProduct.module.css"
import { Pagination, Navigation } from "swiper";
import { BabyCare, Colorcare, Newlaunches, OnionRange, singleProduct, summerFav, UbtanRange, VitaminRange} from '../Data/Data';

export const Slider =() => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
       style={{height:'550px'}}
      >
        {singleProduct.map((item) =>{
         return (
         
          <SwiperSlide>
            <div key={item.id} 
            
            >
          <div>
                    <div
                      style={{
                        width: "fit-content",
                        height: "fit-content",
                        position: "absolute",
                        color: "white",
                        backgroundColor: "indianred",
                        width: "90px",
                        height: "25px",
                        textAlign: "center",
                        borderTopRightRadius:'5px',
                        borderBottomRightRadius:'5px',
                        paddingTop:'2px'
              
                      }}
                    >
                      
                      <p style={{fontSize:'14px'}}>{item.sellerTag}</p>
                    </div>
                    <div>
                      <a>
                        <img
                          alt="ecommerce"
                          style={{
                            height: "250px",
                            width: "95%",
                            marginTop:'5%'
                           
                          }}
                          src={item.pImg}
                        />
                      </a>
                    </div>
                  </div>
                  <div style={{ height: "50px", marginBottom: "15px" }}>
                    <p style={{ textAlign: "center", fontSize: "15px" }}>
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <p style={{ textAlign: "center", color: "green" }}>
                      {item.pShortDec}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        width: "300px",
                        marginLeft: "20%",
                        gap: "10px",
                      }}
                    >
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "100",
                        }}
                      >
                        ⭐{item.rating}
                      </p>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "100",
                        }}
                      >
                        <img
                          src="https://image.emojisky.com/478/2537478-small.png"
                          style={{ height: "20px", width: "20px" }}
                        />
                        `{item.reviews} Reviews`
                      </p>
                    </div>

                    <p style={{ textAlign: "center", fontSize: "18px" }}>
                      {" "}
                      ₹{item.price}
                    </p>
                  </div>
                  <button className={styles.addToCart}>
                    Add To cart
                  </button>
                  </div>
          </SwiperSlide>
          
         )


        })}
        
        
      </Swiper>
    </>
  );
}





export const Onion=() => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
       style={{height:'550px'}}
      >
        {OnionRange.map((item) =>{
         return (
         
          <SwiperSlide>
            <div key={item.id} 
            
            >
          <div>
                    <div
                      style={{
                        width: "fit-content",
                        height: "fit-content",
                        position: "absolute",
                        color: "white",
                        backgroundColor: "indianred",
                        width: "90px",
                        height: "25px",
                        textAlign: "center",
                        borderTopRightRadius:'5px',
                        borderBottomRightRadius:'5px',
                        paddingTop:'2px'
              
                      }}
                    >
                      
                      <p style={{fontSize:'14px'}}>{item.sellerTag}</p>
                    </div>
                    <div>
                      <a>
                        <img
                          alt="ecommerce"
                          style={{
                            height: "250px",
                            width: "95%",
                            marginTop:'5%'
                           
                          }}
                          src={item.pImg}
                        />
                      </a>
                    </div>
                  </div>
                  <div style={{ height: "50px", marginBottom: "15px" }}>
                    <p style={{ textAlign: "center", fontSize: "15px" }}>
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <p style={{ textAlign: "center", color: "green" }}>
                      {item.pShortDec}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        width: "300px",
                        marginLeft: "20%",
                        gap: "10px",
                      }}
                    >
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "100",
                        }}
                      >
                        ⭐{item.rating}
                      </p>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "100",
                        }}
                      >
                        <img
                          src="https://image.emojisky.com/478/2537478-small.png"
                          style={{ height: "20px", width: "20px" }}
                        />
                        `{item.reviews} Reviews`
                      </p>
                    </div>

                    <p style={{ textAlign: "center", fontSize: "18px" }}>
                      {" "}
                      ₹{item.price}
                    </p>
                  </div>
                  <button className={styles.addToCart}>
                    Add To cart
                  </button>
                  </div>
          </SwiperSlide>
          
         )


        })}
        
        
      </Swiper>
    </>
  );
}






export const Vitamin=() => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
       style={{height:'550px'}}
      >
        {VitaminRange.map((item) =>{
         return (
         
          <SwiperSlide>
            <div key={item.id} 
            
            >
          <div>
                    <div
                      style={{
                        width: "fit-content",
                        height: "fit-content",
                        position: "absolute",
                        color: "white",
                        backgroundColor: "indianred",
                        width: "90px",
                        height: "25px",
                        textAlign: "center",
                        borderTopRightRadius:'5px',
                        borderBottomRightRadius:'5px',
                        paddingTop:'2px'
              
                      }}
                    >
                      
                      <p style={{fontSize:'14px'}}>{item.sellerTag}</p>
                    </div>
                    <div>
                      <a>
                        <img
                          alt="ecommerce"
                          style={{
                            height: "250px",
                            width: "95%",
                            marginTop:'5%'
                           
                          }}
                          src={item.pImg}
                        />
                      </a>
                    </div>
                  </div>
                  <div style={{ height: "50px", marginBottom: "15px" }}>
                    <p style={{ textAlign: "center", fontSize: "15px" }}>
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <p style={{ textAlign: "center", color: "green" }}>
                      {item.pShortDec}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        width: "300px",
                        marginLeft: "20%",
                        gap: "10px",
                      }}
                    >
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "100",
                        }}
                      >
                        ⭐{item.rating}
                      </p>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "100",
                        }}
                      >
                        <img
                          src="https://image.emojisky.com/478/2537478-small.png"
                          style={{ height: "20px", width: "20px" }}
                        />
                        `{item.reviews} Reviews`
                      </p>
                    </div>

                    <p style={{ textAlign: "center", fontSize: "18px" }}>
                      {" "}
                      ₹{item.price}
                    </p>
                  </div>
                  <button className={styles.addToCart}>
                    Add To cart
                  </button>
                  </div>
          </SwiperSlide>
          
         )


        })}
        
        
      </Swiper>
    </>
  );
}


export const Tan=() => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
       style={{height:'550px'}}
      >
        {UbtanRange.map((item) =>{
         return (
         
          <SwiperSlide>
            <div key={item.id} 
            
            >
          <div>
                    <div
                      style={{
                        width: "fit-content",
                        height: "fit-content",
                        position: "absolute",
                        color: "white",
                        backgroundColor: "indianred",
                        width: "90px",
                        height: "25px",
                        textAlign: "center",
                        borderTopRightRadius:'5px',
                        borderBottomRightRadius:'5px',
                        paddingTop:'2px'
              
                      }}
                    >
                      
                      <p style={{fontSize:'14px'}}>{item.sellerTag}</p>
                    </div>
                    <div>
                      <a>
                        <img
                          alt="ecommerce"
                          style={{
                            height: "250px",
                            width: "95%",
                            marginTop:'5%'
                           
                          }}
                          src={item.pImg}
                        />
                      </a>
                    </div>
                  </div>
                  <div style={{ height: "50px", marginBottom: "15px" }}>
                    <p style={{ textAlign: "center", fontSize: "15px" }}>
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <p style={{ textAlign: "center", color: "green" }}>
                      {item.pShortDec}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        width: "300px",
                        marginLeft: "20%",
                        gap: "10px",
                      }}
                    >
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "100",
                        }}
                      >
                        ⭐{item.rating}
                      </p>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "100",
                        }}
                      >
                        <img
                          src="https://image.emojisky.com/478/2537478-small.png"
                          style={{ height: "20px", width: "20px" }}
                        />
                        `{item.reviews} Reviews`
                      </p>
                    </div>

                    <p style={{ textAlign: "center", fontSize: "18px" }}>
                      {" "}
                      ₹{item.price}
                    </p>
                  </div>
                  <button className={styles.addToCart}>
                    Add To cart
                  </button>
                  </div>
          </SwiperSlide>
          
         )


        })}
        
        
      </Swiper>
    </>
  );
}

export const Launches=() => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
       style={{height:'550px'}}
      >
        {Newlaunches.map((item) =>{
         return (
         
          <SwiperSlide>
            <div key={item.id} 
            
            >
          <div>
                    <div
                      style={{
                        width: "fit-content",
                        height: "fit-content",
                        position: "absolute",
                        color: "white",
                        backgroundColor: "indianred",
                        width: "90px",
                        height: "25px",
                        textAlign: "center",
                        borderTopRightRadius:'5px',
                        borderBottomRightRadius:'5px',
                        paddingTop:'2px'
              
                      }}
                    >
                      
                      <p style={{fontSize:'14px'}}>{item.sellerTag}</p>
                    </div>
                    <div>
                      <a>
                        <img
                          alt="ecommerce"
                          style={{
                            height: "250px",
                            width: "95%",
                            marginTop:'5%'
                           
                          }}
                          src={item.pImg}
                        />
                      </a>
                    </div>
                  </div>
                  <div style={{ height: "50px", marginBottom: "15px" }}>
                    <p style={{ textAlign: "center", fontSize: "15px" }}>
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <p style={{ textAlign: "center", color: "green" }}>
                      {item.pShortDec}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        width: "300px",
                        marginLeft: "20%",
                        gap: "10px",
                      }}
                    >
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "100",
                        }}
                      >
                        ⭐{item.rating}
                      </p>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "100",
                        }}
                      >
                        <img
                          src="https://image.emojisky.com/478/2537478-small.png"
                          style={{ height: "20px", width: "20px" }}
                        />
                        `{item.reviews} Reviews`
                      </p>
                    </div>

                    <p style={{ textAlign: "center", fontSize: "18px" }}>
                      {" "}
                      ₹{item.price}
                    </p>
                  </div>
                  <button className={styles.addToCart}>
                    Add To cart
                  </button>
                  </div>
          </SwiperSlide>
          
         )


        })}
        
        
      </Swiper>
    </>
  );
}


export const Summer=() => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
       style={{height:'550px'}}
      >
        {summerFav.map((item) =>{
         return (
         
          <SwiperSlide>
            <div key={item.id} 
            
            >
          <div>
                    <div
                      style={{
                        width: "fit-content",
                        height: "fit-content",
                        position: "absolute",
                        color: "white",
                        backgroundColor: "indianred",
                        width: "90px",
                        height: "25px",
                        textAlign: "center",
                        borderTopRightRadius:'5px',
                        borderBottomRightRadius:'5px',
                        paddingTop:'2px'
              
                      }}
                    >
                      
                      <p style={{fontSize:'14px'}}>{item.sellerTag}</p>
                    </div>
                    <div>
                      <a>
                        <img
                          alt="ecommerce"
                          style={{
                            height: "250px",
                            width: "95%",
                            marginTop:'5%'
                           
                          }}
                          src={item.pImg}
                        />
                      </a>
                    </div>
                  </div>
                  <div style={{ height: "50px", marginBottom: "15px" }}>
                    <p style={{ textAlign: "center", fontSize: "15px" }}>
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <p style={{ textAlign: "center", color: "green" }}>
                      {item.pShortDec}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        width: "300px",
                        marginLeft: "20%",
                        gap: "10px",
                      }}
                    >
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "100",
                        }}
                      >
                        ⭐{item.rating}
                      </p>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "100",
                        }}
                      >
                        <img
                          src="https://image.emojisky.com/478/2537478-small.png"
                          style={{ height: "20px", width: "20px" }}
                        />
                        `{item.reviews} Reviews`
                      </p>
                    </div>

                    <p style={{ textAlign: "center", fontSize: "18px" }}>
                      {" "}
                      ₹{item.price}
                    </p>
                  </div>
                  <button className={styles.addToCart}>
                    Add To cart
                  </button>
                  </div>
          </SwiperSlide>
          
         )


        })}
        
        
      </Swiper>
    </>
  );
}
export const Color=() => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
       style={{height:'550px'}}
      >
        {Colorcare.map((item) =>{
         return (
         
          <SwiperSlide>
            <div key={item.id} 
            
            >
          <div>
                    <div
                      style={{
                        width: "fit-content",
                        height: "fit-content",
                        position: "absolute",
                        color: "white",
                        backgroundColor: "indianred",
                        width: "90px",
                        height: "25px",
                        textAlign: "center",
                        borderTopRightRadius:'5px',
                        borderBottomRightRadius:'5px',
                        paddingTop:'2px'
              
                      }}
                    >
                      
                      <p style={{fontSize:'14px'}}>{item.sellerTag}</p>
                    </div>
                    <div>
                      <a>
                        <img
                          alt="ecommerce"
                          style={{
                            height: "250px",
                            width: "95%",
                            marginTop:'5%'
                           
                          }}
                          src={item.pImg}
                        />
                      </a>
                    </div>
                  </div>
                  <div style={{ height: "50px", marginBottom: "15px" }}>
                    <p style={{ textAlign: "center", fontSize: "15px" }}>
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <p style={{ textAlign: "center", color: "green" }}>
                      {item.pShortDec}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        width: "300px",
                        marginLeft: "20%",
                        gap: "10px",
                      }}
                    >
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "100",
                        }}
                      >
                        ⭐{item.rating}
                      </p>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "100",
                        }}
                      >
                        <img
                          src="https://image.emojisky.com/478/2537478-small.png"
                          style={{ height: "20px", width: "20px" }}
                        />
                        `{item.reviews} Reviews`
                      </p>
                    </div>

                    <p style={{ textAlign: "center", fontSize: "18px" }}>
                      {" "}
                      ₹{item.price}
                    </p>
                  </div>
                  <button className={styles.addToCart}>
                    Add To cart
                  </button>
                  </div>
          </SwiperSlide>
          
         )


        })}
        
        
      </Swiper>
    </>
  );
}

export const Baby=() => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
       style={{height:'550px'}}
      >
        {BabyCare.map((item) =>{
         return (
         
          <SwiperSlide>
            <div key={item.id} 
            
            >
          <div>
                    <div
                      style={{
                        width: "fit-content",
                        height: "fit-content",
                        position: "absolute",
                        color: "white",
                        backgroundColor: "indianred",
                        width: "90px",
                        height: "25px",
                        textAlign: "center",
                        borderTopRightRadius:'5px',
                        borderBottomRightRadius:'5px',
                        paddingTop:'2px'
              
                      }}
                    >
                      
                      <p style={{fontSize:'14px'}}>{item.sellerTag}</p>
                    </div>
                    <div>
                      <a>
                        <img
                          alt="ecommerce"
                          style={{
                            height: "250px",
                            width: "95%",
                            marginTop:'5%'
                           
                          }}
                          src={item.pImg}
                        />
                      </a>
                    </div>
                  </div>
                  <div style={{ height: "50px", marginBottom: "15px" }}>
                    <p style={{ textAlign: "center", fontSize: "15px" }}>
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <p style={{ textAlign: "center", color: "green" }}>
                      {item.pShortDec}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        width: "300px",
                        marginLeft: "20%",
                        gap: "10px",
                      }}
                    >
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "100",
                        }}
                      >
                        ⭐{item.rating}
                      </p>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "100",
                        }}
                      >
                        <img
                          src="https://image.emojisky.com/478/2537478-small.png"
                          style={{ height: "20px", width: "20px" }}
                        />
                        `{item.reviews} Reviews`
                      </p>
                    </div>

                    <p style={{ textAlign: "center", fontSize: "18px" }}>
                      {" "}
                      ₹{item.price}
                    </p>
                  </div>
                  <button className={styles.addToCart}>
                    Add To cart
                  </button>
                  </div>
          </SwiperSlide>
          
         )


        })}
        
        
      </Swiper>
    </>
  );
}




