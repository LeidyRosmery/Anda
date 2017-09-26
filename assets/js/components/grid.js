  $('.count-bagReg').text(localStorage.getItem("contador-bag"));
  var array = localStorage.getItem('carrito');
  array = JSON.parse(array);

var precioEnvio , precioPago ,precioProduct,precioItem ,subPrecio, precioImpuesto , precioTotal,total;
  precioImpuesto=16*precioTotal;
  precioPago=0;
  precioEnvio=0;
$('#envio').text('SOLES '+precioEnvio +'.00');
$('#pago').text('SOLES '+precioPago +'.00');
//  precioTotal=precioPago+precioEnvio+subPrecio;
  //total=precioTotal-precioImpuesto;
    function render(){
    array.forEach(function(e,indice){
    $('.grid-car').append('<div class="row " style="padding:.5em 0 ;display: flex;align-items: center;"><div class="col-sm-3 text-center"><img src="'+e.imagen+'" style="width:35% ; padding-left:35px" alt=""></div> <div class="col-sm-3 text-center"><div class="row"><div class="col-sm-6"><span><strong>'+e.nombre+'</strong></span></div><div class="col-sm-6"><span>PRECIO UNIT. '+e.precio+'</span></div></div>  </div><div class="col-sm-3 text-center"><div class="row">  <div class="col-sm-6"><select class="" style="width:60%" data-precio="'+e.precio+'" name="cantidad"><option value="1">1</option><option value="2">2</option>  <option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select></div><div class="col-sm-6"><i class="eliminar fa fa-trash fa-lg" data-delete="'+indice+'" aria-hidden="true"></i></div></div></div><div class="col-sm-3 text-center"><span ><strong id="precio"> '+e.precio*1+'  </strong>  SOLES</span></div></div>');

    });
  }

render();

$("select[name=cantidad]").change(function(){
$('#precio').empty();
precioItem=($(this).val())*($(this).data('precio'));
$('#precio').text(precioItem);
          //console.log(*);
          //$('input[name=valor1]').val($(this).val());
      });
$('.grid-car').on('click', '.eliminar', function() {
    array.splice($(this).data('delete'), 1);
    $('.grid-car').empty();
    render();
    localStorage.setItem("contador-bag", array.length);
    if(array.length==0){
      $('.count-bagReg').css('display','none');
    }
    $('.count-bagReg').text(localStorage.getItem("contador-bag"));

});
