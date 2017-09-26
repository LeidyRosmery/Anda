'use strict';
let carShopping = [];
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
            $('.cont-brands').append('<li class="item-brand highlight">' + e.name + '</li>');
            if (e.producto != undefined) {
                e.producto.forEach(function(elemento) {
                    $('.row-grid').append(' <div class="col-sm-4" style="padding:1.5em"><div class="text-center"><img class="product img-responsive" src="'+elemento.img+'" alt=""><i class="trigger-modal icon-product fa fa-eye" data-nombre="'+e.name+'" data-cantidad="'+elemento.cantidad+'" data-precio="'+elemento.precio+'" data-stock="'+elemento.stock+'" data-imagen="'+elemento.img+'" data-toggle="modal" data-target="#exampleModal" aria-hidden="true"></i><i class="icon-product fa fa-shopping-basket add-car"   aria-hidden="true"></i> <div class="bdr-top detail-product"><h3 class="title-product">'+e.name+'</h3><p class="stock">'+elemento.stock+'</p><p class="title-product">SOLES '+elemento.precio+'</p><p class="quantity">'+elemento.cantidad+'</p></div></div></div>');
$('.add-car').data("bar",elemento);

                });
            }
        });

    });

    $('.row-grid').on('click', ".add-car", function() {
        carShopping.push($(this).data('bar'));
        console.log(carShopping);
    });

    $('.row-grid').on('click', ".trigger-modal", function() {

        $('#img-modal').attr('src', $(this).data('imagen'));
        $('#cantidad-modal').text($(this).data('cantidad'));
        $('#precio-modal').text($(this).data('precio') + '.00 SOLES');
        $('#stock-modal').text($(this).data('stock'));
        $('#nombre-modal').text($(this).data('nombre'));
    });
    $('#icon-shopping').click(function() {
        $('#all-items').text(carShopping.length + ' PRODUCTOS ');
        carShopping.forEach(function(elemento) {
            $('.cont-purchase').append('<div class="col-sm-12 item-purchase pad-x2"><div class="row pad-x3 "><div class="col-sm-4"><img class="product img-responsive" style="height:9vh" src="' + elemento.img + '" alt=""></div><div class="col-sm-8 text-center"><p class="text-center text-purchase mrg-0"><strong>GIVENCHY</strong></p><p class="text-center text-purchase mrg-0">M (INT)</p><p class="text-center text-purchase mrg-0">SOLES ' + elemento.precio + '</p></div></div></div>');
        });

    });

});
