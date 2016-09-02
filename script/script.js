		window.onload = function() { document.onkeypress = Color_Cambio; }
		function insertar(caja,cant){
			if(caja.value == null | caja.value=="0")
				caja.value= cant
			else
				caja.value += cant
		}
		function elimina(caja){
            if (caja.value==0){}
            else
            {
			    caja.value = caja.value.substring(0,caja.value.length - 1)
            }
        }
		function resolver(ope){
			var operacion =ope.value;
			ope.value=eval(ope.value);
			document.getElementById('historial').innerHTML += operacion + '='+ ope.value + '<br/>';
		}
		function op_trigo(caja,tipo){
			var num=caja.value;
			var aux;
			switch (tipo){
				case 'sen':
					aux=Math.sin(num);
					break;
				case 'cos':
					aux=Math.cos(num);
					break;
				case 'tan':
					aux=Math.tan(num);
					break;
			}
			caja.value=aux;
			document.getElementById('historial').innerHTML += tipo + '('+ num +')'+'='+ caja.value + '<br/>';	
		}
        function limpiar(caja){
            caja.value=0;
        }

		function Color_Cambio(evObject) {
                var elCaracter = String.fromCharCode(evObject.which);
				document.getElementById(elCaracter).style.backgroundColor= '#de555e';
				//insertar(document.form.resultado,elCaracter); se tecle dos veces.
				setTimeout(function() {document.getElementById(elCaracter).style.backgroundColor=  "#44c767";}, 200);
		}	
		var memoria_v=0;
		function guardar(caja){
			if (memoria_v==0){
				memoria_v = caja.value;   
				caja.value = 0;
			}
			else{
				caja.value += memoria_v;     
				memoria_v="0";
			}
		}		
		var clic = 1;
		function historial(){ 
		   if(clic==1){
				document.getElementById("historial").style.height = "100px";
				clic = clic + 1;
			}else{
			   document.getElementById("historial").style.height = "0px";      
				clic = 1;
			}   
		}

