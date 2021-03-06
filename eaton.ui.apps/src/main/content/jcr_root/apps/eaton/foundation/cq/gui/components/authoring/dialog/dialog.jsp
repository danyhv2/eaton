<%--
  ADOBE CONFIDENTIAL

  Copyright 2013 Adobe Systems Incorporated
  All Rights Reserved.

  NOTICE:  All information contained herein is, and remains
  the property of Adobe Systems Incorporated and its suppliers,
  if any.  The intellectual and technical concepts contained
  herein are proprietary to Adobe Systems Incorporated and its
  suppliers and may be covered by U.S. and Foreign Patents,
  patents in process, and are protected by trade secret or copyright law.
  Dissemination of this information or reproduction of this material
  is strictly forbidden unless prior written permission is obtained
  from Adobe Systems Incorporated.
--%><%@page session="false"
            import="com.adobe.granite.i18n.LocaleUtil,
                    com.adobe.granite.ui.components.AttrBuilder,
                    com.adobe.granite.ui.components.Tag,
                    com.adobe.granite.ui.components.Value,
                    com.day.cq.wcm.api.Page,
                    com.day.cq.wcm.api.PageManager,
                    org.apache.commons.lang.StringUtils,
                    org.apache.sling.api.SlingHttpServletRequest,
                    org.apache.sling.api.request.RequestParameter,
                    org.apache.sling.api.resource.SyntheticResource" %><%
%><%@include file="/libs/granite/ui/global.jsp" %><%
%><%@include file="/libs/cq/gui/components/siteadmin/admin/properties/FilteringResourceWrapper.jsp"%><%

/**
 * Dialog is a form component to render dialog of CQ Authoring.
 * It is strongly recommended to use this component for CQ Authoring purpose to maintain compatibility. Any changes to the look and feel will be done in this component.
 *
 * The component is checking the request's suffix to get the context resource that it is acting upon.
 * This context resource is used as the values of the form. Also the form's action is set to that resource.
 *
 * @component
 * @name Dialog
 * @location /libs/cq/gui/components/authoring/dialog
 *
 * @property {String} [jcr:title] The title of the dialog
 * @property {String} [mode] The mode of the form. Possible values are "default" or "edit" or not specified.
 * @property {String} [enctype] The encoding type of the form
 * @property
 * {String[]} [clientlibs="coralui2", "granite.ui.coral.foundation", "cq.authoring.dialog"] The clientlibs to be included in this dialog
 * @property {String[]} [extraClientlibs] The additional clientlibs to be included on top of the ones specified at clientlibs property
 * @property {String} [height] The height of the floating dialog
 * @property {String} [width] The width of the floating dialog
 */

/* WARNING: Please be careful when adding new feature to this component.
This component is occupying a good real estate, so don't waste it.
Discuss in the mailing list first when in doubt. */
 
 
String dataPath = slingRequest.getRequestPathInfo().getSuffix();
Resource data = resourceResolver.getResource(dataPath);
boolean editMode = (dataPath == null);
RequestParameter param = slingRequest.getRequestParameter("resourceType");
RequestParameter referrerPathParam = slingRequest.getRequestParameter("referrer");

String resourceType = null;

if (param != null) {
    resourceType = param.getString();

    if (resourceType.equals("undefined")) {
        resourceType = null;
    }
}

if (!editMode && data == null) {
    if (resourceType != null) {
        data = new SyntheticResource(resourceResolver, dataPath, resourceType);
    }
    else {
        response.sendError(400);
        return;
    }
}

String referrerPath = "";
Resource referrerResource = null;

if (referrerPathParam != null) {
    String referrerPathValue = referrerPathParam.getString();

    if (referrerPathValue.equals("undefined")) {
        referrerPathValue = null;
    }

    if (!StringUtils.isEmpty(referrerPathValue)) {
        referrerResource = resourceResolver.getResource(referrerPathValue);
    }

    if (referrerResource == null) {
        referrerResource = new SyntheticResource(resourceResolver, referrerPathValue, null);
    }
}

if (referrerResource != null) {
    referrerPath = getPage(referrerResource).getPath();
} else if (data != null) {
    referrerPath = getPage(data).getPath();
}

Config cfg = cmp.getConfig();

String title = cfg.get("jcr:title", "");
String mode = cfg.get("mode", String.class);
Boolean returnToReferral = cfg.get("returnToReferral", false);
String height = cfg.get("height", "");
String width = cfg.get("width", "");

Tag tag = cmp.consumeTag();

AttrBuilder attrs = tag.getAttrs();

if (editMode) {
    attrs.addClass("coral-Form coral-Form--vertical coral-Text cq-dialog cq-dialog-fullscreen foundation-form content foundation-layout-form foundation-layout-form-mode-edit");
} else {
    attrs.addHref("action", data.getPath());
    attrs.add("enctype", cfg.get("enctype", String.class));
    attrs.add("method", "post");
    attrs.addClass("coral-Form coral-Form--vertical coral-Text cq-dialog cq-dialog-fullscreen foundation-form content foundation-layout-form");
    attrs.addHref("data-cq-dialog-pageeditor", "/editor.html" + referrerPath + ".html");
    attrs.add("data-foundation-form-ajax", true);

    // this prevents the Granite form from attempting to parse the response itself.
    if (cfg.get("suppressFormUiBehavior", false)) {
        attrs.add("data-foundation-form-ui", "none");
    }

    if (mode != null) {
        attrs.addClass("foundation-layout-form-mode-" + mode);
    }

    if (returnToReferral) {
        attrs.add("data-cq-dialog-returntoreferral", true);
    }

    if (!"".equals(height)) {
        attrs.add("data-cq-dialog-height", height);
    }
    if (!"".equals(width)) {
        attrs.add("data-cq-dialog-width", width);
    }
}

try {
    if (editMode) {
        request.setAttribute("granite.ui.authoring", true);
    } else {
        request.setAttribute(Value.CONTENTPATH_ATTRIBUTE, data.getPath());
    }

	%><!DOCTYPE html>
	<html class="cq-dialog-page coral-App" lang="<%= xssAPI.encodeForHTMLAttr(LocaleUtil.toRFC4646(request.getLocale()).toLowerCase()) %>" data-i18n-dictionary-src="<%= request.getContextPath() %>/libs/cq/i18n/dict.{+locale}.json">
	<head>
	    <meta charset="utf-8">
	    <title><%= outVar(xssAPI, i18n, title) %></title>
	    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
	    <meta name="X-UA-Compatible" content="chrome=1" />
	    <link rel="shortcut icon" href="<%= request.getContextPath() %>/libs/granite/core/content/login/favicon.ico">
	    
	    <ui:includeClientLib categories="<%= StringUtils.join(cfg.get("clientlibs", new String[] {"coralui2",
	    "granite.ui.coral.foundation", "granite.ui.coral.foundation.addon.coral2", "cq.authoring.dialog"}), ",") %>" />
	    <ui:includeClientLib categories="<%= StringUtils.join(cfg.get("extraClientlibs", new String[0]), ",") %>" />
        <% if (editMode) { %>
            <ui:includeClientLib categories="granite.ui.authoring, cq.authoring.page" />
        <% } %>
	</head>
	<body class="coral--light">
	    <form <%= attrs.build() %>>
            <input type="hidden" name="_charset_" value="utf-8"/>
            <% if (resourceType != null) { %>
            <input type="hidden" name="./sling:resourceType" value="<%= resourceType %>"/>
            <% } %>
            <input type="hidden" name="./jcr:lastModified"/>
            <input type="hidden" name="./jcr:lastModifiedBy"/>
            <nav class="cq-dialog-header coral--dark u-coral-clearFix">
                <h2 class="coral-Heading coral-Heading--2 u-coral-pullLeft"><%= outVar(xssAPI, i18n, title) %></h2>
                <div class="cq-dialog-actions u-coral-pullRight">
                    <button <%= getHelpAttrs(slingRequest, cfg, xssAPI, i18n).build() %>>
                        <i class="coral-Icon coral-Icon--helpCircle"></i>
                    </button>
                    <button type="button" class="coral-MinimalButton cq-dialog-header-action cq-dialog-cancel" title="<%= i18n.get("Cancel")%>">
                        <i class="coral-Icon coral-Icon--close"></i>
                    </button>
                    <button class="coral-MinimalButton cq-dialog-header-action cq-dialog-submit" title="<%= i18n.get("Done") %>">
                        <i class="coral-Icon coral-Icon--check"></i>
                    </button>
                </div>
            </nav><%

            AttrBuilder contentAttrs = new AttrBuilder(request, xssAPI);
            contentAttrs.addClass("cq-dialog-content");
            cmp.include(new FilteringResourceWrapper(resource.getChild("content")), new Tag(contentAttrs));
        %></form>
	</body><%
} finally {
    if (editMode) {
        request.removeAttribute("granite.ui.authoring");
    } else {
        request.removeAttribute(Value.CONTENTPATH_ATTRIBUTE);
    }
}
%><%!
private Page getPage(Resource content) {
    PageManager pageManager = content.getResourceResolver().adaptTo(PageManager.class);

    if (pageManager == null) {
        Resource parent = content.getParent();
        while (parent != null) {
            Page page = parent.adaptTo(Page.class);
            if (page != null) {
                return page;
            }

            parent = parent.getParent();
        }

        return null;
    }

    return pageManager.getContainingPage(content);
}

private AttrBuilder getHelpAttrs(SlingHttpServletRequest req, Config cfg, XSSAPI xssAPI, I18n i18n) {
    String helpPath = cfg.get("helpPath", i18n.getVar("https://www.adobe.com/go/aem6_2_docs_en"));
    AttrBuilder attrs = new AttrBuilder(req, xssAPI);
    attrs.add("type", "button");
    attrs.addClass("coral-MinimalButton cq-dialog-header-action cq-dialog-help");
    attrs.addHref("data-href", helpPath);
    attrs.add("title", i18n.get("Help"));

    return attrs;
}
%>
