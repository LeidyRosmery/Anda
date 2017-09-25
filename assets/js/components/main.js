'use strict';

let category = [];
$(document).ready(function() {
    gaseosa.forEach(function(e) {
        
        $('.cont-brands').append('<li class="item-brand highlight">' + e.name + '</li>');
    });

    $('.category').click(function() {
        $('.cont-brands').empty();
        $('.row-grid').empty();

        switch ($(this).data('product')) {
            case 'gaseosa':
                category = gaseosa;
                break;
            case 'chocolate':
                category = chocolate;
                break;
            case 'galleta':
                category = galleta;
                break;
            case 'crucigrama':
                category = crucigrama;
        }
        category.forEach(function(e) {
            //console.log(e);
            $('.cont-brands').append('<li class="item-brand highlight">' + e.name + '</li>');
            console.log(e.name);
            e.producto.forEach(function(elemento){
              $('row-grid').append('<div class="col-sm-4"><div class="text-center"><img class="product img-responsive" src="'+elemento.img+'" alt=""><i class="trigger-modal icon-product fa fa-eye" data-toggle="modal" data-target="#exampleModal" aria-hidden="true"></i><i class="icon-product fa fa-shopping-basket" aria-hidden="true"></i><div class="bdr-top detail-product"><h3 class="title-product"> INKA KOLA</h3><p class="stock">Stock disponible</p> <p class="title-product">SOLES 20.02</p><p class="quantity">2 LITROS</p></div></div></div>');

            //  console.log(elemento.img);
            });
          });
    });
});
