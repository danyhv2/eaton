package com.eaton.platform.core.bean;

import java.io.Serializable;
import java.util.List;

/**
 * The Class ConfigServiceBean.
 */
public class ConfigServiceBean implements Serializable {
	
	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -1409656172706414690L;
	
	/** The countryselector folder path. */
	private String countryselectorFolderPath;
	
	/** The lov icon list page path list. */
	private List<String> lovIconListPagePathList;
	
    /** The link list views. */
	private List<String> linkListViews;
	
    /** The Icon List proof point symbols. */
	private List<String> proofPointSymbols;
	
	/** The numof days to publish. */
	private String numofDaysToPublish;
	
	/** The middle tab list page path list. */
	private List<String> middleTabListPagePathList;
    
	/**
	 * Gets the countryselector folder path.
	 *
	 * @return the countryselector folder path
	 */
	public String getCountryselectorFolderPath() {
		return countryselectorFolderPath;
	}
	
	/**
	 * Sets the countryselector folder path.
	 *
	 * @param countryselectorFolderPath the new countryselector folder path
	 */
	public void setCountryselectorFolderPath(String countryselectorFolderPath) {
		this.countryselectorFolderPath = countryselectorFolderPath;
	}
	
	/**
	 * Gets the lov icon list page path list.
	 *
	 * @return the lov icon list page path list
	 */
	public List<String> getLovIconListPagePathList() {
		return lovIconListPagePathList;
	}
	
	/**
	 * Sets the lov icon list page path list.
	 *
	 * @param lovIconListPagePathList the new lov icon list page path list
	 */
	public void setLovIconListPagePathList(List<String> lovIconListPagePathList) {
		this.lovIconListPagePathList = lovIconListPagePathList;
	}

	/**
	 * Gets the link list views.
	 *
	 * @return the link list views
	 */
	public List<String> getLinkListViews() {
		return linkListViews;
	}

	/**
	 * Sets the link list views.
	 *
	 * @param linkListViews the new link list views
	 */
	public void setLinkListViews(List<String> linkListViews) {
		this.linkListViews = linkListViews;
	}

	/**
	 * Gets the proof point symbols.
	 *
	 * @return the proof point symbols
	 */
	public List<String> getProofPointSymbols() {
		return proofPointSymbols;
	}

	/**
	 * Sets the proof point symbols.
	 *
	 * @param proofPointSymbols the new proof point symbols
	 */
	public void setProofPointSymbols(List<String> proofPointSymbols) {
		this.proofPointSymbols = proofPointSymbols;
	}

	/**
	 * @return the numofDaysToPublish
	 */
	public String getNumofDaysToPublish() {
		return numofDaysToPublish;
	}

	/**
	 * @param numofDaysToPublish the numofDaysToPublish to set
	 */
	public void setNumofDaysToPublish(String numofDaysToPublish) {
		this.numofDaysToPublish = numofDaysToPublish;
	}

	/**
	 * @return the middleTabListPagePathList
	 */
	public List<String> getMiddleTabListPagePathList() {
		return middleTabListPagePathList;
	}

	/**
	 * @param middleTabListPagePathList the middleTabListPagePathList to set
	 */
	public void setMiddleTabListPagePathList(List<String> middleTabListPagePathList) {
		this.middleTabListPagePathList = middleTabListPagePathList;
	}
	
}
