<%@include file="/libs/foundation/global.jsp"%>
<%@page session="false"%>
<%@page import="com.day.cq.commons.LanguageUtil" %>

<%
	String roothPath = LanguageUtil.getLanguageRoot(currentPage.getPath());
	String url = roothPath + "/jcr:content/root/header/full-page-drawer";
	
%>
<sling:include path= '<%=url %>' />