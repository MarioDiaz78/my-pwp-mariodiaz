<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Portfolio</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <style>
        body{
        background-color: #000080;
        color: #FFFFFF;
        font-family: Arial, sans-serif;
    }

        .container {
        margin-top: auto;
        padding-top: 40px;
        padding-bottom: 40px;
        padding-left: 15px;
        padding-right: 15px;
    }

        nav{
        background-color: transparent;
        position: fixed;
        width: 100%;
        z-index: 1000;
        display: flex;
        justify-content: space-around;
        padding-top: 40px;
    }

        nav ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

        nav li{
        display: inline;
        margin-right: 20px
    }

        nav li a{
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        flex-grow: 1;
        flex-basis: auto;
        transition: transform .2s; /* gives the effect*/
    }

        nav li a:hover {
        color: black;
        transform: scale(1.1); /*this will make the text slightly larger*/
    }

        /* sets the perspective and scroll properties for the whole page */
        .wrapper {
        height: 100vh;
        overflow-x: hidden;  /* disables horizontal scrollbar when you scale an image */
        overflow-y: auto;
        perspective: 2px;   /* simulates the distance from the viewport to the pseudo-elements */
    }

        .profile-section {
        min-height: 100vh;
        text-align: left;
    }

        .parallax {
        min-height: 250px;  /*500*/
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

        .parallax::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /* background-image:; */
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        transform: translateY(-50%);
        will-change: transform;
        z-index:-1;
    }

        .parallax .parallax-content {
        position: relative;
        z-index: 1;
    }

        .fa-2x {
        font-size: 1em;
        line-height: .75em;
        vertical-align: -15%;
    }

        .icon-list {
        display: flex;
        justify-content: space-evenly;
        align-content: center;
        list-style: none;
    }

        .icon-list li {
        margin-bottom: 5px;
    }

        .skills-list {
        list-style: circle;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 5px;   /*sets distance in (li) flex container */
        margin: 0;
        padding: 0;
        align-content: center;
    }

        .skills-section{
        text-align: left;
    }

        .skills-list li {
        padding: 1px 1px;  /* 5px part adds padding top an bottom and 10 px left and right */
        background-color: dodgerblue;
        border-radius: 5px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        width: 100px;
        height: 25px;
        margin-bottom: 0;

    }

        @media (max-width: 600px){
        nav li a{
        padding: 10px;
        font-size: 0.8em;
        align-items: center;
        text-align: center;
    }

        .education-resume-section .col-lg-6{
        margin-top: 20px;
        margin-bottom: 20px;
    }

        .container{
        padding-left: 15px;
        padding-right: 15px;
        align-items: center;
        text-align: center;
    }

        .education-resume-section .col-lg-6:first-child{
        margin-bottom: 80px;
    }

    }


        .education-resume-section{
        text-align: center;
    }

        .projects-section{
        text-align: center;
    }

        .projects-section .row{
        flex-wrap: wrap;
    }

        a.button{
        display: inline-block;
        padding: 10px 20px;
        background-color: #0056b3;
        color: white;
        border-radius: 4px;
        transition: background-color 0.5s ease;
    }

        a.button:hover{
        background-color: lightskyblue;
    }
    </style>

</head>
<body data-scroll-container>
<main>
    <header>
        <nav>
            <ul>
                <li><a class="nav-link" href="#profile">Home</a></li>
                <li><a class="nav-link" href="#about">About</a></li>
                <li><a class="nav-link" href="#education">Education</a></li>
                <li><a class="nav-link" href="#skills">Skills</a></li>
                <li><a class="nav-link" href="#project">Projects</a></li>
            </ul>
        </nav>
    </header>


    <section id="profile" class="profile-section parallax d-flex justify-content-center align-items-center">
        <div data-scroll data-scroll-speed="1" class="container">
            <div class="row align-items-end g-1 py-5"> <!--<div class="row align-items-top g-1 py-5">-->
                <div class="col-lg-4">
                    <img src="https://www.si.com/.image/t_share/MTY4MTg2MDIyNzgyODM4MDMz/1988-michael-jordan-001238167_0jpg.jpg" class="mb-5 bd-placeholder-img rounded-circle img-responsive center-block d-block mx-auto" alt="air2" width="200" height="200">
                </div>
                <div class="col-lg-8">
                    <h1>Mario Diaz</h1>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about-section parallax d-flex justify-content-center">
        <div class="container">
            <div class="row align-items-top g-1 py-5">  <!--<div class="row g-3 py-5">-->
                <div class="col-lg-4">
                    <ul class="icon-list">
                        <li><a href="https://github.com/MarioDiaz78/" target="_blank">
                            <i class="fa-brands fa-github fa-2x"></i></a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/mario-diaz-400817198/" target="_blank">
                            <i class="fa-brands fa-linkedin fa-2x"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-8">
                    <h5>About me:</h5>
                    <p>
                        A dedicated professional with 18 years of experience at US Foods, now transitioning to a
                        career in web development and software development. Throughout my tenure in the warehouse
                        industry, I honed valuable skills in problem-solving, effective communication, and task
                        prioritization.
                    </p>
                    <p>
                        As a team leader, I excelled in conducting pre-shift meetings, delegating tasks, and making real-time adjustments to ensure smooth operations and team efficiency.  Although I'm new to the technical aspects of the field, I firmly believe that my problem-solving skills will seamlessly translate into success in the web development and software development.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section id="education" class="education-resume-section parallax d-flex justify-content-center">
        <div class="container">
            <div class="row g-1 py-5">  <!--<div class="row g-3 py-5">-->
                <div class="col-lg-6 text-center">
                    <h3>Education</h3>
                    <p>2021 - 2023</p>
                    <p>AS Computer Science</p>
                    <p>Central New Mexico</p>
                </div>
                <div class="col-lg-6 text-center">
                    <h3>Resume</h3>
                    <a href="https://ddc-web-student.cnm.edu/~mdiaz20/my-pwp-mariodiaz/Resume.pdf" class="button">Click Me</a>
                </div>
            </div>
        </div>
    </section>

    <section id="skills" class="skills-section parallax d-flex justify-content-center">
        <div class="container">
            <div class="row g-1 py-5">    <!--<div class="row g-3 py-5">-->
                <div class="col-lg-8">
                    <h5>Skills:</h5>
                    <p>By the end of this summer, I will have earned a Associates of Science degree in Computer
                        Science, laying a solid foundation for my new career path. Additionally, I will complete a
                        Full Stack Web Development bootcamp by mid-June, further enhancing my skill set and technical
                        expertise in the industry. Here are some skills I learned from classes I took in College,
                        Full Stack Web Development and others that were self-taught</p>
                </div>
                <div class="col-lg-4">
                    <ul class="skills-list">
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Git</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>MATLAB</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="project" class="projects-section parallax container">
        <div class="container" >
            <div class="row g-1 py-5">   <!--<div class="row">-->
                <div class="col-md">
                    <img src="picture1.png" class="mb-5 bd-placeholder-img rounded-circle img-responsive center-block d-block mx-auto" alt="javascriptI" width="200" height="200">
                        <a href="https://ddc-web-student.cnm.edu/~mdiaz20/my-pwp-mariodiaz/javascript-I.html"
                           class="button">JavaScript I</a>
                </div>
                <div class="col-md">
                    <img src="picture1.png" class="mb-5 bd-placeholder-img rounded-circle img-responsive center-block d-block mx-auto" alt="javascriptI" width="200" height="200">
                        <a href="https://ddc-web-student.cnm.edu/~mdiaz20/my-pwp-mariodiaz/ticTacToe.java"
                           class="button">Java I</a>
                </div>
                <div class="col-md">
                    <img src="picture1.png" class="mb-5 bd-placeholder-img rounded-circle img-responsive center-block d-block mx-auto" alt="javascriptI" width="200" height="200">
                        <a href="https://ddc-web-student.cnm.edu/~mdiaz20/my-pwp-mariodiaz/js-challenge.html"
                           class="button">JavaScript II
                        </a>
                </div>
                <div class="col-md">
                    <img src="picture1.png" class="mb-5 bd-placeholder-img rounded-circle img-responsive center-block d-block mx-auto" alt="javascriptI" width="200" height="200">
                        <a href="https://ddc-web-student.cnm.edu/~mdiaz20/my-pwp-mariodiaz/abqTravelTime.java"
                           class="button">Java
                            II</a>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div>
            <ul class="icon-list">
                <li><a href="https://github.com/MarioDiaz78/" target="_blank">
                    <i class="fa-brands fa-github fa-2x"></i></a>
                </li>
                <li><a href="https://www.linkedin.com/in/mario-diaz-400817198/" target="_blank">
                    <i class="fa-brands fa-linkedin fa-2x"></i></a>
                </li>
            </ul>
        </div>
    </footer>
</main>
<script>// Smooth scrolling
    $(document).ready(function () {
        $(".nav-link").on('click', function (event) {
            event.preventDefault();
            var hash = this.hash;
            var offsetTop = $(hash).offset().top;
            var extraScroll = 10;
            var scrollTo = offsetTop + extraScroll;

            $('html, body').animate({
                scrollTop: scrollTo
            }, 1500, function () {
                window.location.hash = hash;
            });
        });
    });

</script>
<script src="https://kit.fontawesome.com/2927b85e4d.js" crossOrigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
</body>
</html>