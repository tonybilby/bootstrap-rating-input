!function(a) {
	a.fn.rating = function() {
		function b(b, c) {
			var d = a(b).find("[data-value=" + c + "]");
			d.removeClass("rating-inactive").addClass("rating-active"), d.prevAll("[data-value]").removeClass("rating-inactive").addClass("rating-active"), d.nextAll("[data-value]").removeClass("rating-active").addClass("rating-inactive")
		}
		function c(b) {
			var c = a(b);
			c.find("[data-value]").removeClass("rating-active").addClass("rating-inactive"), c.find(".rating-clear").hide();
			var d = c.find("input");
			d.val(d.data("empty-value")).trigger("change")
		}
		var d;
		for (d = this.length - 1; d >= 0; d--) {
			var e, f, g = a(this[d]),
				h = g.data("max") || 5,
				i = g.data("min") || 0,
				j = g.data("empty-value"),
				k = g.data("clearable") || null,
				l = "";
			for (f = i; h >= f; f++) l += ['<span class="glyphicon glyphicon-star rating-inactive" data-value="', f, '"></span>'].join("");
			k && (l += [' <a class="rating-clear" style="display:none;" href="javascript:void">', '<span class="glyphicon glyphicon-remove"></span> ', k, "</a>"].join("")), e = ['<div class="rating-input">', l, '<input type="hidden" name="', g.attr("name"), '" value="', g.val(), '" id="', g.attr("id"), '" data-min="', i, '" data-max="', h, '" data-empty-value="', j, '" />', "</div>"].join(""), g.replaceWith(e)
		}
		a(".rating-input").on("mouseenter", "[data-value]", function() {
			var c = a(this);
			b(c.closest(".rating-input"), c.data("value"))
		}).on("mouseleave", "[data-value]", function() {
			var d = a(this),
				e = d.siblings("input"),
				f = e.val(),
				g = e.data("min"),
				h = e.data("max");
			f >= g && h >= f ? b(d.closest(".rating-input"), f) : c(d.closest(".rating-input"))
		}).on("click", "[data-value]", function(b) {
			var c = a(this),
				d = c.data("value");
			return c.siblings("input").val(d).trigger("change"), c.siblings(".rating-clear").show(), b.preventDefault(), !1
		}).on("click", ".rating-clear", function(b) {
			return c(a(this).closest(".rating-input")), b.preventDefault(), !1
		}).each(function() {
			var d = a(this).find("input"),
				e = d.val(),
				f = d.data("min"),
				g = d.data("max");
			e >= f && g >= e ? (b(this, e), a(this).find(".rating-clear").show()) : c(this)
		})
	}, a(function() {
		a("input.rating[type=number]").length > 0 && a("input.rating[type=number]").rating()
	})
}(jQuery);