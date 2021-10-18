import React from 'react'
import "./Detail.css";

function Detail() {
    return (
        <div>
            <header>
                <a className="logoContainer">
                    <a className="logo">
                        <h2>EDYODA</h2>
                        <p>Stories</p>
                    </a>
                    <a>
                        <button className="dropdownText">Explore  Categories</button><i class="fa fa-chevron-down" ></i>
                    </a>
                    <a className="platform">EdYoda is free learning and knowledge<br />
                        sharing platform for techies</a>
                    <a> <button className="head-button">Go To Main Website</button></a>
                </a>
            </header>


            <section className="trending-post-container">
                <h1 className="heading">Latest Posts</h1>
                <div className="categories-container">
                    <i className="fa fa-filter"></i>
                    <span className="filter-text"> Filter by Category</span>
                    <div className="categories-list">
                        <a className="category-item active" >All</a>
                        <a className="category-item" >Artificial Intelligence</a>
                        <a className="category-item" >Cloud Computing</a>
                        <a className="category-item" >DevOps</a>
                        <a className="category-item" >Programming Languages</a>
                        <a className="category-item" >Mobile Application Development</a>
                        <a className="category-item" >Technology And Tools</a>
                        <a className="category-item" >Get a job in a Tech Company</a>
                        <a className="category-item" >Others</a>
                    </div>
                </div>
            </section>
            <section className="card-wrapper">

                <div id="card-data">

                    <article className="card-container">
                        <a>
                            <div className="card-header">
                                <img className="card-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png" alt="Machine Learning" />
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    <p className="card-title">Introduction to a Machine Learning Online Course</p>
                                    <p className="auth-wrapper"><span class="card-author"> Edyoda </span>|
                                        <span className="card-date">23 Aug 2019</span>
                                    </p>
                                    <p className="card-desc">
                                        We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds to begin with oneize.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article className="card-container">
                        <a>
                            <div className="card-header">
                                <img className="card-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png" />
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    <p className="card-title">LAMP Stack Vs. MEAN Stack</p>
                                    <p className="auth-wrapper"><span class="card-author"> Edyoda </span>|
                                        <span className="card-date">24 Aug 2019</span>
                                    </p>
                                    <p className="card-desc">
                                        In today’s dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement. Many organizations around the world that intensely depend on programming for their everyday business.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article className="card-container">
                        <a>
                            <div className="card-header">
                                <img className="card-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png" />
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    <p className="card-title">Impact of Cloud Computing in various industries</p>
                                    <p className="auth-wrapper"><span class="card-author"> Edyoda </span>|
                                        <span className="card-date">24 Aug 2019</span>
                                    </p>
                                    <p className="card-desc">
                                        Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud technology as part of their business structure.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article class="card-container">
                        <a>
                            <div class="card-header">
                                <img class="card-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/3_Qbv1T8k.png" />
                            </div>
                            <div class="card-body">
                                <div class="card-content">
                                    <p class="card-title">Challenges of Machine Learning in Big Data Analytics</p>
                                    <p class="auth-wrapper"><span class="card-author"> Edyoda </span>|
                                        <span class="card-date">24 Aug 2019</span>
                                    </p>
                                    <p class="card-desc">
                                        Machine Learning is a subset of artificial intelligence which is an important part of computer science.The revolution of Big Data promises to transform the way we work live and think by enabling the process of optimization.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </article>

                    <article class="card-container">
                        <a>
                            <div class="card-header">
                                <img class="card-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/5_9jUbbUb.png" />
                            </div>
                            <div class="card-body">
                                <div class="card-content">
                                    <p class="card-title">Breaking the Myths around Cybersecurity</p>
                                    <p class="auth-wrapper"><span class="card-author"> Edyoda </span>|
                                        <span class="card-date">26 Aug 2019</span>
                                    </p>
                                    <p class="card-desc">
                                        Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the way we work, live and think by enabling the process of optimization, discovering.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </article>

                    <article class="card-container">
                        <a>
                            <div class="card-header">
                                <img class="card-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/7_WsnOXes.png" />
                            </div>
                            <div class="card-body">
                                <div class="card-content">
                                    <p class="card-title">Importance of Data Backup and Recovery in the IT industry</p>
                                    <p class="auth-wrapper"><span class="card-author"> Edyoda </span>|
                                        <span class="card-date">26 Aug 2019</span>
                                    </p>
                                    <p class="card-desc">
                                        A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the main precautions or a contingency plan that is necessary for every business and especially industries working with clouds.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </article>

                </div>
            </section>
            <footer className="footer">
                <a className="foot1">
                    <h2>EDYODA</h2><br />
                    <p>About Us</p><br />
                    <p>Contact Us</p><br />
                    <p>Terms of Use</p><br />
                    <p>Privacy Policy</p>
                </a>
                <a className="foot2">
                    <h2>RESOURCES</h2><br />
                    <p>Courses</p><br />
                    <p>Learning Videos</p><br />
                    <p>Educators</p><br />
                    <p>EdYoda Stories</p><br />
                    <p>University</p>
                </a>
                <a className="foot3">
                    <h2>FOR ENTERPRISES</h2><br />
                    <p>Train Your Employees</p><br />
                    <h2>QUICK LINKS</h2><br />
                    <p>Learn and Earn</p><br />
                    <p>Become a Learning-Enabler</p><br />
                    <p>Tips for Learning-Enabler</p><br />
                   <p> Request New Topic</p><br />
                </a>
                <a className="foot4">
                    <h2>CONNECT</h2><br/>
                   <p> 2nd Floor #188, Survey No. - 123/1,</p><br/>
                    <p>Incubes Building Next to McDonalds,</p><br/>
                   <p> ITPL Main Rd, Brookefield,</p><br/>
                    <p>Bengaluru, Karnataka-560037,</p><br/>
                    <p>India</p><br/>
                   <p> <i class="far fa-envelope"></i>hello@edyoda.com</p><br/>
                   <i class="fas fa-map-marker-alt"></i>
                   <i class="fab fa-twitter"></i>
                   <i class="fab fa-facebook-f"></i>
                   <i class="fab fa-linkedin-in"></i>
                    © 2021<br/>
                    zekeLabs Technologies Private Limited<br/>
                </a>

            </footer>


        </div>
    )
}

export default Detail
