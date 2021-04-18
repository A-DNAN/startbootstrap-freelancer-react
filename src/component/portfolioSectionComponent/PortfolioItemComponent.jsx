import React from 'react'

export default function PortfolioItemComponent(props) {
    return (
           <div class={props.Div1style}>
                 <div class={props.Div2style} data-toggle="modal" data-target={props.portfolioTargetModel}>
                       <div class={props.Div3style}>
                            <div class={props.Div4style}>
                                <i class="fas fa-plus fa-3x"></i>
                            </div>
                       </div>
                       <img class={props.imgStyle} src={props.imgUrl} alt="" />
                 </div>
        </div> 
    )
}
