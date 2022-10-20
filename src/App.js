
import img2 from './assets/img/img2.png'
import img3 from './assets/img/img3.png'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className=" mx-auto w-full h-full bg-myback flex flex-wrap">
      <Navbar />
      <div className='w-full bg-hero bg-center h-screen flex flex-wrap items-center '>
        <div className='pr-4 pl-8 mt-52 h-44 items-center justify-end w-full flex flex-wrap'>
            <div className='w-full text-[11px] text-mygreen flex   justify-end'>
                TAGLINE
            </div>
            <div className='w-full h-28 items-center text-[102px] font-semibold  text-white flex justify-end'>
                BEGIN
            </div>
            <div className='w-72 text-right text-[9px] text-white flex   justify-end'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ibh euismod tincidunt ut laoreet dolore magna aliquam erat  er adipiscing elit, sed diam nonummy nibh euismod tincidunt 
            </div>
            
        </div>
        <div className='mt-auto px-14  w-full pb-8 grid gap-2 grid-cols-9'>
              <div className='col-span-3 flex justify-center'>
                <div className='w-8 h-8 bg-mygreen'>

                </div>
              </div>
              <div className='col-span-3 flex justify-center'>
                <div className='w-8 h-8 bg-mygreen'>
                  
                </div>
              </div>
              <div className='col-span-3 flex justify-center'>
                <div className='w-8 h-8 bg-mygreen'>
                  
                </div>
              </div>
            </div>
      </div>
      <div className='p-7 w-full flex-wrap pt-4'>
          <div className='grid gap-3 grid-cols-10'>
            <div className='col-span-2 h-4 bg-mygreen'>

            </div>
            <div className='col-span-2 h-4 bg-mygreen'>
              
            </div>
            <div className='col-span-2 h-4 bg-mygreen'>
              
            </div>
            <div className='col-span-2 h-4 bg-mygreen'>
              
            </div>
            <div className='col-span-2 h-4 bg-mygreen'>
              
            </div>
          </div>
          <div className='w-24 bg-mygreen h-8 mt-12 ml-8'></div>
          <div className='w-full'>
              <img className='w-full' loading='lazy' src={img2} alt="estable 2" />
              <div className='w-full mt-8 text-mygreen text-[24px]'>
                Introducing
              </div>
              <div className='w-1/4 h-px bg-back_col2  '>
                <div className='w-[70%] h-px bg-mygreen'></div>
              </div>
              <div className='w-full mt-8 text-white text-[13px]'>
                The newly designed BEGIN will completely alter 
                the reality of fashion, individually and commercially 
                as we know it. A major attribute of this mirror is to 
                provide the user with the resources of complex fashion 
                and style that many find difficult to obtain. Its main 
                focus will be the user’s stylistic preferences and will 
                then provide the user with an outfit which meets 
                their own style while simultaneously using expert 
                knowledge to ensure an outfit of pride. 
                <br /> <br />
                Because self-presentation is such a prominent 
                element of judgement, all kinds of people are vehemently dressing in all kinds of ways to fit certain 
                descriptions, norms, and anything that will allow their 
                confidence to break through the cracks of self-doubt.
              </div>
              <button className='mt-8 px-10 py-4 rounded-sm bg-white uppercase text-[14px] font-bold text-black'>
                Learn More
              </button>
          </div>
      </div>
      <div className='p-7 w-full flex flex-wrap'>
        <div className='w-5/6 font-bold leading-9 uppercase text-white text-[30px] h-fit'>
          Everything you need!
        </div>
        <div className='mt-4 w-2/5 h-px bg-back_col2  '>
          <div className='w-[70%] h-px bg-mygreen'></div>
        </div>
        <div className='w-full flex flex-wrap-reverse md:items-center'>
          <div className='w-full md:w-1/2 items-center justify-center flex'>
              <img src={img3} alt="begin" loading='lazy'/>
            </div>
          <div className='w-full md:w-1/2 mt-8 grid gap-12 grid-cols-4'>
            <div className='col-span-1'> </div>
            <div className='col-span-3 grid gap-5 grid-cols-1'>
              <div className='text-white font-bold text-[20px]'>
                Body measurement tracking
              </div>
              <div className='text-white text-[10px]'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi 
              </div>
            </div>
            <div className='col-span-1'> </div>
            <div className='col-span-3 grid gap-5 grid-cols-1'>
              <div className='text-white font-bold text-[20px]'>
              In home trial of clothes and closet
              </div>
              <div className='text-white text-[10px]'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi 
              </div>
            </div>
            <div className='col-span-1'> </div>
            <div className='col-span-3 grid gap-5 grid-cols-1'>
              <div className='text-white font-bold text-[20px]'>
              Recommendation of clothes using AI
              </div>
              <div className='text-white text-[10px]'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi 
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
      <div className='py-16 px-5 w-full justify-center flex flex-wrap'>
          <div className='w-full text-white text-[20px] text-center font-semibold'>
            Enhance your shopping experience 
            with elevated expertise and efficient time constraints. 
          </div>
          <div className='w-1/5  h-px bg-mygreen mt-16'></div>
          <div className='w-full items-center mt-16 h-16 flex justify-center'>
            <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="75" height="75" stroke="white" stroke-width="2"/>
              <path d="M35.6151 50.5235C35.1191 50.5206 34.6294 50.413 34.1779 50.2076C33.6896 49.9924 33.2735 49.6412 32.9795 49.1959C32.6854 48.7506 32.5257 48.23 32.5195 47.6964V34.398C32.5257 33.8644 32.6854 33.3439 32.9795 32.8986C33.2735 32.4533 33.6896 32.102 34.1779 31.8868C34.7397 31.6214 35.3648 31.5192 35.982 31.5918C36.5991 31.6644 37.1834 31.9089 37.6683 32.2975L45.7232 38.9466C46.039 39.1981 46.2941 39.5176 46.4694 39.8813C46.6448 40.2449 46.7358 40.6435 46.7358 41.0472C46.7358 41.451 46.6448 41.8495 46.4694 42.2132C46.2941 42.5769 46.039 42.8963 45.7232 43.1478L37.6683 49.797C37.0877 50.2679 36.3627 50.5244 35.6151 50.5235Z" fill="white"/>
            </svg>
          </div>
      </div>
      <div className='p-6 w-full flex flex-wrap justify-center'>
         <div className='w-full text-[24px] text-center text-white font-semibold'>
          How it is useful for user and companies
         </div>
         <div className='w-1/4 h-px bg-mygreen mt-8'></div>
         <div className='mt-16 mx-14 px-7 py-9 w-full'>
            <div className='w-full flex items-center'>
              <span className='font-bold text-white text-[20px] w-fit mr-2'>Lorem Ipsum</span>
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.931 20.7686C10.6755 20.7691 10.428 20.6801 10.2314 20.5172C10.1207 20.4254 10.0292 20.3127 9.96213 20.1855C9.89507 20.0583 9.85375 19.9192 9.84055 19.776C9.82735 19.6328 9.84253 19.4885 9.88521 19.3512C9.92789 19.2139 9.99723 19.0864 10.0893 18.9759L14.9863 13.1169L10.2642 7.24705C10.1734 7.13524 10.1056 7.00658 10.0646 6.86848C10.0237 6.73038 10.0105 6.58556 10.0257 6.44233C10.041 6.29911 10.0844 6.1603 10.1534 6.0339C10.2225 5.9075 10.3158 5.79599 10.4281 5.70579C10.5412 5.60628 10.6737 5.53122 10.8172 5.48532C10.9606 5.43942 11.1121 5.42368 11.2619 5.43907C11.4118 5.45447 11.5568 5.50067 11.688 5.57479C11.8191 5.6489 11.9335 5.74932 12.024 5.86975L17.3037 12.4283C17.4644 12.6239 17.5523 12.8692 17.5523 13.1224C17.5523 13.3756 17.4644 13.6209 17.3037 13.8165L11.8382 20.3751C11.7286 20.5073 11.5893 20.6119 11.4316 20.6803C11.274 20.7487 11.1025 20.7789 10.931 20.7686Z" fill="#1EE1B3"/>
              </svg>
            </div>
            <div className='w-full text-[13px] text-white mt-6'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet 
            </div>
         </div>
         <div className='mt-7 mx-14 px-7 py-9 w-full'>
            <div className='w-full flex items-center'>
              <span className='font-bold text-white text-[20px] w-fit mr-2'>Lorem Ipsum</span>
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.931 20.7686C10.6755 20.7691 10.428 20.6801 10.2314 20.5172C10.1207 20.4254 10.0292 20.3127 9.96213 20.1855C9.89507 20.0583 9.85375 19.9192 9.84055 19.776C9.82735 19.6328 9.84253 19.4885 9.88521 19.3512C9.92789 19.2139 9.99723 19.0864 10.0893 18.9759L14.9863 13.1169L10.2642 7.24705C10.1734 7.13524 10.1056 7.00658 10.0646 6.86848C10.0237 6.73038 10.0105 6.58556 10.0257 6.44233C10.041 6.29911 10.0844 6.1603 10.1534 6.0339C10.2225 5.9075 10.3158 5.79599 10.4281 5.70579C10.5412 5.60628 10.6737 5.53122 10.8172 5.48532C10.9606 5.43942 11.1121 5.42368 11.2619 5.43907C11.4118 5.45447 11.5568 5.50067 11.688 5.57479C11.8191 5.6489 11.9335 5.74932 12.024 5.86975L17.3037 12.4283C17.4644 12.6239 17.5523 12.8692 17.5523 13.1224C17.5523 13.3756 17.4644 13.6209 17.3037 13.8165L11.8382 20.3751C11.7286 20.5073 11.5893 20.6119 11.4316 20.6803C11.274 20.7487 11.1025 20.7789 10.931 20.7686Z" fill="#1EE1B3"/>
              </svg>
            </div>
            <div className='w-full text-[13px] text-white mt-6'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet 
            </div>
         </div>
         <div className='mt-7 mx-14 px-7 py-9 w-full'>
            <div className='w-full flex items-center'>
              <span className='font-bold text-white text-[20px] w-fit mr-2'>Lorem Ipsum</span>
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.931 20.7686C10.6755 20.7691 10.428 20.6801 10.2314 20.5172C10.1207 20.4254 10.0292 20.3127 9.96213 20.1855C9.89507 20.0583 9.85375 19.9192 9.84055 19.776C9.82735 19.6328 9.84253 19.4885 9.88521 19.3512C9.92789 19.2139 9.99723 19.0864 10.0893 18.9759L14.9863 13.1169L10.2642 7.24705C10.1734 7.13524 10.1056 7.00658 10.0646 6.86848C10.0237 6.73038 10.0105 6.58556 10.0257 6.44233C10.041 6.29911 10.0844 6.1603 10.1534 6.0339C10.2225 5.9075 10.3158 5.79599 10.4281 5.70579C10.5412 5.60628 10.6737 5.53122 10.8172 5.48532C10.9606 5.43942 11.1121 5.42368 11.2619 5.43907C11.4118 5.45447 11.5568 5.50067 11.688 5.57479C11.8191 5.6489 11.9335 5.74932 12.024 5.86975L17.3037 12.4283C17.4644 12.6239 17.5523 12.8692 17.5523 13.1224C17.5523 13.3756 17.4644 13.6209 17.3037 13.8165L11.8382 20.3751C11.7286 20.5073 11.5893 20.6119 11.4316 20.6803C11.274 20.7487 11.1025 20.7789 10.931 20.7686Z" fill="#1EE1B3"/>
              </svg>
            </div>
            <div className='w-full text-[13px] text-white mt-6'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet 
            </div>
         </div>
         <div className='mt-7 mx-14 px-7 py-9 w-full'>
            <button className='bg-white text-black px-10 py-5 text-[14px] uppercase font-bold'>Learn more</button>
         </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
