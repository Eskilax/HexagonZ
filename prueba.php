<!DOCTYPE html>
<html>
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="core.js"></script>
	<link href="core.css" rel="stylesheet">
	<title></title>
</head>
<body>
	<div id="hexz-container">
		<div >1</div>
		<div >2</div>
		<div >3</div>
		<div >4</div>
		<div >5</div>
		<div >6</div>
		<div >7</div>
		<div >8</div>
		<div >9</div>
		<div >10</div>
		<div >11</div>
		<div >12</div>
	</div>

</body>
</html>

<script>
	
(function($) {  
  $(document).ready(function() {
    // Plugin sin parámetros.
    $('#hexz-container').hz();
  });
})(jQuery);


</script>