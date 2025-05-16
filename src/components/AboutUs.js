import React from "react";
import '../App.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef} from "react";
import FaceIcon from '@mui/icons-material/Face';

gsap.registerPlugin(ScrollTrigger);

function BackgroundCanvas () {
  const scrollContainerRef = useRef(null);
  const wrapperRef = useRef(null);

    useEffect(() => {
      const sections = gsap.utils.toArray('.panel');
      const totalPanels = sections.length;
      
          gsap.to("#scene-1", {
            opacity: 0,
            scrollTrigger: {
              trigger: "#sc-1",
              start: "top 70%",
              end: "bottom 20%",
              scrub: true
            }
          });

          gsap.to("#slide1-title", {
            opacity: 1,
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top 40%",
              end: "top top",
              scrub: true
            }
          });
      
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: wrapperRef.current,
              pin: true,
              scrub: 1,
              start: "top top",
              end: () => `+=${window.innerWidth * totalPanels}`,
              anticipatePin: 1,
              markers: false,
            }
          });
      
          sections.forEach((section, i) => {
            if (i === 0) {
              gsap.set(scrollContainerRef.current, {
                x: 0
              });
            } else {
              tl.to(scrollContainerRef.current, {
                x: () => `-${i * window.innerWidth}`,
                duration: 1,
                ease: 'power1.inOut',
              }, i - 1);
            }
          });
      
          return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            tl.kill();
          };
    }, []);

    return <> 
            <div>
              {/* Intro section */}
              <div id="scene-1" className="scene-container">
                <img src="/images/cloud.png" className='cloud' alt="cloud1" style={{right:"20%", top:'10%'}} />
                <img src="/images/cloud.png" className='cloud' alt="cloud2" style={{left:'20%'}} />
                {/* <img src="images/bush.png" className='bush' alt="bush1" style={{right:"-5%"}}/> */}
                {/* <img src="images/bush.png" className='bush' alt="bush1" style={{left:"-3%"}}/> */}
                <img className="self-img" src="/images/self-hi.png" alt="img"/>
                <p style={{width: "55%", position: "relative", top:"15vh", fontSize:"20px"}}>
                  Hello there, this is ```Insert mascot name```. He has dreams of bringing high quality dairy products from 
                  the farm to your dining table. How does he and his team do it ? Scroll away to witness the process.
                </p>
              </div>
              <div id="sc-1" className="scroller"/>

              {/* Horizontal slider */}
              <section
              className="scroll-wrapper"
              ref={wrapperRef}
              style={{ position: 'relative', height: '100vh', overflow: 'hidden', display:'flex', alignItems:'center', backgroundColor: '#1B4D3E'}}
            >
            <div
          className="horizontal-scroll"
          ref={scrollContainerRef}
          style={{ display: 'flex', height: '100vh' }}
        >
            <div className="panel">
              <h1 id="slide1-title" style={{opacity: 0, fontFamily: "QuickSand", fontWeight: 800, color:'#F7E7CE'}}>1. Milk collection</h1>
              <div className="panel-content">
                <img src="/images/self-milk.png" alt="self-milk" className="panel-img"/>
                <p className="panel-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <h1> </h1>
            </div>

            <div className="panel">
              <h1 id="slide2-title" style={{fontFamily: "QuickSand", fontWeight: 800, color:'#F7E7CE'}}>2. Pastuerisation</h1>
              <div className="panel-content">
              <img src="/images/self-car-2.png" alt="self-car" className="panel-img"/>
                <p className="panel-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <h1> </h1>
            </div>

            <div className="panel" style={{width:"98vw"}}>
              <h1 id="slide3-title" style={{fontFamily: "QuickSand", fontWeight: 800, color:'#F7E7CE'}}>3. Delivery</h1>
              <div className="panel-content">
              <img src="/images/self-delivery.png" alt="self-delivery" className="panel-img"/>
                <p className="panel-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <h1> </h1>
            </div>
        </div>
          </section>
            </div>

            {/* Meet the team section */}
            <div style={{textAlign:'center', backgroundColor: '#FFF8E7'}}>
              <br />
              <h1 style={{fontSize: "80px", margin:'0px'}}>Meet the team</h1>
              <div style={{ width:"100%", display:'flex', margin:'30px 0px'}}>  
                <div style={{display:'flex', justifyContent:'center', width:"50%"}}>
                  <FaceIcon sx={{fontSize:"150px"}}/>
                  <p style={{width: '70%', fontSize:"25px", textAlign:"left"}}>
                      <em >"Some groundbreaking quote about milk/dairy by intelligent person 1."</em><br/>
                      - Intelligent person 1
                  </p>
                </div>
                
                <div style={{display:'flex', justifyContent:'center', width:"50%"}}>
                  <FaceIcon sx={{fontSize:"150px"}}/>
                  <p style={{width: '70%', fontSize:"25px", textAlign:"left"}}>
                      <em>"Some groundbreaking quote about milk/dairy by intelligent person 2."</em><br/>
                      - Intelligent person 2
                  </p>
                </div>
              </div>
              
              <div style={{ width:"100%", display:'flex'}}>
                <div style={{display:'flex', justifyContent:'center', width:"50%"}}>
                  <FaceIcon sx={{fontSize:"150px"}}/>
                  <p style={{width: '70%', fontSize:"25px", textAlign:"left"}}>
                      <em>"Some groundbreaking quote about milk/dairy by intelligent person 3."</em><br/>
                      - Intelligent person 3
                  </p>
                </div>
              </div>
              <br />
            </div>
          </>
}

export default BackgroundCanvas;