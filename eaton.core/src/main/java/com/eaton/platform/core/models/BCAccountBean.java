package com.eaton.platform.core.models;

import java.util.List;

/**
 * This class is for Brightcove Account Bean.
 * @author TCS
 *
 */
public class BCAccountBean  {
	
	private String accNumber;
	
	private String accName;
	
	private List<BCPlayerBean> playerDetails;
	
	private int numOfPlayers;

	/**
	 * @return the accNumber
	 */
	public String getAccNumber() {
		return accNumber;
	}

	/**
	 * @param accNumber the accNumber to set
	 */
	public void setAccNumber(String accNumber) {
		this.accNumber = accNumber;
	}

	/**
	 * @return the accName
	 */
	public String getAccName() {
		return accName;
	}

	/**
	 * @param accName the accName to set
	 */
	public void setAccName(String accName) {
		this.accName = accName;
	}

	/**
	 * @return the playerDetails
	 */
	public List<BCPlayerBean> getPlayerDetails() {
		return playerDetails;
	}

	/**
	 * @param playerDetails the playerDetails to set
	 */
	public void setPlayerDetails(List<BCPlayerBean> playerDetails) {
		this.playerDetails = playerDetails;
	}

	/**
	 * @return the numOfPlayers
	 */
	public int getNumOfPlayers() {
		return numOfPlayers;
	}

	/**
	 * @param numOfPlayers the numOfPlayers to set
	 */
	public void setNumOfPlayers(int numOfPlayers) {
		this.numOfPlayers = numOfPlayers;
	}

	
}
