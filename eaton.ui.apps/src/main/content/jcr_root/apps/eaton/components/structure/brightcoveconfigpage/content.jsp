<%@page session="false" %>
<%@page contentType="text/html" pageEncoding="utf-8"
        import="com.eaton.platform.core.util.BrightcoveUtil,
    			java.util.ArrayList,
				java.util.List,
				com.eaton.platform.core.models.sitemap.BCAccountBean,
				com.eaton.platform.core.models.sitemap.BCPlayerBean" %>

<%@include file="/libs/foundation/global.jsp" %>

<%
     List<BCAccountBean> accountList = BrightcoveUtil.getBCAccounts(resource);
	 int noOfAccounts = accountList.size();
%>
<div>
	<c:set var="noOfAccounts" value="<%=noOfAccounts %>" />

    <ul style="float: left; margin: 0px;">
        <h2 style="margin:0;padding-left:0;">Brightcove Accounts</h2>
            <p></p>
            <c:if test="${noOfAccounts gt 0}">
                <c:forEach var="i" begin="0" end="${noOfAccounts-1}" step="1" varStatus="status">
                            <c:set var="accIndex" value="${i}" scope="request" />
                            <c:set var="accountTitle" value="<%=accountList.get((Integer)request.getAttribute("accIndex")).getAccName()%>" />
                            <c:set var="accountNumber" value="<%=accountList.get((Integer)request.getAttribute("accIndex")).getAccNumber()%>" />
                            <c:set var="noOfPlayers" value="<%=accountList.get((Integer)request.getAttribute("accIndex")).getNumOfPlayers()%>" />
                            <li><div class="li-bullet"><h3>${accountTitle} : ${accountNumber}</h3></div></li>
                            <c:set var="playerList" value="<%=accountList.get((Integer)request.getAttribute("accIndex")).getPlayerDetails()%>" scope="request" />
                                <c:if test="${noOfPlayers gt 0}">
                                    <c:forEach var="j" begin="0" end="${noOfPlayers-1}" step="1" varStatus="status1">
                                        <c:set var="playerIndex" value="${j}" scope="request" />
                                        <c:set var="playerName" value="<%=accountList.get((Integer)request.getAttribute("accIndex")).getPlayerDetails().get((Integer)request.getAttribute("playerIndex")).getPlayerName()%>" />
                                        <c:set var="playerId" value="<%=accountList.get((Integer)request.getAttribute("accIndex")).getPlayerDetails().get((Integer)request.getAttribute("playerIndex")).getPlayerId()%>" />
        
                                        <li><div class="li-bullet"><strong>Player Name : </strong>${playerName}</div></li>
                                        <li><div class="li-bullet"><strong>Player ID : </strong>${playerId}</div></li>
                                    </c:forEach>
                                </c:if>
                            <li></li>
                            <br/>
                            <br/>
                </c:forEach>  
            </c:if>       

        
        <br/>
        <br/>
           <button onclick="dialog.show()">Edit Brightcove Configuration</button>
    
    </ul>
</div>
