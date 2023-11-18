import Bigcontent from "./Bigcontent"
import Footer from "./Footer"
import { Gallery } from "./Gallery"
import { Hero } from "./Hero"
import Holiday from "./Holiday"
import Question from "./Question"
import Header from "./components/Header"
import Redeem from "./components/Redeem"

const cssBlock = {
  paddingX:"px-6 md:px-10 lg:px-20",
  paddingY:"py-20"

}
function App() {
  

  return (
    <>
      <div className={`${cssBlock.paddingX} min-h-[80px] md:sticky md:z-100 md:left-0 md:right-0 md:-top-3 md:pt-3`}>
                  <Header/>
      </div>
    <main>
            <div className={`${cssBlock.paddingX} ${cssBlock.paddingY}`}>
                  <Bigcontent/>
            </div>
            <div className={`${cssBlock.paddingX} ${cssBlock.paddingY}`}>
                  <Holiday/>
            </div>
            <div className={`${cssBlock.paddingX} ${cssBlock.paddingY}`}>
                  <Gallery/>
            </div>
           
             <Hero/>
            
            <div className={`${cssBlock.paddingX} ${cssBlock.paddingY}`}>
                  <Question/>
            </div>
            
    </main>
      <footer className=" bg-footer">
            <div className={`${cssBlock.paddingX} `}>
                  <Footer/>
            </div>
      </footer>
      <div className="sticky z-200 left-0 right-0 -bottom-3 pb-3">
            <Redeem/>
      </div>
   
    
    </>
  )
}

export default App
