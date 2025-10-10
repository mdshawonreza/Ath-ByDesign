
import './App.css'

function App() {
 

  return (
    <>
      
      <h1>Vite + React</h1>
       
      
             
      
              
      
      
              
      
             



<div
        ref={videoContainerRef}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        <iframe
          ref={videoRef}
          onClick={handleVideoClick}
          className="
            fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            object-cover 
            w-[60vw] h-[40vh] 
            md:w-[70vw] md:h-[50vh] 
            sm:w-[90vw] sm:h-[30vh] 
            z-0 cursor-pointer rounded-xl shadow-2xl bg-red-600
          "
          src="https://www.youtube.com/embed/b5HtjqVjTqo?autoplay=1&mute=1&controls=0&loop=1&playlist=b5HtjqVjTqo&modestbranding=1&rel=0&showinfo=0&enablejsapi=1&playsinline=1"
          title="Sport Promo Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
              
              
      
              
      
      
            
              
      
              
      
              { /* Section 12 -  */}
              {/* <motion.div
                ref={addToRefs}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                variants={containerVariants}
                className="absolute top-0 left-0 w-[50%] min-h-screen flex items-center  pl-8"
              >
                <section className=" text-white py-16 w-full">
                  <div className=" ">
      
      
      
                   
                    <div className="grid grid-cols-1  items-center pt-16">
      
                   
                      <div className='flex flex-col h-full '>
                        <div className='h-1/2'>
      
                        </div>
                        <div className='border-t-2 border-white h-1/2 p-6'>
                        
                          <div className=" mb-4 ">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">From Akron</h2>
                            <p className="text-gray-300 max-w-md">
                              The change the world began as he established The LeBron James Family Foundation.
                            </p>
                          </div>
      
                        </div>
                      </div>
      
      
      
      
      
                    </div>
      
                  </div>
                </section>
              </motion.div> */}
      
              
      
      
              { /* Section 14 -  */}
              {/* <motion.div
                ref={addToRefs}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                variants={containerVariants}
                className="absolute top-0 left-0 w-[50%] min-h-screen flex items-center  "
              >
                <section className=" text-white py-16 w-full">
                  <div className=" ">
      
      
      
                   
                    <div className="grid grid-cols-1  items-center bg ">
      
                    
                      <div className='flex flex-col h-full '>
                        <div className='h-1/2'>
      
                        </div>
                        <div className=' h-1/2'>
                          <div className='border-t-2 border-white  p-6'>
                         
                            <div className=" mb-4 ">
                              <h2 className="text-3xl md:text-4xl font-bold mb-4">From Akron</h2>
                              <p className="text-gray-300 max-w-md">
                                The change the world began as he established The LeBron James Family Foundation.
                              </p>
                            </div>
      
                          </div>
                        </div>
                      </div>
      
      
      
      
      
                    </div>
      
                  </div>
                </section>
              </motion.div> */}
      
      
        
    </>
  )
}

export default App
