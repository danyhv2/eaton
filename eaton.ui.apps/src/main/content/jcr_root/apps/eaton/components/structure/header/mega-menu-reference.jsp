
<%@page
	import="java.util.List,java.util.ArrayList,java.util.Iterator"%>

<%@include file="/libs/foundation/global.jsp"%>
<%

%><%@page session="false"%>

<%
String css=null;
String overlayPath=null;
com.eaton.platform.core.services.MegaMenuService keyService = sling.getService(com.eaton.platform.core.services.MegaMenuService.class);

keyService.setMenuOverlayPages(resourceResolver,currentPage);

List<String> navValue=keyService.getOverlay();

Iterator Iterator = navValue.iterator();
        while (Iterator.hasNext()) {
String path = Iterator.next().toString();

String[] parts = path.split(",");
css=parts[0];
overlayPath=parts[1];


%>

<div class='megaMenu <%=css%>Page'>
	<sling:include path='<%=overlayPath%>' />
</div>
<%      }
%>


