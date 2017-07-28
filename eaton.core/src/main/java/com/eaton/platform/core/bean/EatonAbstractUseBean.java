package com.eaton.platform.core.bean;

import javax.jcr.Node;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.scripting.SlingScriptHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.cq.sightly.WCMUsePojo;
import com.day.cq.commons.inherit.HierarchyNodeInheritanceValueMap;
import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import com.day.cq.wcm.api.designer.Style;
import com.eaton.platform.core.util.CommonUtil;

/**
 * The Class AbstractUseBean.
 */
public abstract class EatonAbstractUseBean extends WCMUsePojo {
    /** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(EatonAbstractUseBean.class);
    /** The resource resolver. */
    protected ResourceResolver resourceResolver;
    /** The res. */
    protected Resource res;
    /** The page manager. */
    protected PageManager pageManager;
    /** The current page. */
    protected Page currentPage;
    /** The current page. */
    protected Page targetedComponentPage;
    /** The current page properties. */
    protected ValueMap currentPageProperties;
    /** The current page inherited prop. */
    protected InheritanceValueMap currentPageInheritedProp;
    /** The sling request. */
    protected SlingHttpServletRequest slingRequest;
    /** The response. */
    protected SlingHttpServletResponse response;
    /** The current node. */
    protected Node currentNode;
    /** The sling helper. */
    protected SlingScriptHelper slingHelper;
    /** The current style. */
    protected Style currentStyle;

    /*
     * (non-Javadoc)
     * @see com.adobe.cq.sightly.WCMUse#activate()
     */
    @Override
    public void activate() throws Exception {
        LOGGER.debug("Entered into activate method");
        initialze();
        setComponentValues();
        LOGGER.debug("Exited from activate method");
    }

    /**
     * Initialze.
     */
    private void initialze() {
        LOGGER.debug("Entered into initialze method");
        res = getResource();
        resourceResolver = getResourceResolver();
        pageManager = getPageManager();
        currentPage = getCurrentPage();
        currentPageProperties = currentPage.getProperties();
        // currentPageInheritedProp = getInheritedProperties();
        currentPageInheritedProp = new HierarchyNodeInheritanceValueMap(res);
        slingRequest = getRequest();
        slingHelper = getSlingScriptHelper();
        response = getResponse();
        currentNode = res.adaptTo(Node.class);
        // if any object targeted component page will have target component page path
        // and current page has original component path
        targetedComponentPage = currentPage;
        currentPage = CommonUtil.getOriginalPage(currentPage, resourceResolver);
        currentStyle = getCurrentStyle();
        LOGGER.debug("Exited from initialze method");
    }

    /**
     * Sets the component values.
     */
    public abstract void setComponentValues();
}
