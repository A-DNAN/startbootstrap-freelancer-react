import React, { Component } from 'react';
import PortfolioItemComponent from './PortfolioItemComponent';

class PortfolioSectionComponent extends Component {
    render() {
        return (
            <section class="page-section portfolio" id="portfolio">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row">
                    <PortfolioItemComponent Div1style="col-md-6 col-lg-4 mb-5"
                    Div2style="portfolio-item mx-auto"
                    Div3style="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                    Div4style="portfolio-item-caption-content text-center text-white"
                    imgStyle="img-fluid"
                    imgUrl="/portfolio/cabin.png"
                    portfolioTargetModel="#portfolioModal1"
                     />
                    <PortfolioItemComponent Div1style="col-md-6 col-lg-4 mb-5"
                    Div2style="portfolio-item mx-auto"
                    Div3style="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                    Div4style="portfolio-item-caption-content text-center text-white"
                    imgStyle="img-fluid"
                    imgUrl="/portfolio/cake.png"
                    portfolioTargetModel="#portfolioModal2"
                     />
                    <PortfolioItemComponent Div1style="col-md-6 col-lg-4 mb-5"
                    Div2style="portfolio-item mx-auto"
                    Div3style="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                    Div4style="portfolio-item-caption-content text-center text-white"
                    imgStyle="img-fluid"
                    imgUrl="/portfolio/circus.png"
                    portfolioTargetModel="#portfolioModal3"
                     />
                    <PortfolioItemComponent Div1style="col-md-6 col-lg-4 mb-5 mb-lg-0"
                    Div2style="portfolio-item mx-auto"
                    Div3style="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                    Div4style="portfolio-item-caption-content text-center text-white"
                    imgStyle="img-fluid"
                    imgUrl="/portfolio/game.png"
                    portfolioTargetModel="#portfolioModal4"
                     />
                    <PortfolioItemComponent Div1style="col-md-6 col-lg-4 mb-5 mb-md-0"
                    Div2style="portfolio-item mx-auto"
                    Div3style="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                    Div4style="portfolio-item-caption-content text-center text-white"
                    imgStyle="img-fluid"
                    imgUrl="/portfolio/safe.png"
                    portfolioTargetModel="#portfolioModal5"
                     />
                    <PortfolioItemComponent Div1style="col-md-6 col-lg-4"
                    Div2style="portfolio-item mx-auto"
                    Div3style="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                    Div4style="portfolio-item-caption-content text-center text-white"
                    imgStyle="img-fluid"
                    imgUrl="/portfolio/submarine.png"
                    portfolioTargetModel="#portfolioModal6"
                     />
                </div>
            </div>
        </section>
        );
    }
}

export default PortfolioSectionComponent;