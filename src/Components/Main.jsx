import arrow from "../Images/right-arrow.png"
import "./Main.css"
import svg1 from "../Images/1.svg"
import svg2 from "../Images/2.svg"

import svg3 from "../Images/3.svg"
import svg4 from "../Images/4.svg"

export const Main = () => {
    return (
        <div>
            <section id="home">
                <div className="top">
                    
                </div>
            </section>

            <section id="services">
                <div className="soph">
                    <div>
                        <h2>Sophisticated plots at the foot of Nandi hills</h2>
                        <p>Canterbury Divine Arc is our Premium land bank with closest proximity to the Clubhouse. It is a great investment option for people who like a modern touch engulfed in natural surroundings</p>
                    </div>
                    <div className="btmsop">
                        <img src={"https://www.sobharealty.com/lp-properties-in-dubai/images/lp-2021/img-3Mar2021-2.jpg"} alt="" />
                        <div>
                            <h3>Why Choose Canterbury Divine Arc </h3>
                            <ul>
                                <li>Perfect 30/40 Plots</li>
                                <li>East and West facing plots makes it easier for you to choose from</li>
                                <li>The premium corner plots are a great option</li>
                                <li>G+1 gives each plot owner the assurance that his view is never blocked</li>
                                <li>No boundary walls around each plot gives you an unobstructed openness</li>
                                <li>Flexible Payment Plans</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section id="about">
                <div className="bottom">
                    <div className="btmleft">
                        <div>
                            <img src={svg1} alt="" />
                            
                            <p>East and West facing plots makes it easier for you to choose from</p>
                        </div>
                        <div>
                        <img src={svg2} alt="" />
                        <p>The premium corner plots are a great option</p>
                        </div>
                        <div>
                            <img src={svg3} alt="" />
                            <p>G+1 gives each plot owner the assurance that his view is never blocked</p>
                        </div>
                        <div>
                        <img src={svg4} alt="" />
                        <p>No boundary walls around each plot gives you an unobstructed openness</p>
                        </div>
                    </div>
                    <div className="btmright" id="contact">
                        <div className="righth3">
                            <h3>CONTACT US</h3>
                        </div>
                        <form action="">
                            <input type="text" placeholder="Name"/><hr />
                            <input type="text" placeholder="Mobile No"/><hr />
                            <input type="text" placeholder="Email"/><hr />
                            <button className="btn">Here You Go<img src={arrow} alt="" className="imgArrow"/></button>
                        </form>
                        
                    </div>
                </div>
            </section>
            {/* <div className=" footer">
                <h3>To More About Us</h3>
                <button className="btmbtn">Explore Now</button>
            </div> */}
        </div>
    )
}