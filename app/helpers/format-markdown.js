import Ember from "ember";

/*global Showdown:false*/
/*global Handlebars:false*/

export default Ember.Handlebars.makeBoundHelper(function(markdown){
	var showdown = new Showdown.converter();
	return new Handlebars.SafeString(showdown.makeHtml(markdown));
});