"use strict";angular.module("cvApp",["ngAnimate","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","angular-svg-round-progressbar","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("cvApp").controller("MainCtrl",["$scope","$uibModal",function(a,b){a.openModal=function(){b.open({animation:!0,template:'<img ng-src="images/recommendation.d9e0529a.jpg">',controller:["$uibModalInstance","$scope",function(a,b){b.cancel=function(){a.dismiss("cancel")}}],size:"sm"})}}]),angular.module("cvApp").controller("SkillsCtrl",["$scope","$timeout","$window",function(a,b,c){a.max=100,a.js=30,a.html=30,a.css=30,a.angular=30,a.mongo=15,a.node=10,a.showPreciseCurrent=function(d){b(function(){if(0>=d)a.preciseCurrent=a.current;else{var b=c.Math;a.preciseCurrent=b.min(b.round(d),a.max)}})}}]),angular.module("cvApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="about"> <div class="about-me hide-element col-sm-12 col-xs-12"> <div class="about-me__picture col-sm-6 col-xs-12"> <h1 class="title">About me</h1> <img class="my-picture" ng-src="images/me.0cd6bd91.png"> <div class="contact-details"> <div class="phone"> <a href="tel:781880570">781 880 570 <i class="fa fa-phone"></i></a> </div> <div class="mail"> <a href="mailto:">katarzyna.jolanta.dusza(at)gmail.com <i class="fa fa-envelope"></i></a> </div> </div> </div> <div class="about-me__description col-sm-6 col-xs-12"> <p class="text"> Hi! My name is Kasia and I was born on 17 December 1993. I\'m a student of Computer Science at Silesian University of Technology, in February 2016 I received an engineer\'s degree. Since one year I\'ve been working as a programmer. </p> <p class="text text--wait"> Wait? A "woman-programmer"? No way! ;) </p> <p class="text"> A lot of programmers are divided for front-end or back-end developer.. So who am I? </p> <p class="text"> I\'m really excited, when I develop some front-end stuff. I really like getting to know new technologies. But on the other hand when I need to do some back-end\'s part for my application, I\'m not afraid - I like it also! For more information, please read the "Skills" or "Experience" bookmark. </p> <div class="text short-panel short-panel--work" onclick="goToExperience()">Experience</div> <div class="text short-panel short-panel--skills" onclick="goToSkills()">Skills</div> </div> </div> </div>'),a.put("views/education.html",'<div class="education"> <div class="education__history col-md-12"> <h1 class="title hide-element">Education</h1> <ul class="timeline"> <li class="timeline__element hide-element"> <div class="timeline-point"> <i class="fa fa-graduation-cap"></i> </div> <div class="timeline-panel"> <h5 class="timeline-title">Silesian University of Technology in Gliwice</h5> <p class="timeline-subtitle">Faculty of Automatic Control, Electronics and Computer Science</p> <p><small class="text-muted"><i class="fa fa-clock-o"></i> 2016 - now</small></p> <div class="timeline-body"> <p>First-year Computer Science of full-time second-degree, specialization: Internet and Network\'s Technologies</p> </div> </div> </li> <li class="timeline__element timeline__element-inverted hide-element"> <div class="timeline-point"><i class="fa fa-graduation-cap"></i></div> <div class="timeline-panel"> <h5 class="timeline-title">Silesian University of Technology in Gliwice</h5> <p class="timeline-subtitle">Faculty of Automatic Control, Electronics and Computer Science</p> <p><small class="text-muted"><i class="fa fa-clock-o"></i> 2012 - 2016</small></p> <div class="timeline-body"> <p>Computer Science of full-time undergraduate degree, completed with an engineer\'s degree, specialization: Computer Graphics and Software</p> </div> </div> </li> <li class="timeline__element hide-element"> <div class="timeline-point"><i class="fa fa-graduation-cap"></i></div> <div class="timeline-panel"> <h5 class="timeline-title">II High School of C. K. Norwida in Tychy</h5> <p><small class="text-muted"><i class="fa fa-clock-o"></i> 2009 - 2012</small></p> <div class="timeline-body"> <p>Mathematics and physics class</p> </div> </div> </li> </ul> </div> </div>'),a.put("views/footer.html",'<div class="footer"> <div class="footer-element col-md-12 col-sm-12 col-xs-12"> <div class="footer-element__download col-md-3 col-sm-3 col-xs-12"> <a href="pdfs/CV_Katarzyna_Dusza.pdf" download>Download as .PDF</a> </div> <div class="footer-element__other-page col-md-3 col-sm-3 col-xs-4"> <a href="https://twitter.com/k_dusza"><i class="arrow fa fa-twitter fa-3x" aria-hidden="true"></i></a> </div> <div class="footer-element__other-page col-md-3 col-sm-3 col-xs-4"> <a href="https://pl.linkedin.com/in/katarzyna-dusza-4635b5127"><i class="arrow fa fa-linkedin fa-3x" aria-hidden="true"></i></a> </div> <div class="footer-element__other-page col-md-3 col-sm-3 col-xs-4"> <a href="https://github.com/katarzyna-dusza"><i class="arrow fa fa-github fa-3x" aria-hidden="true"></i></a> </div> </div> <div class="footer__all-reserved col-md-12 col-sm-12 col-xs-12"> <p>© 2016 Katarzyna Dusza</p> </div> </div>'),a.put("views/main.html",'<div class="welcome-page"> <div class="welcome-page__text"> <h3>Hello! My name is</h3> <h1>Katarzyna Dusza</h1> <h3>I\'m a Junior Front-end Developer</h3> </div> <div class="welcome-page__other-pages col-xs-12"> <div class="col-xs-4"> <div class="circle circle--right"> <a href="https://twitter.com/k_dusza"> <i class="arrow fa fa-twitter fa-3x" aria-hidden="true"></i> </a> </div> </div> <div class="col-xs-4"> <div class="circle"> <a href="https://pl.linkedin.com/in/katarzyna-dusza-4635b5127"> <i class="arrow fa fa-linkedin fa-3x" aria-hidden="true"></i> </a> </div> </div> <div class="col-xs-4"> <div class="circle circle--left"> <a href="https://github.com/katarzyna-dusza"> <i class="arrow fa fa-github fa-3x" aria-hidden="true"></i> </a> </div> </div> </div> <div class="welcome-page__read-more"> <i class="arrow fa fa-angle-down fa-3x" aria-hidden="true" onclick="goToAbout()"></i> </div> <div class="scroll" onclick="goToTop()"> <i class="fa fa-angle-up fa-3x" aria-hidden="true"></i> </div> </div> <ng-include src="\'views/about.html\'"></ng-include> <ng-include src="\'views/education.html\'"></ng-include> <ng-include src="\'views/skills.html\'"></ng-include> <ng-include src="\'views/work.html\'"></ng-include> <ng-include src="\'views/footer.html\'"></ng-include>'),a.put("views/skills.html",'<div class="skills" ng-controller="SkillsCtrl"> <h1 class="title hide-element">Skills</h1> <div class="skills-element col-md-12 col-sm-12"> <div class="circle-center hide-element col-md-4 col-sm-4 col-xs-6"> <div class="title title--circle"><h3>JavaScript</h3></div> <round-progress max="max" current="js" color="#45ccce" bgcolor="#eaeaea" radius="125" stroke="15" semi="false" rounded="false" clockwise="true" responsive="true" duration="1500" le animation="easeOutCubic" animation-delay="1500" offset="60" on-render="showPreciseCurrent"> </round-progress> </div> <div class="circle-center hide-element col-md-4 col-sm-4 col-xs-6"> <div class="title title--circle"><h3>HTML</h3></div> <round-progress max="max" current="html" color="#45ccce" bgcolor="#eaeaea" radius="125" stroke="15" semi="false" rounded="false" clockwise="true" responsive="true" duration="1500" le animation="easeOutCubic" animation-delay="1500" offset="60" on-render="showPreciseCurrent"> </round-progress> </div> <div class="circle-center hide-element col-md-4 col-sm-4 col-xs-6"> <div class="title title--circle"><h3>CSS</h3></div> <round-progress max="max" current="css" color="#45ccce" bgcolor="#eaeaea" radius="125" stroke="15" semi="false" rounded="false" clockwise="true" responsive="true" duration="1500" le animation="easeOutCubic" animation-delay="1500" offset="60" on-render="showPreciseCurrent"> </round-progress> </div> <div class="circle-center hide-element col-md-4 col-sm-4 col-xs-6"> <div class="title title--circle"><h3>AngularJS</h3></div> <round-progress max="max" current="angular" color="#45ccce" bgcolor="#eaeaea" radius="125" stroke="15" semi="false" rounded="false" clockwise="true" responsive="true" duration="1500" le animation="easeOutCubic" animation-delay="1500" offset="60" on-render="showPreciseCurrent"> </round-progress> </div> <div class="circle-center hide-element col-md-4 col-sm-4 col-xs-6"> <div class="title title--circle"><h3>MongoDB</h3></div> <round-progress max="max" current="mongo" color="#45ccce" bgcolor="#eaeaea" radius="125" stroke="15" semi="false" rounded="false" clockwise="true" responsive="true" duration="1500" le animation="easeOutCubic" animation-delay="1500" offset="60" on-render="showPreciseCurrent"> </round-progress> </div> <div class="circle-center hide-element col-md-4 col-sm-4 col-xs-6"> <div class="title title--circle"><h3>NodeJS</h3></div> <round-progress max="max" current="node" color="#45ccce" bgcolor="#eaeaea" radius="125" stroke="15" semi="false" rounded="false" clockwise="true" responsive="true" duration="1500" le animation="easeOutCubic" animation-delay="1500" offset="60" on-render="showPreciseCurrent"> </round-progress> </div> </div> </div>'),a.put("views/work.html",'<div class="work"> <div class="work__history col-md-12"> <h1 class="title hide-element">Experience</h1> <ul class="timeline"> <li class="timeline__element hide-element"> <div class="timeline-point"> <i class="fa fa-briefcase"></i> </div> <div class="timeline-panel"> <h5 class="timeline-title">XSolve, Gliwice</h5> <p class="timeline-subtitle">Junior Software Developer</p> <p><small class="text-muted"><i class="fa fa-clock-o"></i> October 2015 - now</small></p> <div class="timeline-body"> <p> As a Junior Software Developer I worked on a "presentation" app as well as other projects. During that, I expanded my knowledge about AngularJS, Protractor, pure JavaScript and jQuery. During my work at XSolve I learnt how to a write professional code and make a beautiful design. </p> </div> </div> </li> <li class="timeline__element timeline__element-inverted hide-element"> <div class="timeline-point"> <i class="fa fa-briefcase"></i> </div> <div class="timeline-panel"> <h5 class="timeline-title">XSolve, Gliwice</h5> <p class="timeline-subtitle">Internship</p> <p><small class="text-muted"><i class="fa fa-clock-o"></i> July 2015 - September 2015</small></p> <div class="timeline-body"> <p> During my internship I worked as a frontend developer. We used Scrum to improve our development process. We used AngularJS framework to make frontend application and Yii2 with PHP to make a backend webservice. My team developed an application, which was similar to presentation like PowerPoint, but the main difference was synchronization between presenter and client via Websockets. In addition we used Protractor and Jasmine to make UI tests. </p> </div> </div> </li> <li class="timeline__element hide-element"> <div class="timeline-point"><i class="fa fa-briefcase"></i></div> <div class="timeline-panel"> <h5 class="timeline-title">Autea, Gliwice</h5> <p class="timeline-subtitle">Internship</p> <p><small class="text-muted"><i class="fa fa-clock-o"></i> July 2014</small></p> <div class="timeline-body"> <p> During my internship I gained experience in web application development. It was based on REST API. I used the Codeigniter framework and Git for revision control. I also wrote in JavaScipt and HTML to create views and validation. I expanded my knowledge about the Bootstrap. The project was based on SCRUM methodology and Trello, which was used to control the product backlog and others.</p> </div> <div class="recommendation" ng-controller="MainCtrl"> <button class="btn btn-sm" ng-click="openModal()">Recommendation</button> </div> </div> </li> </ul> </div> </div>')}]);
