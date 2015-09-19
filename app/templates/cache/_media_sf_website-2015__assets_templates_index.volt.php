<!DOCTYPE>
	<!--[if lt IE 7 ]> <html class="ie6" id="root" lang="en"> <![endif]-->
	<!--[if IE 7 ]> <html class="ie7" id="root" lang="en"> <![endif]-->
	<!--[if IE 8 ]> <html class="ie8" id="root" lang="en"> <![endif]-->
	<!--[if gt IE 8 ]> <html class="ie9" id="root" lang="en"> <![endif]-->
	<!--[if (gt IE 9)|!(IE)]><!--> <html id="root" lang="en"> <!--<![endif]-->
	<head>
		<base href="http://local.alta-blue.com">
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Altablue - We keep recruitment simple. We focus on creating lasting relationships with our clients and delivering on our promises.">
		<meta name="author" content="Altablue">
		<title>
		    Altablue - We keep recruitment simple. We focus on creating lasting relationships with our clients and delivering on our promises.
		</title>
		<link rel="stylesheet" href="/css/slide.css" />
		<link rel="stylesheet" href="/css/main.min.css" />
		<link rel="stylesheet" href="/css/animate.min.css" />
		<!--[if lt IE 9]>
		  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->

	</head>
	<body id="main">
		<div class="mp-pusher" id="mp-pusher">
			<header class="clearing" id="theNav">
				<div class="container">
					<section id="logo" class='gapless three left'>
						<a data-router-name="home" href="/"><figure><img src="/imgs/svgs/logo.svg" /></figure></a>
					</section>
									<nav class="mobile-only" id="trigger">
					<a href="javascript:void(0)" class="icon-menu icon">menu</a>
				</nav>
				<nav id="theMenu" class="half pushright gapless">	
					<ul>
						<li class="nav-link hover-menu">
							<a class="top-parent quarter col" href="javascript:void(0)">Employers</a>
							<div class="submenu col clearing">
								<ul class="col left whole links">
									<div id="slider">
										<div class="menuone half col left">
											<li><a href="/">Homepage</a></li>
											<li class="hover-menu">
												<a href="javascript:void(0)" id="servicesLink" data-menu="servicesMenu" class="hover-menu-item">Services</a>
											</li>
											<li class="hover-menu">
												<a href="javascript:void(0)" id="csLink" data-menu="cdMenu" class="hover-menu-item">Case Studies</a>
											</li>
											<li class="hover-menu">
												<a href="javascript:void(0)" id="aboutLink" data-menu="aboutMenu" class="hover-menu-item">About&nbsp;Altablue</a>
											</li>
											<li><a href="#">Contact Us</a></li>
										</div>
										<div class="menutwo half col pushright">
											<ul class="submenu whole col" id="servicesMenu">
												<li><a data-menu="servicesLink" href="javascript:void(0)" class="backLink">&larr; Services</a></li>
												<li><a href="/services/talent-on-demand" data-router-name="services.on-demand">Talent On-Demand</a></li>
												<li><a href="/services/recruitment-process-outsourcing" data-router-name="services.recruitment-process-outsourcing">Recruitment Process Outsourcing</a></li>
												<li><a href="/services/contingent-workforce-solutions" data-router-name="services.contingent-workforce-solutions">Contigent Workforce</a></li>
												<li><a href="/services/executive-search" data-router-name="services.executive-search">Executive Search</a></li>
											</ul>
											<ul class="submenu whole col" id="aboutMenu">
												<li><a data-menu="aboutLink" href="javascript:void(0)" class="backLink">&larr; About Altablue</a></li>
												<li><a href="/about-altablue/" data-router-name="about">Our Ethos</a></li>
												<li><a href="/social-responsibility/" data-router-name="social-responsibility">Social Responsibility</a></li>
												<li><a href="/sectors/" data-router-name="sectors">Our Sectors</a></li>
											</ul>
											<ul class="submenu whole col" id="cdMenu">
												<li><a data-menu="csLink" href="javascript:void(0)" class="backLink">&larr; Case Studies</a></li>
												<li><a href="javascript:void(0)">Regional Well Integrity Manager</a></li>
												<li><a href="javascript:void(0)">Wind Farm Manager</a></li>
												<li><a href="javascript:void(0)">Senior Wind Analysis Consultant</a></li>
											</ul>
										</div>
									</div>
								</ul>
							</div>
						</li>
						<li><a class="top-parent quarter col" href="https://jobs.alta-blue.com" target="_blank">Job Seekers</a></li>
						<li><a class="top-parent quarter col" href="http://blog.alta-blue.com" target="_blank">News</a></li>
						<li><a class="top-parent quarter col" data-router-name="contact" href="/contact/">Contact</a></li>
					</ul>
				</nav>
				</div>
			</header>

			<div id="results"></div>
			<div class="scroller">
				<div class="scroller-inner">

		<section id="ui-view">
			<?php $this->partial($partials); ?>
		</section>


					<footer class="clearing">
						<section id="top-footer">
							<div class="container">
								<ul class="left col sixth">
									<li class="top"><strong>Services</strong></li>
									<li><a href="/services/on-demand" data-router-name="services.on-demand">on-demand</a></li>
									<li><a href="/services/contingent-workforce-solutions" data-router-name="services.contingent-workforce-solutions">Contingent Workforce Solutions</a></li>
									<li><a href="/services/recruitment-process-outsourcing" data-router-name="services.recruitment-process-outsourcing">Recruitment Process Outsourcing</a></li>
									<li><a href="/services/executive-search" data-router-name="services.executive-search">Executive Search</a></li>
								</ul>
								<ul class="left col sixth">
									<li class="top"><strong>case studies</strong></li>
									<li><a href="javascript:void(0)">wind farm manager</a></li>
									<li><a href="javascript:void(0)">senior wind analysis</a></li>
									<li><a href="javascript:void(0)">regional well integrity</a></li>
								</ul>
								<ul class="left col sixth">
									<li class="top"><strong>about altablue</strong></li>
									<li><a href="/about-altablue" data-router-name="about">our ethos</a></li>
									<li><a href="/social-responsibility" data-router-name="social-responsibility">social responsibility</a></li>
									<li><a href="/sectors" data-router-name="sectors">sectors</a></li>
								</ul>
								<ul class="left col sixth">
									<li class="top"><strong>contact</strong></li>
									<li><a href="/contact" data-router-name="contact">contact us</a></li>
									<li><a href="javascript:void(0)" class="icon icon-twitter">twitter</a></li>
									<li><a href="javascript:void(0)" class="icon icon-facebook">facebook</a></li>
									<li><a href="javascript:void(0)" class="icon icon-linkedin">linkedin</a></li>
									<li><a href="javascript:void(0)" class="icon icon-google">google+</a></li>
								</ul>
								<div class="search left col twosixths clearing">
									<p><strong>search</strong></p>
									<form id="searchForm" class="whole col clearing" method="get" action="http://cse.google.com/cse" id="searchbox_005585113151212812630:gmjohstk8se">
										<input type="hidden" name="cx" value="005585113151212812630:gmjohstk8se" />
										<input type="hidden" name="q" id="qField" />
										<input type="text" name="oq" id="oqField" class="threequarters left gapless icon icon-search" /><button class="quarter pushright gapless button" type="submit">search</button>
									</form>
									<div class="half left col">
										<div class="whole clearing">
											<p><strong>general enquiries</strong></p>
											<p><em>Tel: </em><a href="tel:+441224777878">(+44) 1224 777878</a></p>
											<p><em>Fax: </em><a href="tel:+441224373012">(+44) 1224 373012</a></p>
										</div>
										<div class="whole clearing">
											<p><strong>Invoice Enquiries</strong></p>
											<p><em>Tel: </em><a href="tel:+441224777850">(+44) 1224 777850</a></p>
										</div>
									</div>
									<div class="half pushright col">
										<div class="whole clearing">
											<p><strong>Contractor Care</strong></p>
											<p><em>Tel: </em><a href="tel:+441224777859">(+44) 1224 777859</a></p>
										</div>	
									</div>
								</div>
							</div>
						</section>
						<section id="bottom-footer">
							<div class="container">
								<div class="quarter col left">
									<p><small>&copy; Copyright 2015 Altablue. All Rights Reserved.</small></p>
								</div>
								<div class="quarter col pushright">
									<ul>
										<li><a href="/legal/terms">terms</a></li>
										<li><a href="/legal/privacy">privacy</a></li>
										<li><a href="/legal/cookies">cookies</a></li>
									</ul>
								</div>
							</div>
						</section>
					</footer>
				</div>	
			</div>

			<nav id="mp-menu" class="mp-menu">
				<div class="mp-level">
					<h2 class="">All Categories</h2>
					<ul>
						<li class="icon icon-arrow-left">
							<a class="" href="javascript:void(0)">Employers</a>
							<div class="mp-level">
								<h2 class="">Employers</h2>
								<a class="mp-back" href="javascript:void(0)">back</a>
								<ul>
									<li class="icon icon-arrow-left">
										<a class="" href="javascript:void(0)">Services</a>
										<div class="mp-level">
											<h2>Services</h2>
											<a class="mp-back" href="javascript:void(0)">back</a>
											<ul>
												<li><a href="/services/on-demand" data-router-name="services.on-demand">on-demand</a></li>
												<li><a href="/services/contingent-workforce-solutions" data-router-name="services.contingent-workforce-solutions">Contingent Workforce Solutions</a></li>
												<li><a href="/services/recruitment-process-outsourcing" data-router-name="services.recruitment-process-outsourcing">Recruitment Process Outsourcing</a></li>
												<li><a href="/services/executive-search" data-router-name="services.executive-search">Executive Search</a></li>
											</ul>
										</div>
									</li>
									<li class="icon icon-arrow-left">
										<a class="" href="javascript:void(0)">Case Studies</a>
										<div class="mp-level">
											<h2>Case Studies</h2>
											<a class="mp-back" href="javascript:void(0)">back</a>
											<ul>
												<li><a href="javascript:void(0)">Regional Well Integrity Manager</a></li>
												<li><a href="javascript:void(0)">Wind Farm Manager</a></li>
												<li><a href="javascript:void(0)">Senior Wind Analysis Consultant</a></li>
											</ul>
										</div>
									</li>
									<li class="icon icon-arrow-left">
										<a class="" href="javascript:void(0)">About Altablue</a>
										<div class="mp-level">
											<h2>About Altablue</h2>
											<a class="mp-back" href="javascript:void(0)">back</a>
											<ul>
												<li><a href="/about-altablue/" data-router-name="about">our ethos</a></li>
												<li><a href="/social-responsibility/" data-router-name="social-responsibility">social responsibility</a></li>
												<li><a href="/sectors/" data-router-name="sectors">sectors</a></li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li><a href="https://jobs.alta-blue.com" target="_blank">Job Seekers</a></li>
						<li><a href="http://blog.alta-blue.com" target="_blank">News</a></li>
						<li><a href="/contact/" data-router-name="contact">Contact</a></li>
					</ul>
						
				</div>
			</nav>
		</div>
		<script type="text/javascript" data-main="/js/modules/app" src="/js/libs/requirejs/require.js"></script>


		<script>
		  /*(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		  ga('create', 'UA-XXXXXX-XX', 'www.alta-blue.com');
		  ga('send', 'pageview');*/
		</script>

	</body>
</html>