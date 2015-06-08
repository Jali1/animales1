// JavaScript Document
$(document).ready(function(e) {
    $('#principal').height($('#page').height());//calcular el alto de la pantalla del dispositivo
	document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('caballo','audio/caballo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('gato','audio/gato.mp4',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('gallo','audio/gallo.mp4',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('burro','audio/burro.mp4',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('oveja','audio/oveja.mp4',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('cerdo','audio/cerdo.mp4',function(){},function(e){alert('Error '+e);});
		
		
		audio.preloadFX('foca','audio/foca.mp4',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('lobo','audio/lobo.mp4',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('elefante','audio/elefante.mp4',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('leopardo','audio/leopardo.mp4',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('mono','audio/mono.mp4',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('cebra','audio/cebra.mp4',function(){},function(e){alert('Error '+e);});
		//reproducir las notas
		$('.nota').bind('touchstart', function(){$(this).addclass('tocada');
		audio.play($(this).attr('id'));});
		$('.nota').bind('touchend',function(){$(this).removeClass('tocada');});
		
		},false);//deviceready
});//ready