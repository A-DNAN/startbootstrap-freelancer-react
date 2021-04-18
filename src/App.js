import './App.css';
import AboutSectionComponent from './component/aboutSectionComponent/AboutSectionComponent';
import ContactFormComponent from './component/contactFormComponent/ContactFormComponent';
import FooterComponent from './component/footerComponent/FooterComponent';
import HeaderComponent from './component/headerComponent/HeaderComponent';
import NavComponent from './component/navComponent/NavComponent';
import PortfolioSectionComponent from './component/portfolioSectionComponent/PortfolioSectionComponent';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.min.js";
import PortfolioPopupItemComponent from './component/portfolioSectionComponent/PortfolioPopupItemComponent';

function App() {
  return (

    <div className="App" id="page-top">
     
       <NavComponent/>
       <HeaderComponent />
       <PortfolioSectionComponent />
       <AboutSectionComponent />
       <ContactFormComponent />
       <FooterComponent />
       
        <div class="scroll-to-top d-lg-none position-fixed">
            <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i class="fa fa-chevron-up"></i></a>
        </div>

        <PortfolioPopupItemComponent  imgUrl="/portfolio/cabin.png" portfolioLabel="portfolioModalLabel"  portfolioId = "portfolioModal1"
       title="--"
       // pText ="----"
        />
        <PortfolioPopupItemComponent imgUrl="/portfolio/cake.png" portfolioLabel="portfolioModal2Label" portfolioId = "portfolioModal2"
        title="--"
        // pText ="----"
        />
        <PortfolioPopupItemComponent imgUrl="/portfolio/circus.png" portfolioLabel="portfolioModal3Label" portfolioId = "portfolioModal3"
        title="--"
        // pText ="----"
        />
        <PortfolioPopupItemComponent imgUrl="/portfolio/game.png" portfolioLabel="portfolioModal4Label" portfolioId = "portfolioModal4"
        title="--"
        // pText ="----"
        />
        <PortfolioPopupItemComponent imgUrl="/portfolio/safe.png" portfolioLabel="portfolioModal5Label" portfolioId = "portfolioModal5"
        title="--"
        // pText ="----"
        />
        <PortfolioPopupItemComponent imgUrl="/portfolio/submarine.png" portfolioLabel="portfolioModal6Label" portfolioId = "portfolioModal6"
        title="--"
        // pText ="----"
        />
        
    </div>
  );

}

export default App;
