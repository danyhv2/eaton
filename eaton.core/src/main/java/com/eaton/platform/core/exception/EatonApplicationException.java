package com.eaton.platform.core.exception;

/**
 * The Class EatonApplicationException.
 * 
 * @author sradhanand.achugatla
 */
public class EatonApplicationException extends Exception {
    /** The Constant serialVersionUID. */
    private static final long serialVersionUID = 1285333466482054738L;
    
    public EatonApplicationException(final String theMessage) {
        super(theMessage);
    }
    
    public EatonApplicationException(final String anErrorCode, final String theMessage) {
        super("Error Code - ".concat(anErrorCode).concat("\n").concat(theMessage));
    }
    
    public EatonApplicationException(final String theMessage, final Throwable anException) {
        super("Error Message - ".concat(theMessage).concat("\n").concat(theMessage));
    }
    
    public EatonApplicationException(final String anErrorCode, final String theMessage, final Throwable anException) {
    	super("Error Code - ".concat(anErrorCode).concat("\n").concat(theMessage), anException);
    }
}
