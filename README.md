# Bootstrap Rating Input in 2Kb 
## Modified with solid stars

This is modified version of [javiertoledo's bootstrap-rating-input](https://github.com/javiertoledo/bootstrap-rating-input) . the change I've made is force the stars to stay solid and use a few tiny lines of css to color them however I like. My reason for doing this is mostly aesthetics, I hate hollow stars, but also I found that when styling the span element ith padding the hollow star doesn't like to align perfectly with the solid ones, this fixes that.

It generates widgets like this:

![Rating example](https://github.com/tonybilby/bootstrap-rating-input/blob/master/stars.png?raw=true)

## How to use

Just download `build/bootstrap-rating-input.min.js` & 'build/style.css', put them wherever you usually put JavaScripts and css in your project and include it on pages where you want to have forms with ratings:

		<script src="path/to/javascripts/bootstrap-rating-input.min.js" type="text/javascript"></script>
		<link href="path/to/stylesheets/style.css" rel="stylesheet">
	
You can edit the color of the stars with the following css

		.rating-active{
			color: #ffca02 !important; /* Yellow by default */
		}
		.rating-inactive{
			color: #000000 !important; /* Black by default */
		}

Now add a input of type *number* to your forms and add the class `rating` to it:

    <input type="number" name="your_awesome_parameter" id="some_id" class="rating" />

That's all! When page loads, you'll find a few stars where you'd expect to find the input. It works just like most of rating plugins, but you don't need to learn anything about options or initializations, it just works out of the box.

### Nice, but I want to use a different number of stars

Sure! You can set min and max values adding `data-min` and `data-max`:

    <input class="rating" data-max="5" data-min="1" id="some_id" name="your_awesome_parameter" type="number" />

### Can I set a special value for empty ratings?

You can add the attribute `data-empty-value` to indicate which value should send the form when it have an empty rating. This can be used, for example, to have an special value indicating the user didn't seleted anything:

    <input class="rating" data-max="5" data-min="1" id="some_id" name="your_awesome_parameter" type="number" data-empty-value="0"/>

By default empty ratings will behave like a regular empty field.

### And what about clearing the stars?

By default once you set a value it remains set and you can only change it by another, but you can add a clear link by just defining the `data-clearable` attribute:

    <input class="rating" data-clearable="remove" id="some_id" name="your_awesome_parameter" type="number" />

The content of `data-clearable` will appear as label for the link. You can set a space or a &amp;nbsp; to make it appear as a naked close icon.

### I don't want to be forced to add the `rating` class to the inputs

The `rating` class is used in combination with `input[type=number]` to let you autoload the rating plugin without coding anything, but you can apply this plugin to a input of any type by executing the method `rating` on a jQuery selection:

    $('input.my_class').rating();

## Requirements

[Twitter Bootstrap](http://getbootstrap.com) and [jQuery](http://jquery.com)!
