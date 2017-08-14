package com.eaton.platform.core.workflows;










import javax.jcr.Session;


import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;

import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.Service;


import org.osgi.framework.Constants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowData;
import com.adobe.granite.workflow.exec.WorkflowProcess;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.day.cq.replication.ReplicationActionType;

import com.day.cq.replication.Replicator;







@Component(label = "Eaton Publish workflow", immediate = true, enabled = true)
@Properties({
        @Property(name = Constants.SERVICE_DESCRIPTION,value = "Publish content immeddiately"),
        @Property(name = Constants.SERVICE_VENDOR, value = "Eaton"),
        @Property(name = "process.label", value = "Eaton Publish workflow"),
        
})
@Service
public class EatonPublishWorkflowProcess implements WorkflowProcess{
	private static final Logger log = LoggerFactory.getLogger(EatonPublishWorkflowProcess.class);

	
	//Replicator Service Reference
	@Reference
	private Replicator replicator;

	@Override
	public void execute(WorkItem workItem, WorkflowSession workflowSession, MetaDataMap args) throws WorkflowException {
			log.info("Here in execute method of EatonPublishWorkflowProcess");    //ensure that the execute method is invoked
			final WorkflowData workflowData = workItem.getWorkflowData();
	       
			
			try {
				log.info("Here in try execute method of Publish");  
				Session session = workflowSession.adaptTo(Session.class); // get the user session
								        
		        final String path = workflowData.getPayload().toString(); // get the Pages Path Submitted
		        		     
		        log.info("-------------------Publish Workdlow metadata for key PROCESS_ARGS and value {}",path);	
		        	
				replicator.replicate( session, ReplicationActionType.ACTIVATE, path); // Publish the Pages
	
			
			} catch (Exception e) {
	            // If an error occurs that prevents the Workflow from completing/continuing - Throw a WorkflowException
	            // and the WF engine will retry the Workflow later (based on the AEM Workflow Engine configuration).
				log.error("Unable to complete processing the Workflow Process step", e);

	            throw new WorkflowException("Unable to complete processing the Workflow Process step", e);
			}

			
		
	}

	
}
