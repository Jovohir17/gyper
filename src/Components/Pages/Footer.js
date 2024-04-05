import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <>
                <footer>
                    <img data-aos="fade-down"
                         data-aos-duration="3000" src="/imgs/img.png" alt=""/>
                    <h2 data-aos="fade-right"
                        data-aos-duration="3000" className="double-line">Делаем  продающие </h2>
                    <h3 data-aos="fade-right"
                        data-aos-duration="2000">Сайты <span data-aos="fade-right"
                                                             data-aos-duration="3000">.</span></h3>

                    <button data-aos="fade-right"
                            data-aos-duration="1000">
                        Обсудить проект
                    </button>

                </footer>
            </>
        );
    }
}

export default Footer;