<%@include file="/libs/foundation/global.jsp"%>
<%@page session="false"%>
<%@page import="com.eaton.platform.core.helpers.ReferenceHelper" %>

<%
	String reference = ReferenceHelper.getFullPageDrawerReference(resourceResolver,currentPage);

	if(reference != null && reference != ""){
%>
	<sling:include path= "<%=reference%>"  addSelectors="menu-overlay-mobile"/>
<%
    }
%>