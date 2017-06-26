<%@include file="/libs/foundation/global.jsp"%>
<%@page session="false"%>
<%@page import="com.day.cq.commons.LanguageUtil" %>

<%
	String roothPath = LanguageUtil.getLanguageRoot(currentPage.getPath());
String url = roothPath + "/jcr:content/root/header/search-comp.search-bar.html";
	
%>
<sling:include path= '<%=url%>' />