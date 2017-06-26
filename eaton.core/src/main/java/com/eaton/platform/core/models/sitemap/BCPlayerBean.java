package com.eaton.platform.core.models.sitemap;

/**
 * This class is for Brightcove Player Bean.
 * @author TCS
 *
 */
public class BCPlayerBean  {
	/** playerId. */
	private String playerId;
	/** playerName. */
	private String playerName; 
	/**
	 * @return the playerId
	 */
	public String getPlayerId() {
		return playerId;
	}

	/**
	 * @param playerId the playerId to set
	 */
	public void setPlayerId(String playerId) {
		this.playerId = playerId;
	}

	/**
	 * @return the playerName
	 */
	public String getPlayerName() {
		return playerName;
	}

	/**
	 * @param playerName the playerName to set
	 */
	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}
	
}
