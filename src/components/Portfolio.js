import React, { Component } from 'react';
import "./Portfolio.css";

export class Portfolio extends Component {

    render() {
        return (
            <section className="content-section" id="portfolio">
            <div className="container px-4 px-lg-5">
                <div className="content-section-heading text-center">
                    <h3 className="text-secondary mb-0">Bookfolio</h3>
                    <h2 className="mb-5">Lorem ipsum dolor sit amet consectetur.</h2>
                </div>
                <div className="row gx-0">
                    <div className="col-lg-6 col-sm-6">
                        <a className="portfolio-item" href="#!">
                            <div className="caption">
                                <div className="caption-content">
                                    <div className="h2">Lorem ipsum dolor</div>
                                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facilis voluptatem accusamus aliquam!</p>
                                </div>
                            </div>
                            <img className="img-fluid" src="https://cdn.1000kitap.com/resimler/kitaplar/43984_1441520975.jpg" alt="..." />
                        </a>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <a className="portfolio-item" href="#!">
                            <div className="caption">
                                <div className="caption-content">
                                    <div className="h2">Lorem ipsum dolor</div>
                                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facilis voluptatem accusamus aliquam!</p>
                                </div>
                            </div>
                            <img className="img-fluid" src="https://strgimgr.umico.az/originals/109833-dddf6f4549fc56e3fa076a5000635a9a.jpg" alt="..." />
                        </a>
                    </div>
                    <div className="col-lg-6 col-sm-6" style={{marginTop: "40px"}}>
                        <a className="portfolio-item" href="#!">
                            <div className="caption">
                                <div className="caption-content">
                                    <div className="h2">Lorem ipsum dolor</div>
                                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facilis voluptatem accusamus aliquam!</p>
                                </div>
                            </div>
                            <img className="img-fluid" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1422306047l/24702590.jpg" alt="..." />
                        </a>
                    </div>
                    <div className="col-lg-6 col-sm-6" style={{marginTop: "40px"}}>
                        <a className="portfolio-item" href="#!">
                            <div className="caption">
                                <div className="caption-content">
                                    <div className="h2">Lorem ipsum dolor</div>
                                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facilis voluptatem accusamus aliquam!</p>
                                </div>
                            </div>
                            <img className="img-fluid" src="https://static-sl.insales.ru/images/products/1/4321/197177569/Qaraqan_qapaq_Birinci_Addim.png" alt="..." />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Portfolio;
