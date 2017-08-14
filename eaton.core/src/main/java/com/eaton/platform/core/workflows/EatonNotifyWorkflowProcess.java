package com.eaton.platform.core.workflows;


import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.Service;
import org.osgi.framework.Constants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.acs.commons.email.EmailService;
import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowData;
import com.adobe.granite.workflow.exec.WorkflowProcess;
import com.adobe.granite.workflow.metadata.MetaDataMap;

@Component(label = "Eaton Notify Workflow", immediate = true, enabled = true)
@Properties({
        @Property(name = Constants.SERVICE_DESCRIPTION,value = "Notify country owners of content update"),
        @Property(name = Constants.SERVICE_VENDOR, value = "Eaton"),
        @Property(name = "process.label", value = "Eaton Notify Workflow"),
        
})
@Service
public class EatonNotifyWorkflowProcess implements WorkflowProcess{
	private static final Logger log = LoggerFactory.getLogger(EatonNotifyWorkflowProcess.class);
	
	//Email Service Reference
	@Reference
	private EmailService emailService;

	
	@Override
	public void execute(WorkItem workItem, WorkflowSession workflowSession, MetaDataMap args) throws WorkflowException {
			log.info("Here in execute method of EatonNotifyWorkflowProcess");    //ensure that the execute method is invoked
			final WorkflowData workflowData = workItem.getWorkflowData();
	        final String type = workflowData.getPayloadType();
	        String mailRecipients = null;
	        String emailTemplatePath = null;

	        // Check if the payload is a path in the JCR; The other (less common) type is JCR_UUID
	        if (!StringUtils.equals(type, "JCR_PATH")) {
	            return;
	        }
	        
	        // Get the path to the JCR resource from the payload
	        final String path = workflowData.getPayload().toString();	        

	        log.info("workflow metadata for key PROCESS_ARGS and value {}",path);	
	        log.info("workflow metadata for key PROCESS_ARGS and value {}",type);	
	        
	        String processArgs = args.get("PROCESS_ARGS", "string");
	        
	        log.info("workflow metadata for key PROCESS_ARGS and value {}",args.get("PROCESS_ARGS","string"));	        
			String[] processArgsParam = processArgs.split("],");
			String recipent =processArgsParam[0];
			String template = processArgsParam[1];
			mailRecipients =recipent.replace("sendTo:[", "");
			emailTemplatePath=template.replace("emailTemplate:", "");
			
	        try {
	        	
				// Array of email recipients
				String[] recipients =  mailRecipients.split(",");
	            sendNotification(recipients,emailTemplatePath);

	         
	        } catch (Exception e) {
	            // If an error occurs that prevents the Workflow from completing/continuing - Throw a WorkflowException
	            // and the WF engine will retry the Workflow later (based on the AEM Workflow Engine configuration).

	            log.error("Unable to complete processing the Workflow Process step", e);

	            throw new WorkflowException("Unable to complete processing the Workflow Process step", e);
	        }
		
	}
	
	/**
	 * This method is to send Notification to recipients 
	 * when Input Path or Input file does not exists.
	 * @param mailRecipients - List of Recipients
	 * @param fileSourcepath - Input Path String
	 * @param emailParams 
	 */
	private void sendNotification(String[] recipients, String emailTemplatePath) {
						
		// emailService.sendEmail(..) returns a list of all the recipients that
		// could not be sent the email
		// An empty list indicates 100% success
		 Map<String, String> emailParams=getEmailParams();
		 log.info("workflow metadata for key PROCESS_ARGS and value {}",Arrays.toString(recipients));
		 log.info("workflow metadata for key PROCESS_ARGS and value {}",emailTemplatePath);
		List<String> participantList = emailService.sendEmail(emailTemplatePath, emailParams, recipients);
		
		if (participantList.isEmpty()) {
			log.info("Email sent successfully to the recipients");
		} else {
			log.info("Email sent failed to Recipients ");
			for (String itr : participantList) 
				log.info(itr);
			}		
	}
	
    /**
     * This method is to return email parameters
     * @return Map of email parameters
     */
    public static   Map<String, String> getEmailParams(){
    	
    	// Set the dynamic variables of email template
 		Map<String, String> emailParams = new HashMap<>();
 		// Customize the sender email address - if required
 		emailParams.put("senderEmailAddress","GlobaLink@eaton.com");
 		emailParams.put("senderName", "GlobalLink TranslationTeam");
 		emailParams.put("recipientName", "Eaton Team");	
 		emailParams.put("subject", "Global Link Translation");
 		emailParams.put("message", "The Requested Page or Tag has been Translated.");
 		
 		return emailParams;
    	
    }



}
