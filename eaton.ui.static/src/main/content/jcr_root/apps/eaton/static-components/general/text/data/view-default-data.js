'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && (testdata == "footer")) {
	  data.text = '<p>A Eaton is a power management company with 2016 sales of $19.7 \
			billion. We provide energy-efficient solutions that help our \
			customers effectively manage electrical, hydraulic and mechanical \
			power more efficiently, safely and sustainably. Eaton is dedicated \
			to improving the quality of life and the environment through the use \
			of power management technologies and services. Eaton has \
			approximately 95,000 employees and sells products to customers in \
			more than 175 countries.</p>';
  } else if ((typeof(testdata) != "undefined") && (testdata == "homepage-pageoverview")) {
	  data.text = '<p>At Eaton we believe that power is a fundamental part of just \
			about everything people do. That&apos;s why we&apos;re dedicated to helping \
			our customers solve some of the toughest electrical, hydraulic and \
			mechanical power challenges on the planet.</p> \
		    <p>Improving people&apos;s lives, the communities \
			where we live and work and the planet our future generations depend \
			upon is what really matters. And we&apos;re here to make sure it works.<p>';
  } else if ((typeof(testdata) != "undefined") && (testdata == "homepage-featuredtopic")) {
	  data.text = '<p>Together, we can create more powerful and \
			efficient ways to keep communities and commerce running 24/7. We \
			have resources and tools to help you solve problems every day..<p>';
  } else if ((typeof(testdata) != "undefined") && (testdata == "primary-pageoverview")) {
      data.text = "<p>Our world runs on power. Technology, transportation, energy and infrastructure absolutely depend on it. \
      		At Eaton, our vision is to deliver that power more efficiently, reliably and safely with innovative technologies that \
      		improve people&apos;s lives, the communities where we live and work, and the planet our future generations depend upon. \
      		To meet today&apos;s challenges, and tomorrow&apos;s. That&apos;s what really matters. And we&apos;re here to make sure it works.</p>";
  } else if ((typeof(testdata) != "undefined") && (testdata == "primary-featuredtopic")) {
      data.text = "<p>When you invest in Eaton, you help power energy solutions that improve the quality of life and the environment for all.</p>";
  } else if ((typeof(testdata) != "undefined") && (testdata == "article-primarycontent")) {
      data.text = "<h2>H2 subheading goes here</h2> \
      		<ul><li>Fully automated two-pedal design (no clutch pedal)</li> \
      		<li>Electronic Clutch Actuator (ECA) provides smooth engagement</li> \
      		<li>On/Off-highway performance design</li> \
      		<li>Safety features include auto neutral and Intelligent Hill Start Aid, which prevents roll-back and roll-forward while launching on grades using foundation wheel brakes</li> \
      		<li>Automatic, Manual and Low modes offer driver full control</li> \
      		<li>Creep Mode</li> \
      		<li>Fully automated two-pedal design (no clutch pedal)</li> \
      		<li>Electronic Clutch Actuator (ECA) provides smooth engagement</li> \
      		<li>On/Off-highway performance design</li> \
      		<li>Automatic, Manual and Low modes offer driver full control</li> \
      		</ul>";
  } else if ((typeof(testdata) != "undefined") && (testdata == "article-secondarycontent")) {
      data.text = "<p><strong>Manchester – Power Management Company Eaton has upgraded its wiring accessories offering for residential and commercial buildings with the launch of a switched socket with USB ports. The PREMERA and COPA 2-gang switched sockets have two USB ports to provide a convenient and safe charging solution for tablets, mobile phones and other electronic devices.</strong></p> \
      		<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam dolore magnam aliquam quaerat voluptatem.</p> \
      		<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam dolore magnam aliquam quaerat voluptatem veritatis. Eaque ipsa quae ab illo inventore veritatis et qua eaque ipsa quae ab illo inventore, inventore veritatis et quasi. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae sunt explicabo.</p>";
  } else if ((typeof(testdata) != "undefined") && (testdata == "article-nextsteps")) {
	  data.text = "<p><strong>FOR MORE INFORMATION</strong></p> \
	  		<p><b><i>Name</i></b></p> \
	  		<i>Title, sector & market</i><br/> \
	  		Country, Region<br/> \
	  		(555) 555-5555<br/><br/> \
	  		<p><b><i>Eaton</i></b></p> \
	  		<i>Vehicle Group</i><br/> \
	  		13100 E. Michigan Ave.<br/> \
	  		Galesburg, MI 40053<br/> \
	  		1-800-826-HELP (4357)";	  					  		
  } else {
	  // Rich-Text-Editor - Content-Example:
 	  data.text = '<p><strong>Eaton Text component</strong>. Eaton is a power management company with 2016 sales of $19.7 billion. <em>We provide energy-efficient solutions</em> that help <b>our customers</b> effectively manage electrical, <i>hydraulic and mechanical</i> power more efficiently, safely and sustainably.</p> \
	  <p>Eaton is dedicated to <a href="#">improving the quality of life and the environment</a> through the use of <strong>power management technologies</strong> and services.</p> \
	  <h2>H2 subheading goes here</h2> \
	  <p>Another paragraph. Electronic Clutch Actuator (ECA) provides smooth engagement</p> \
	  <h3>H3 subheading goes here</h3> \
	  <ol><li>OL List item 1</li><li>OL List item 2</li><li>OL List item 3</li></ol> \
	  <h4>H4 subheading goes here</h4> \
	  <ul><li>UL List item 1</li><li>UL List item 2</li><li>UL List item 3</li></ul> \
	  ';
  }
  return data;
});
