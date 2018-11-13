/* jshint esversion:6 */

import waypoints from '../../node_modules/waypoints/lib/noframework.waypoints';


class StickyHeader {
	constructor() {
		this.header = document.getElementById('header');
		this.headerTrigger = document.getElementsByClassName('main-header__heading')[0];
		this.mainNav = document.getElementById('main-nav');
		this.events();
		this.createHeaderWaypoint();
	}

	events() { }

	createHeaderWaypoint() {
		// Header waypoint to trigger nav shrinkage		
		let that = this;
		new Waypoint({
			element: this.headerTrigger,
			handler: function(direction) {
				if(direction == 'down') {
					that.mainNav.classList.remove('main-nav--revealed');
				} else {
					that.mainNav.classList.add('main-nav--revealed');
				}
			},
			offset: '10%'
		});
	}
}

export default StickyHeader;