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
