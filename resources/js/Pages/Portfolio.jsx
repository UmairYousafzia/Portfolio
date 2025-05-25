import React from 'react'
import MainLayout from './MainLayout'
import bricks from "./../../images/projects/Bigbracks.png";
import dashboard from "./../../images/projects/dashboard.png";
import laptop from "./../../images/projects/laptop.png";
import content from "./../../images/projects/content.png";

const Portfolio = () => {
  return (
    <MainLayout>
      <div id="portfolio" class="project-style-one-area default-padding">

            <div class="container_hh">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="heading-left">
                            <h4 class="sub-title">Recent Work</h4>
                            <h2 class="title">Showcasing My Projects</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container_hh">
                <div class="row mt--50">
                    <div class="col-lg-6 item-center">
                        <div class="portfolio-style-one">
                            <div class="thumb-zoom">
                                <img src={bricks} alt="Image Not Found"/>
                            </div>
                            <div class="pf-item-info">
                                <div class="content-info">
                                    <span>FIGMA TO HTML CSS</span>
                                    <h2><a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal">
                                        FRONT END WITH PIXEL PERFECT</a></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                    <div class="col-lg-6 item-center">
                        <div class="portfolio-style-one">
                            <div class="thumb-zoom">
                                <img src={dashboard} alt="Image Not Found"/>
                            </div>
                            <div class="pf-item-info">
                                <div class="content-info">
                                    <span>FYP Projects</span>
                                    <h2><a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal">
                                        Web Application Molars and incisors</a></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                    <div class="col-lg-6 item-center">
                        <div class="portfolio-style-one">
                            <div class="thumb-zoom">
                                <img src={laptop} alt="Image Not Found"/>
                            </div>
                            <div class="pf-item-info">
                                <div class="content-info">
                                    <span>Simple FrontEnd Pages</span>
                                    <h2><a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal">Make a website for Client with four webPages</a></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div class="col-lg-6 item-center">
                        <div class="portfolio-style-one">
                            <div class="thumb-zoom">
                                <img src={content} alt="Image Not Found"/>
                            </div>
                            <div class="pf-item-info">
                                <div class="content-info">
                                    <span>WebSite For Client</span>
                                    <h2><a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal"> Consist Of Five Webpages </a></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

        </div>
    </MainLayout>
  )
}

export default Portfolio
