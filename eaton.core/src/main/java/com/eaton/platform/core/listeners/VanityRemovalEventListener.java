package com.eaton.platform.core.listeners;

import javax.jcr.AccessDeniedException;
import javax.jcr.Node;
import javax.jcr.PathNotFoundException;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.ValueFormatException;
import javax.jcr.lock.LockException;
import javax.jcr.nodetype.ConstraintViolationException;
import javax.jcr.observation.Event;
import javax.jcr.observation.EventIterator;
import javax.jcr.observation.EventListener;
import javax.jcr.version.VersionException;

import org.apache.felix.scr.annotations.Activate;
import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.ConfigurationPolicy;
import org.apache.felix.scr.annotations.Deactivate;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.Service;
import org.apache.sling.api.resource.ResourceResolver;
import org.osgi.service.component.ComponentContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.services.AdminService;

@Component(metatype = false, immediate = true, policy = ConfigurationPolicy.REQUIRE)
@Service(value = {EventListener.class})
public class VanityRemovalEventListener implements EventListener {
	
    /** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(VanityRemovalEventListener.class);
    
    @Reference
    protected AdminService adminService;
    
    private ResourceResolver adminResourceResolver;
    
    private Session adminSession;
    
    public VanityRemovalEventListener() {
        LOGGER.debug("Entry into VanityRemovalEventListener constructor method");
    }

    @Activate
    public void activate(ComponentContext context) {
        LOGGER.debug("Activating PageCreationObservation");
        try {
        	String[] nodetypes = {CommonConstants.NODE_TYPE};
        	adminResourceResolver = adminService.getWriteService();
        	adminSession = adminResourceResolver.adaptTo(Session.class);
            adminSession.getWorkspace().getObservationManager().addEventListener(this, // handler
                    Event.NODE_ADDED, // binary combination of event types
                    CommonConstants.BASE_PAGE_PATH, // path
                    true, // is Deep?
                    null, // uuids filter
                    nodetypes, // nodetypes filter
                    false);
        } catch (RepositoryException e) {
            LOGGER.error("Unable to register session", e);
        }
        LOGGER.debug("Exit Activate method");
    }

    /*
     * (non-Javadoc)
     * @see javax.jcr.observation.EventListener#onEvent(javax.jcr.observation.EventIterator)
     */
    @Override
    public void onEvent(EventIterator eventIterator) {
        LOGGER.debug("Enter onEvent method");
        while (eventIterator.hasNext()) {
            Event newEvent = eventIterator.nextEvent();
            // Check if node exists and it is a content node of the newly
            // created page
            try {
                if (adminSession.nodeExists(newEvent.getPath()) && adminSession.getNode(newEvent.getPath())
                        .getProperty(CommonConstants.JCR_PRIMARY_TYPE).getString().equals(CommonConstants.CQ_PAGE_CONTENT)) {
                    Node contentNode = adminSession.getNode(newEvent.getPath());
                    if (contentNode.hasProperty(CommonConstants.SLING_VANITY)) {
                        contentNode.getProperty(CommonConstants.SLING_VANITY).remove();
                    }
                }
                adminSession.save();
            } catch (AccessDeniedException e) {
                LOGGER.error("AccessDeniedException", e);
            } catch (ValueFormatException e) {
                LOGGER.error("ValueFormatException", e);
            } catch (PathNotFoundException e) {
                LOGGER.error("PathNotFoundException", e);
            } catch (VersionException e) {
                LOGGER.error("VersionException", e);
            } catch (LockException e) {
                LOGGER.error("LockException", e);
            } catch (ConstraintViolationException e) {
                LOGGER.error("ConstraintViolationException", e);
            } catch (RepositoryException e) {
                LOGGER.error("RepositoryException", e);
            }
        }
        LOGGER.debug("Exit onEvent method");
    }

    /**
     * Deactivate.
     */
    @Deactivate
    public void deactivate() {
    	adminResourceResolver = null;
    }
}
