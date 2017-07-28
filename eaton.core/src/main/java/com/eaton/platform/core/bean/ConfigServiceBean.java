package com.eaton.platform.core.bean;

import java.io.Serializable;
import java.util.List;

public class ConfigServiceBean implements Serializable {
	private static final long serialVersionUID = -1409656172706414690L;
	
	private String countryselectorFolderPath;
	private List<String> lovIconListPagePathList;
	
	public String getCountryselectorFolderPath() {
		return countryselectorFolderPath;
	}
	public void setCountryselectorFolderPath(String countryselectorFolderPath) {
		this.countryselectorFolderPath = countryselectorFolderPath;
	}
	public List<String> getLovIconListPagePathList() {
		return lovIconListPagePathList;
	}
	public void setLovIconListPagePathList(List<String> lovIconListPagePathList) {
		this.lovIconListPagePathList = lovIconListPagePathList;
	}
	
}
