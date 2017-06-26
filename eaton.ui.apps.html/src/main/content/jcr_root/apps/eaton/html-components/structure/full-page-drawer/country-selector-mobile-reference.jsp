<%@include file="/libs/foundation/global.jsp"%><%
%><%@page session="false" %><%
%>
<c:if test="${!empty properties.reference}">
	<sling:include path="${properties.reference}" addSelectors="menu-overlay-mobile"/>
</c:if>