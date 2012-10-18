var LookbookView = Backbone.View.extend({

	tagName: "li",

	className: "lookbook-item",

	template: _.template($('lookbook-template').html()),

	events: {
		// "click .destroy"				: "onDestroyClick",
	},

	initialize: function(){
		_.bindAll(this, 'render', 'remove');
	},

	render: function(){
		$(this.el).html(this.template(this.model.toJSON()));
	}
});