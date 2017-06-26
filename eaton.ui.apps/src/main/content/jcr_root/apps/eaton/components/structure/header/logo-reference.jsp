<%@include file="/libs/foundation/global.jsp"%>
<%@page session="false"%>
<%@page import="com.day.cq.commons.LanguageUtil" %>

<%
	String roothPath = LanguageUtil.getLanguageRoot(currentPage.getPath());
	String url = roothPath + "/jcr:content/root/header/header-logo";
%>
<sling:include path= '<%=url %>' />