import React from 'react'

export default function PortfolioPopupItemComponent(props) {
    return (
        <div class="portfolio-modal modal fade" id={props.portfolioId} tabindex="-1" role="dialog" aria-labelledby={props.portfolioLabel} aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content" >
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times"></i></span>
                    </button>
                    <div class="modal-body text-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">{props.title}</h2>
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <img class="img-fluid rounded mb-5" src={props.imgUrl} alt="" />
                                    <p class="mb-5">{props.pText?props.pText:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
