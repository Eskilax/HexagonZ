(function($) {
 
  	// Declaración del plugin.
  	$.fn.HexagonZ = function(options) 
  	{ 
  		options = $.extend({}, $.fn.HexagonZ.defaultOptions, options);
		this.each(function() {HexagonZ($(this),options);});
    	return this;
    }
    
  	// Parametros del plugin.
  	$.fn.HexagonZ.defaultOptions = {center: false}

  	// Declaración del plugin.
  	$.fn.HexZ = function(options) 
  	{ 
  		options = $.extend({}, $.fn.HexZ.defaultOptions, options);
		this.each(function() {HexagonZ($(this),options);});
    	return this;
    }
    
  	// Parametros del plugin.
  	$.fn.HexZ.defaultOptions = {center: false}

  	// Declaración del plugin.
  	$.fn.HZ = function(options) 
  	{ 
  		options = $.extend({}, $.fn.HZ.defaultOptions, options);
		this.each(function() {HexagonZ($(this),options);});
    	return this;
    }
    
  	// Parametros del plugin.
  	$.fn.HZ.defaultOptions = {center: false}

  	// Declaración del plugin.
  	$.fn.hexagonz = function(options) 
  	{ 
  		options = $.extend({}, $.fn.hexagonz.defaultOptions, options);
		this.each(function() {HexagonZ($(this),options);});
    	return this;
    }
    
  	// Parametros del plugin.
  	$.fn.hexagonz.defaultOptions = {center: false}

  	// Declaración del plugin.
  	$.fn.hexz = function(options) 
  	{ 
  		options = $.extend({}, $.fn.hexz.defaultOptions, options);
		this.each(function() {HexagonZ($(this),options);});
    	return this;
    }
    
  	// Parametros del plugin.
  	$.fn.hexz.defaultOptions = {center: false}

  	// Declaración del plugin.
  	$.fn.hz = function(options) 
  	{ 
  		options = $.extend({}, $.fn.hz.defaultOptions, options);
		this.each(function() {HexagonZ($(this),options);});
    	return this;
    }
    
  	// Parametros del plugin.
  	$.fn.hz.defaultOptions = {center: false}

  	function HexagonZ(element,options)
  	{

	    if( !(element.is( ".hex_active" ) ) )
	    {

	    	var contenthtml='';

	        element.addClass('hex_active');
	        element.addClass('hex-lines');
	    		
	    	var hexagonos=element.find("div");
	    	
	        /*Se recorren todos los hex del div seleccionado*/
	    	for (var i=0; i < hexagonos.length;i++ ) 
	    	{
	    	 	/*Se le añaden las puntas de arriba i de debajo para formar el hexagono*/
	    		contenthtml=$(hexagonos[i]).html();
	    		$(hexagonos[i]).addClass('hex');
	    		contenthtml='<div class="top" ></div><div class="middle" >'+contenthtml+'</div><div class="bottom"></div>';
	    		$(hexagonos[i]).html(contenthtml);
	    	}

	        /*Se llama a la funcion de resituacion de los hexagonos pintados*/
	        if(options.center)
	        {
	            break_HexagonZ_center(element);
	        }
	        else
	        {
	            break_HexagonZ(element);
	        }
	    	

	        /*Se preparan los divs para añadirles o quitarles la propiedad css del hover*/
	    	element.find(".hex").hover(function() {
	            $(this).addClass('hex-transitionexpand');
	     
	        }, function() {
	            $(this).removeClass('hex-transitionexpand');
	        });

	        /*Se fija la funcion de resituacion para cada vez que se redimensione la pantalla*/
	    	
	        if(options.center)
	        {
	            $( window ).resize(function(){break_HexagonZ_center(element)});
	        }
	        else
	        {
	            $( window ).resize(function(){break_HexagonZ(element)});
	        }
	    }
	    
	}

	function break_HexagonZ_center(element)
	{
	    var topOffset;
	    var linea_par=false;
	    var num_hex_porlinea=0;
	    var num_total=element.find(".hex").length;
	    var num_hex_inline=0;
	    var num_hex_total_indiv=0;
	    var num_linea=0;
	    var num_lina_totales=0;
	    var hex_en_ultima_linea=0;

	    /*Se recorren los hex del div pasado por parametro*/
	    element.find(".hex").each(function(index)
	    {
	        /*Se situan todos al mismo nivel. Uno a uno*/
	        $(this).removeClass('hexmargin-left');
	        $(this).removeClass('hexmargin-right');
	        $(this).removeClass('hexmargin-right-2');

	        //alert(num_hex_inline+' '+num_hex);

	        //alert('numero de hexagono en div:'+index+' - numero de hexagono totales por linea impar:'+num_hex_porlinea+' '+linea_par+' - numero de linea:'+num_linea+' - numero total de lineas:'+num_lina_totales+' - hexagonos en la ultimalinea:'+hex_en_ultima_linea);

	        /*Comprobamos si es el primer elemento*/
	        if (index === 0) 
	        {
	            /*Seleccionamos la altura de la primera linea*/
	            topOffset = $(this).offset().top;
	        } 
	        else if (topOffset < $(this).offset().top)
	        {
	            if(num_hex_porlinea==0)
	            {
	                num_hex_porlinea=index;
	                num_lina_totales=num_total/((num_hex_porlinea*2)-1);
	                alert(Math.ceil(num_lina_totales*2));
	                //hex_en_ultima_linea=num_total-((num_lina_totales*num_hex_porlinea)-(num_lina_totales-1));
	                //alert((num_lina_totales*num_hex_porlinea));
	                //alert((num_lina_totales*num_hex_porlinea)-(num_lina_totales-1));
	                //alert(hex_en_ultima_linea);
	                
	            }

	            num_hex_inline=0;
	            num_linea++;

	            linea_par=!linea_par;
	    
	            topOffset = $(this).offset().top;
	        }

	        num_hex_inline++;

	        if(num_lina_totales!=num_linea)
	        {
	            if(linea_par && num_hex_inline==1)
	            {
	                $(this).addClass('hexmargin-left');
	            }

	            if(linea_par && num_hex_inline==(num_hex_porlinea - 1 ))
	            {
	                $(this).addClass('hexmargin-right');
	            }
	        }
	        else if(num_lina_totales==num_linea && num_linea>0)
	        {
	            if(hex_en_ultima_linea==0)
	            {
	                hex_en_ultima_linea=num_total-index;
	                //alert(hex_en_ultima_linea);
	            }
	            //alert(hex_en_ultima_linea);
	            if(num_hex_porlinea%2!=0 && hex_en_ultima_linea%2!=0)
	            {

	                if(num_hex_inline==1)
	                {
	                   // $(this).addClass('hexmargin-left');
	                }
	                
	                if(num_hex_inline==(hex_en_ultima_linea  ))
	                {
	                    $(this).addClass('hexmargin-right-2');
	                }
	            }
	            
	        }  
	    });

	    //alert('Total de Hexagonos:'+num_total+' Total de hexagonos por linea:'+num_hex_porlinea+' Total de lineas'+num_lina_totales);
	    
	}

	function break_HexagonZ(element)
	{
		var topOffset;
	    var margin=true;

	    /*Se recorren los hex del div pasado por parametro*/
	    element.find(".hex").each(function(index)
	    {
	        /*Se situan todos al mismo nivel. Uno a uno*/
	    	$(this).removeClass('hexmargin');
	        /*Comprobamos si es el primer elemento*/
	        if (index === 0) 
	        {
	            /*Seleccionamos la altura de la primera linea*/
	            topOffset = $(this).offset().top;
	        } 
	        else if (topOffset < $(this).offset().top)
	        {
	            /*Si el margen es aplicable se aplica*/
	        	if(margin)
	        	{
	        		//Ponemos el margen izquierdo para que encagen los hexagonos y le decimos que los de la misma linea no les aplique un margen
	          		$(this).addClass('hexmargin');
	          		margin=false;
	        	}
	        	else
	        	{
	                //Permitimos que aplique margen al siguente elemento
	        		margin=true;
	        	}
	            /*Nos guardamos la altura de la linea del ultimo elemento*/
	        	topOffset = $(this).offset().top;
	          
	        }
	    });
		
	}

})(jQuery);