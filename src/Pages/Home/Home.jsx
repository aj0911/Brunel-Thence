import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaArrowRightLong, FaMinus, FaPlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // States
  const navigate = useNavigate();
  const [swiperIndex,setSwiperIndex] = useState(0);
  const contents = [
    'Enhance fortune 50 company’s insights teams research capabilities',
    'Enhance fortune 50 company’s insights teams research capabilities',
    'Enhance fortune 50 company’s insights teams research capabilities',
  ]
  const [faqs,setFaqs] = useState([
    {
      ques:'Do you offer freelancers?',
      ans:'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.',
      show:true
    },
    {
      ques:'What’s the guarantee that I will be satisfied with the hired talent?',
      ans:'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.',
      show:false
    },
    {
      ques:'Can I hire multiple talents at once?',
      ans:'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.',
      show:false,
    },
    {
      ques:'Why should I not go to an agency directly?',
      ans:'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.',
      show:false,
    },
    {
      ques:'Who can help me pick a right skillset and duration for me?',
      ans:'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.',
      show:false,
    }
  ])

  // Functions
  const HandleFAQ = (value,index)=>{
    const cloneFaqs = [...faqs];
    cloneFaqs[index].show = value;
    setFaqs(cloneFaqs)
  }

  return (
    <div className="Home">
      <Header>
        <div className="btns">
          <button onClick={()=>navigate('/Form')}>Get Projects</button>
          <button>Onboard Talent</button>
        </div>
      </Header>
      <div className="hero">
        <div className="top">
          <h5>Success stories</h5>
          <h3>Every success journey we’ve encountered.</h3>
        </div>
        <div className="box">
          <div className="left">
            <div className="imgContainer">
              <img src={require('../../Assets/Images/hero.png')} alt="" />
            </div>
            <div className="container-1">
              <img src={require('../../Assets/Images/spark.png')} alt="" />
              <h2>40%</h2>
              <h3>Achieved reduction in project execution time by optimising team availability</h3>
            </div>
            <div className="container-2">
              <div className="icon">
                <img src={require('../../Assets/Images/rocket.png')} alt="" />
              </div>
              <div className="content">
                <h3>10 DAYS</h3>
                <h5>Staff Deployment</h5>
              </div>
            </div>
            <div className="container-3">
              <h3><span>$0.5</span> MILLION</h3>
              <h5>Reduced client expenses by saving on hiring and employee costs.</h5>
            </div>
          </div>
          <div className="right">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            className='swiper'
            onSlideChange={({activeIndex}) => setSwiperIndex(activeIndex)}
          >
            {
              contents.map((val,key)=>(
                <SwiperSlide className='swiperSlide' key={key}><p>{val}</p></SwiperSlide>
              ))
            }
          </Swiper>
          <div className="dots">
            {
              contents.map((_,key)=>(
                <div key={key} style={{backgroundColor:swiperIndex===key?'var(--textColor-2)':'#E4E3E3'}} className="dot"></div>
              ))
            }
          </div>
          <button>
            <h3>Explore More</h3>
            <FaArrowRightLong className='icon' />
          </button>
          </div>
        </div>
      </div>
      <div className="faqs">
        <div className="left">
          <h5>What’s on your mind</h5>
          <h3>Ask Questions</h3>
        </div>
        <div className="right">
            {
              faqs.map((faq,index)=>(
                <div key={index} className="faq">
                  <div className="ques">
                    <h3>{faq.ques}</h3>
                    {
                      (!faq.show)?
                      <div className="icon"  onClick={()=>HandleFAQ(true,index)}>
                        <FaPlus />
                      </div>
                      :
                      <div className="icon" onClick={()=>HandleFAQ(false,index)}>
                        <FaMinus/>
                      </div>
                    }
                  </div>
                  {
                    <div className={`ans ${faq.show?'show':''}`}>
                      <p>{faq.ans}</p>
                    </div>
                  }
                </div>
              ))
            }
        </div>
        <img src={require('../../Assets/Images/arrow.png')} alt="" />
      </div>
      <Footer/>
    </div>
  )
}

export default Home