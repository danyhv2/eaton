package com.eaton.platform.core.exception;

/**
 * The Class EatonSystemException.
 */
public class EatonSystemException extends RuntimeException {
    private static final long serialVersionUID = 2424688552118995085L;
   
    public EatonSystemException(final Throwable anException) {
        super(anException);
    }
    public EatonSystemException(final String anErrorCode, final String theMessage) {
    	super("Error Code - ".concat(anErrorCode).concat("\n").concat(theMessage));
    }
    public EatonSystemException(final String theMessage, final Throwable anException) {
        super("Error Message - ".concat(theMessage).concat("\n").concat(theMessage));
    }
    public EatonSystemException(final String anErrorCode, final String theMessage, final Throwable anException) {
    	super("Error Code - ".concat(anErrorCode).concat("\n").concat(theMessage), anException);
    }
}
