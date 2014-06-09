## ReadTime jQuery Plugin
Medium.com has an amazing feature that calculates the estimated reading time of an article. I created this plugin as a simplified version of that to use for my own blog. 

##Installation
Include the following tags before the closing html tag.
```html
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="js/jquery.read-time.js"></script>
```
##Usage
Wrap the content that you'd like to calculate the read time of in a div.
```html
<div id="content">...</div>
```
Then, add an element to hold the read time calculation
```html
<div id="readTime">...</div>
```
An example html file would look something like this:
```html
<html>
<head>
    <title> ReadTime jQuery Plugin </title>
  <link href='http://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
  <link href='css/style.css' rel='stylesheet' type='text/css'>
</head>
<body>

  <h1> Officer Outreach Program Shatters Stereotypes </h1>
  <div id="readTimeContainer">Read Time (<span class="readTime"></span>)</div> 

  <div id="content">
    <p> Elk Creek, Alberta &mdash; Any mention of teenagers and police officers in the same setting generally conjures up images of wild house parties getting busted-which is precisely the image Sgt. Karin Occino wants to change. </p>    
  </div>
</body>
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="js/jquery.read-time.min.js"></script>
<script src="js/custom.js"></script>
</html>
```

To implement the plugin, just add a custom javascript file and add the following code:
```javascript
$(function() {
    $('#content').readTime();
});
```

At this point, you can customize the words per minute and the id or class of the element you'd like the read time to show up in:
```javascript
$(function() {
    $('#content').readTime({
        wpm: 275,
        readTimeTarget: '.readTime'
    });
});
```