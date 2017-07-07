


<%@page session="false" %>
<%@page contentType="text/html" pageEncoding="utf-8"
        import="com.day.cq.i18n.I18n,java.lang.StringBuilder"
                 %>

<%@include file="/libs/foundation/global.jsp" %>

<%
String pubID=properties.get("pubID","");


%>

<div>

    <strong>Publish ID :</strong> <%= pubID %> <br/>

<br/>

       <button onclick="dialog.show()">Edit Social Share Configuration</button>
<br/>

</div>
