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

	public List<String> getProofPointSymbols() {
		return proofPointSymbols;
	}

	public void setProofPointSymbols(List<String> proofPointSymbols) {
		this.proofPointSymbols = proofPointSymbols;
	}
	
}
