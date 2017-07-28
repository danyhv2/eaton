package com.eaton.platform.core.models.ttillist;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

/**
 * <html> Description: In post processing of this sling model,
 * it will identify the view of the component and;
 * will load the respective model inputs passing resource object</html> .
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class TtilListModel {
	
	/** The view. */
	@Inject
	private String view;
	
	/** The header. */
	@Inject
	private String header;
	
	/** The headerDescription. */
	@Inject
	private String headerDescription;
	 
	/** The download links. */
	@Inject
	private Resource ttilList;
 
	/** The links. */
	public List<?> links;
	
	/**
	 * Inits the.
	 */
	@PostConstruct
	protected void init() {
		if (ttilList != null) {
			populateModel(ttilList);
		}
	}
	
	/**
	 * Populate model.
	 *
	 * @param array the array
	 * @param resource the resource
	 * @return social links
	 */
	public List<?> populateModel(Resource resource) {
		if (resource != null) {
			Iterator<Resource> linkResources = resource.listChildren();
				switch(this.view) {
					case "landing-hero" : {
						List<TtilListLandingHeroModel> links = new ArrayList<TtilListLandingHeroModel>();
						while (linkResources.hasNext()) {
							TtilListLandingHeroModel ttilListLink = linkResources.next().adaptTo(TtilListLandingHeroModel.class);
							if (ttilListLink != null) {
								links.add(ttilListLink);
							}
						}
						this.links = links;
						break;
					}
					case "category-hero" : {
						List<TtilListCategoryHeroModel> links = new ArrayList<TtilListCategoryHeroModel>();
						while (linkResources.hasNext()) {
							TtilListCategoryHeroModel ttilListLink = linkResources.next().adaptTo(TtilListCategoryHeroModel.class);
							if (ttilListLink != null) {
								links.add(ttilListLink);
								this.links = links;
								break;
							}
						}
						break;
					}
					case "featured-story" : {
						List<TtilListFeaturedStoryModel> links = new ArrayList<TtilListFeaturedStoryModel>();
						while (linkResources.hasNext()) {
							TtilListFeaturedStoryModel ttilListLink = linkResources.next().adaptTo(TtilListFeaturedStoryModel.class);
							if (ttilListLink != null) {
								links.add(ttilListLink);
							}
						}
						this.links = links;
						break;
					}
					case "quotes" : {
						List<TtilListFeaturedStoryModel> links = new ArrayList<TtilListFeaturedStoryModel>();
						while (linkResources.hasNext()) {
							TtilListFeaturedStoryModel ttilListLink = linkResources.next().adaptTo(TtilListFeaturedStoryModel.class);
							if (ttilListLink != null) {
								links.add(ttilListLink);
							}
						}
						this.links = links;
						break;
					}
					case "tile-link" : {
						List<TtilListTileLinksModel> links = new ArrayList<TtilListTileLinksModel>();
						while (linkResources.hasNext()) {
							TtilListTileLinksModel ttilListLink = linkResources.next().adaptTo(TtilListTileLinksModel.class);
							if (ttilListLink != null) {
								links.add(ttilListLink);
							}
						}
						this.links = links;
						break;
					}
					case "image-only" : {
						List<TtilListColumnImageModel> links = new ArrayList<TtilListColumnImageModel>();
						while (linkResources.hasNext()) {
							TtilListColumnImageModel ttilListLink = linkResources.next().adaptTo(TtilListColumnImageModel.class);
							if (ttilListLink != null) {
								links.add(ttilListLink);
							}
						}
						this.links = links;
						break;
					}
					case "featured-list" : {
						List<TtilListFeaturedListModel> links = new ArrayList<TtilListFeaturedListModel>();
						while (linkResources.hasNext()) {
							TtilListFeaturedListModel ttilListLink = linkResources.next().adaptTo(TtilListFeaturedListModel.class);
							if (ttilListLink != null) {
								links.add(ttilListLink);
							}
						}
						this.links = links;
						break;
					}
				}
			}
		return this.links;
	}

	/**
	 * Gets the view.
	 *
	 * @return the view
	 */
	public String getView() {
		return this.view;
	}

	/**
	 * Gets the header.
	 *
	 * @return the header
	 */
	public String getHeader() {
		return this.header;
	}

	/**
	 * Gets the header description.
	 *
	 * @return the header description
	 */
	public String getHeaderDescription() {
		return this.headerDescription;
	}
	
}
