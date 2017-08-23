package com.eaton.platform.core.workflows;


import java.util.Calendar;




import javax.jcr.Node;



import org.apache.commons.lang.StringUtils;
import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;

import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.Service;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceUtil;
import org.osgi.framework.Constants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;

import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowData;
import com.adobe.granite.workflow.exec.WorkflowProcess;
import com.adobe.granite.workflow.metadata.MetaDataMap;


import com.day.cq.replication.Replicator;


import com.eaton.platform.core.services.AdminService;
import com.eaton.platform.core.services.EatonConfigService;






@Component(label = "Eaton Schedule Activation Workflow", immediate = true, enabled = true)
@Properties({
        @Property(name = Constants.SERVICE_DESCRIPTION,value = "Notify publish content after specified date"),
        @Property(name = Constants.SERVICE_VENDOR, value = "Eaton"),
        @Property(name = "process.label", value = "Eaton Schedule Activation Workflow"),
        
})
@Service
public class EatonScheduleActivationWorkflowProcess implements WorkflowProcess{
	private static final Logger log = LoggerFactory.getLogger(EatonScheduleActivationWorkflowProcess.class);
	
	
	//Replicator Service Reference
	@Reference
	private Replicator replicator;
	
	//EatonConfig Service Reference
	@Reference
	private EatonConfigService eatonConfigService;
	
	//Admin Service Reference
	@Reference
	private AdminService adminService;

	
	@Override
	public void execute(WorkItem workItem, WorkflowSession workflowSession, MetaDataMap args) throws WorkflowException {
			log.info("Here in execute method of EatonScheduleActivationWorkflowProcess");    //ensure that the execute method is invoked
			final WorkflowData workflowData = workItem.getWorkflowData();
	        final String type = workflowData.getPayloadType();


	        // Check if the payload is a path in the JCR; The other (less common) type is JCR_UUID
	        if (!StringUtils.equals(type, "JCR_PATH")) {
	            return;
	        }
	        // Get the path to the JCR resource from the payload
	        final String path = workflowData.getPayload().toString();

	        try {
	        	
	        	String numofDaysToPublish; 
	        	numofDaysToPublish = eatonConfigService.getConfigServiceBean().getNumofDaysToPublish(); // Get Number of Days To Publish property value	
	        	
	        	Calendar c = Calendar.getInstance();

	        	c.add(Calendar.DATE, Integer.parseInt(numofDaysToPublish)); // Add the number of Days mentioned in property to current Date
	        	
	        	log.info("-------------------Publish Schedule metadata for key numofDaysToPublish and value {}",numofDaysToPublish);
	        	
	        	ResourceResolver adminResourceResolver = adminService.getWriteService();
	        	log.info("-------------------Publish Schedule metadata for key PATH and value {}",path);
	        	Resource pdhRootFolderRes =adminResourceResolver.getResource(path);
	    		if ( pdhRootFolderRes  != null	&& !ResourceUtil.isNonExistingResource(pdhRootFolderRes) ){
	    			log.info("-------------------Publish Schedule metadata for key pdhRootFolderRes and value {}",pdhRootFolderRes);
	    			if (path.contains("jcr:content")){// To add value only to the jcr content of the component
	    				int jcrIndex =path.indexOf("jcr:content");
	    				String newJcrPathValue =path.substring(0, jcrIndex+11);
	    				pdhRootFolderRes =adminResourceResolver.getResource(newJcrPathValue);
	    				log.info("-------------------Publish Schedule metadata for key NEW pdhRootFolderRes and value {}",pdhRootFolderRes.toString());
		    			Node pdhRootNode =  pdhRootFolderRes.adaptTo(Node.class);		
		    			pdhRootNode.setProperty("onTime", c);	// Set the onTime property for Page for Scheduled Publication				    
		    			
		    			pdhRootNode.getSession().save();  
	    			}
	    		}
	        	

	        } catch (Exception e) {
	            // If an error occurs that prevents the Workflow from completing/continuing - Throw a WorkflowException
	            // and the WF engine will retry the Workflow later (based on the AEM Workflow Engine configuration).

	            log.error("Unable to complete processing the Workflow Process step", e);

	            throw new WorkflowException("Unable to complete processing the Workflow Process step", e);
	        }
		
	}
	
	


}
