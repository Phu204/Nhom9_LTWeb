Bizweb.updateCartFromForm = function(cart, cart_summary_id, cart_count_id) {
    if ((typeof cart_summary_id) === 'string') {
        var cart_summary = jQuery(cart_summary_id);
        if (cart_summary.length) {
            cart_summary.empty();
            jQuery.each(cart, function(key, value) {
                if (key === 'items') {
                    var table = jQuery(cart_summary_id);
                    if (value.length) {
                        jQuery('<ul class="list-item-cart"></ul>').appendTo(table);
                        jQuery.each(value, function(i, item) {
                            var src = item.image;
                            if (src == null) {
                                src = "//bizweb.dktcdn.net/thumb/large/assets/themes_support/noimage.gif";
                            }
                            var buttonQty = "";
                            if (item.quantity == '1') {
                                buttonQty = 'disabled';
                            } else {
                                buttonQty = '';
                            }
                            jQuery('<li class="clearfix item productid-' + item.variant_id + '"><a class="product-image" href="' + item.url + '" title="' + item.name + '">' +
                                '<img alt="' + item.name + '" src="' + src + '"width="' + '80' + '"\></a>' +
                                '<div class="detail-item"><div class="product-details"> <a href="javascript:;" data-id="' + item.variant_id + '" title="Xóa" class="remove-item-cart fa fa-remove">&nbsp;</a>' +
                                '<p class="product-name"> <a href="' + item.url + '" title="' + item.name + '">' + item.name + '</a></p></div>' +
                                '<div class="product-details-bottom"><span class="price pricechange">' + Bizweb.formatMoney(item.price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span>' +
                                '<div class="quantity-select"><input class="variantID" type="hidden" name="variantId" value="' + item.variant_id + '"><button onClick="var result = document.getElementById(\'qty' + item.variant_id + '\'); var qty' + item.variant_id + ' = result.value; if( !isNaN( qty' + item.variant_id + ' ) &amp;&amp; qty' + item.variant_id + ' &gt; 1 ) result.value--;return false;" class="reduced items-count btn-minus" ' + buttonQty + ' type="button">–</button><input type="text" disabled maxlength="3" min="1" onchange="if(this.value == 0)this.value=1;" class="input-text number-sidebar qty' + item.variant_id + '" id="qty' + item.variant_id + '" name="Lines" id="updates_' + item.variant_id + '" size="4" value="' + item.quantity + '"><button onClick="var result = document.getElementById(\'qty' + item.variant_id + '\'); var qty' + item.variant_id + ' = result.value; if( !isNaN( qty' + item.variant_id + ' )) result.value++;return false;" class="increase items-count btn-plus" type="button">+</button></div></div></li>').appendTo(table.children('.list-item-cart'));
                        });
                        jQuery('<div><div class="top-subtotal">Tổng cộng: <span class="price">' + Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span></div></div>').appendTo(table);
                        jQuery('<div><div class="actions clearfix"><a href="/checkout" class="btn btn-gray btn-checkout" title="Thanh toán"><span>Thanh toán</span></a><a href="/cart" class="view-cart btn btn-white margin-left-5" title="Giỏ hàng"><span>Giỏ hàng</span></a></div></div>').appendTo(table);
                    } else {
                        jQuery('<div class="no-item"><p>Không có sản phẩm nào trong giỏ hàng.</p></div>').appendTo(table);
                    }
                }
            });
        }
    }
    updateCartDesc(cart);
    var numInput = document.querySelector('#cart-sidebar input.input-text');
    if (numInput != null) {
        numInput.addEventListener('input', function() {
            var num = this.value.match(/^\d+$/);
            if (num == 0) {
                this.value = 1;
            }
            if (num === null) {
                this.value = "";
            }
        }, false)
    }
}
Bizweb.updateCartPageForm = function(cart, cart_summary_id, cart_count_id) {
    if ((typeof cart_summary_id) === 'string') {
        var cart_summary = jQuery(cart_summary_id);
        if (cart_summary.length) {
            cart_summary.empty();
            jQuery.each(cart, function(key, value) {
                if (key === 'items') {
                    var table = jQuery(cart_summary_id);
                    if (value.length) {
                        var pageCart = '<div class="cart page_cart cart_des_page hidden-xs-down">' +
                            '<div class="col-xs-9 cart-col-1">' +
                            '<div class="cart-tbody">' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                        var pageCartCheckout = '<div class="col-xs-3 cart-col-2 cart-collaterals cart_submit">' +
                            '<div id="right-affix">' +
                            '<div class="each-row">' +
                            '<div class="box-style fee">' +
                            '<p class="list-info-price">' +
                            '<span>Tạm tính: </span>' +
                            '<strong class="totals_price price _text-right text_color_right1">65756756756</strong></p></div>' +
                            '<div class="box-style fee">' +
                            '<div class="total2 clearfix">' +
                            '<span class="text-label">Thành tiền: </span>' +
                            '<div class="amount">' +
                            '<p><strong class="totals_price">' + Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫") + '</strong></p>' +
                            '</div></div></div>' +
                            '<button class="button btn btn-large btn-block btn-danger btn-checkout evo-button" title="Thanh toán ngay" type="button" onclick="window.location.href=\'/checkout\'">Thanh toán ngay</button>' +
                            '<button class="button btn-proceed-checkout btn btn-large btn-block btn-danger btn-checkouts" title="Tiếp tục mua hàng" type="button" onclick="window.location.href=\'/collections/all\'">Tiếp tục mua hàng</button>' +
                            '</div></div></div>';
                        jQuery(pageCart).appendTo(table);
                        jQuery.each(value, function(i, item) {
                            var buttonQty = "";
                            if (item.quantity == '1') {
                                buttonQty = 'disabled';
                            } else {
                                buttonQty = '';
                            }
                            var link_img1 = Bizweb.resizeImage(item.image, 'medium');
                            if (link_img1 == "null" || link_img1 == '' || link_img1 == null) {
                                link_img1 = 'https://bizweb.dktcdn.net/thumb/large/assets/themes_support/noimage.gif';
                            }
                            if (item.price == 0) {
                                var price = "Tặng kèm";
                                var hidden = "hidden";
                            } else {
                                var hidden = "";
                                var price = Bizweb.formatMoney(item.price, "{{amount_no_decimals_with_comma_separator}}₫");
                            }
                            var item_price = item.price * item.quantity;
                            var pageCartItem = '<div class="row shopping-cart-item productid-' + item.variant_id + '">' +
                                '<div class="col-xs-3 img-thumnail-custom">' +
                                '<p class="image">' +
                                '<a href="' + item.url + '" title="' + item.name + '" target="_blank">' +
                                '<img class="img-responsive" src="' + link_img1 + '" alt="' + item.name + '" />' +
                                '</a>' +
                                '</p>' +
                                '</div>' +
                                '<div class="col-right col-xs-9">' +
                                '<div class="box-info-product">' +
                                '<p class="name">' +
                                '<a href="' + item.url + '" title="' + item.name + '" target="_blank">' + item.name + '</a>' +
                                '</p>' +
                                '<p class="seller-by hidden">' + item.variant_title + '</p>' +
                                '<p class="action">' +
                                '<a href="javascript:;" class="btn btn-link btn-item-delete remove-item-cart" data-id="' + item.variant_id + '" title="Xóa">Xóa</a>' +
                                '</p>' +
                                '</div>' +
                                '<div class="box-price">' +
                                '<p class="price pricechange">' + price + '</p>' +
                                '</div>' +
                                '<div class="quantity-block">' +
                                '<div class="input-group bootstrap-touchspin">' +
                                '<div class="input-group-btn">' +
                                '<input class="variantID" type="hidden" name="variantId" value="' + item.variant_id + '">' +
                                '<button onClick="var result = document.getElementById(\'qtyItem' + item.variant_id + '\'); var qtyItem' + item.variant_id + ' = result.value; if( !isNaN( qtyItem' + item.variant_id + ' )) result.value++;return false;" class="increase_pop items-count btn-plus btn btn-default bootstrap-touchspin-up" type="button">+</button>' +
                                '<input type="text" onchange="if(this.value == 0)this.value=1;" maxlength="12" min="1" disabled class="form-control quantity-r2 quantity js-quantity-product input-text number-sidebar input_pop input_pop qtyItem' + item.variant_id + '" id="qtyItem' + item.variant_id + '" name="Lines" id="updates_' + item.variant_id + '" size="4" value="' + item.quantity + '">' +
                                '<button onClick="var result = document.getElementById(\'qtyItem' + item.variant_id + '\'); var qtyItem' + item.variant_id + ' = result.value; if( !isNaN( qtyItem' + item.variant_id + ' ) &amp;&amp; qtyItem' + item.variant_id + ' &gt; 1 ) result.value--;return false;" ' + buttonQty + ' class="reduced_pop items-count btn-minus btn btn-default bootstrap-touchspin-down" type="button">–</button>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</div>';
                            jQuery(pageCartItem).appendTo(table.find('.cart-tbody'));
                            if (item.variant_title == 'Default Title') {
                                $('.seller-by').hide();
                            }
                        });
                        jQuery(pageCartCheckout).appendTo(table.children('.cart'));
                    } else {
                        jQuery('<p class="hidden-xs-down">Không có sản phẩm nào trong giỏ hàng. Quay lại <a href="/" style="color:;">cửa hàng</a> để tiếp tục mua sắm.</p>').appendTo(table);
                        jQuery('.cart_desktop_page').css('min-height', 'auto');
                    }
                }
            });
        }
    }
    updateCartDesc(cart);
    jQuery('#wait').hide();
}
Bizweb.updateCartPopupForm = function(cart, cart_summary_id, cart_count_id) {
    if ((typeof cart_summary_id) === 'string') {
        var cart_summary = jQuery(cart_summary_id);
        if (cart_summary.length) {
            cart_summary.empty();
            jQuery.each(cart, function(key, value) {
                if (key === 'items') {
                    var table = jQuery(cart_summary_id);
                    if (value.length) {
                        jQuery.each(value, function(i, item) {
                            var link_img1 = Bizweb.resizeImage(item.image, 'small');
                            if (link_img1 == "null" || link_img1 == '' || link_img1 == null) {
                                link_img1 = '//bizweb.dktcdn.net/thumb/large/assets/themes_support/noimage.gif';
                            }
                            var buttonQty = "";
                            if (item.quantity == '1') {
                                buttonQty = 'disabled';
                            } else {
                                buttonQty = '';
                            }
                            var title_va = item.variant_title;
                            if (title_va == 'Default Title') {
                                title_va = "";
                            } else {
                                title_va = item.variant_title;
                            }
                            var pageCartItem = '<div class="item-popup productid-' + item.variant_id + '"><div style="width: 55%;" class="text-left"><div class="item-image">' +
                                '<a class="product-image" href="' + item.url + '" title="' + item.name + '"><img alt="' + item.name + '" src="' + link_img1 + '"width="' + '80' + '"\></a>' +
                                '</div><div class="item-info"><p class="item-name"><a href="' + item.url + '" title="' + item.name + '">' + item.title + '</a></p>' +
                                '<p class="variant-title-popup">' + title_va + '</span>' +
                                '<p class="item-remove"><a href="javascript:;" class="remove-item-cart" title="Xóa" data-id="' + item.variant_id + '"><i class="fa fa-close"></i> Bỏ sản phẩm</a></p><p class="addpass" style="color:#fff;">' + item.variant_id + '</p></div></div>' +
                                '<div style="width: 15%;" class="text-right"><div class="item-price"><span class="price pricechange">' + Bizweb.formatMoney(item.price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span>' +
                                '</div></div><div style="width: 15%;" class="text-center"><input class="variantID" type="hidden" name="variantId" value="' + item.variant_id + '">' +
                                '<button onClick="var result = document.getElementById(\'qtyItem' + item.variant_id + '\'); var qtyItem' + item.variant_id + ' = result.value; if( !isNaN( qtyItem' + item.variant_id + ' ) &amp;&amp; qtyItem' + item.variant_id + ' &gt; 1 ) result.value--;return false;" ' + buttonQty + ' class="reduced items-count btn-minus" type="button">–</button>' +
                                '<input disabled type="text" maxlength="12" min="0" class="input-text number-sidebar qtyItem' + item.variant_id + '" id="qtyItem' + item.variant_id + '" name="Lines" id="updates_' + item.variant_id + '" size="4" value="' + item.quantity + '">' +
                                '<button onClick="var result = document.getElementById(\'qtyItem' + item.variant_id + '\'); var qtyItem' + item.variant_id + ' = result.value; if( !isNaN( qtyItem' + item.variant_id + ' )) result.value++;return false;" class="increase items-count btn-plus" type="button">+</button></div>' +
                                '<div style="width: 15%;" class="text-right"><span class="cart-price"> <span class="price">' + Bizweb.formatMoney(item.price * item.quantity, "{{amount_no_decimals_with_comma_separator}}₫") + '</span> </span></div>' +
                                '</div>';
                            jQuery(pageCartItem).prependTo(table);
                            $('.link_product').text();
                        });
                    }
                }
            });
        }
    }
    jQuery('.total-price').html(Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫"));
    updateCartDesc(cart);
}
Bizweb.updateCartPageFormMobile = function(cart, cart_summary_id, cart_count_id) {
    if ((typeof cart_summary_id) === 'string') {
        var cart_summary = jQuery(cart_summary_id);
        if (cart_summary.length) {
            cart_summary.empty();
            jQuery.each(cart, function(key, value) {
                if (key === 'items') {
                    var table = jQuery(cart_summary_id);
                    if (value.length) {
                        jQuery('<div class="cart_page_mobile content-product-list"></div>').appendTo(table);
                        jQuery.each(value, function(i, item) {
                            if (item.image != null) {
                                var src = Bizweb.resizeImage(item.image, 'small');
                            } else {
                                var src = "//bizweb.dktcdn.net/thumb/large/assets/themes_support/noimage.gif";
                            }
                            jQuery('<div class="item-product item productid-' + item.variant_id + ' "><div class="item-product-cart-mobile"><a class="product-images1" href="' + item.url + '"  title="' + item.name + '"><img width="80" height="150" alt="" src="' + src + '" alt="' + item.name + '"></a></div>' +
                                '<div class="title-product-cart-mobile"><h3><a href="' + item.url + '" title="' + item.name + '">' + item.name + '</a></h3><p>Giá: <span class="pricechange">' + Bizweb.formatMoney(item.price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span></p></div>' +
                                '<div class="select-item-qty-mobile"><div class="txt_center">' +
                                '<input class="variantID" type="hidden" name="variantId" value="' + item.variant_id + '"><button onClick="var result = document.getElementById(\'qtyMobile' + item.variant_id + '\'); var qtyMobile' + item.variant_id + ' = result.value; if( !isNaN( qtyMobile' + item.variant_id + ' ) &amp;&amp; qtyMobile' + item.variant_id + ' &gt; 1 ) result.value--;return false;" class="reduced items-count btn-minus" type="button">–</button><input type="text" maxlength="12" min="0" class="input-text number-sidebar qtyMobile' + item.variant_id + '" id="qtyMobile' + item.variant_id + '" name="Lines" id="updates_' + item.variant_id + '" size="4" value="' + item.quantity + '"><button onClick="var result = document.getElementById(\'qtyMobile' + item.variant_id + '\'); var qtyMobile' + item.variant_id + ' = result.value; if( !isNaN( qtyMobile' + item.variant_id + ' )) result.value++;return false;" class="increase items-count btn-plus" type="button">+</button></div>' +
                                '<a class="button remove-item remove-item-cart" href="javascript:;" data-id="' + item.variant_id + '" title="Xóa">Xoá</a></div>').appendTo(table.children('.content-product-list'));
                        });
                        jQuery('<div class="header-cart-price" style=""><div class="title-cart clearfix"><h3 class="text-xs-left">Tổng tiền</h3><a class="text-xs-right totals_price_mobile" title="' + Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫") + '">' + Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫") + '</a></div>' +
                            '<div class="checkout"><button class="btn-proceed-checkout-mobile" title="Thanh toán ngay" type="button" onclick="window.location.href=\'/checkout\'">' +
                            '<span>Thanh toán ngay</span></button></div>' +
                            '<button class="btn btn-proceed-continues-mobile" title="Tiếp tục mua hàng" type="button" onclick="window.location.href=\'/collections/all\'">Tiếp tục mua hàng</button>' +
                            '</div>').appendTo(table);
                    }
                }
            });
        }
    }
    updateCartDesc(cart);
}

function updateCartDesc(data) {
    var $cartPrice = Bizweb.formatMoney(data.total_price, "{{amount_no_decimals_with_comma_separator}}₫"),
        $cartMobile = $('#header .cart-mobile .quantity-product'),
        $cartDesktop = $('.count_item_pr'),
        $cartDesktopList = $('.cart-counter-list'),
        $cartPopup = $('.cart-popup-count');
    switch (data.item_count) {
        case 0:
            $cartMobile.text('0');
            $cartDesktop.text('0');
            $cartDesktopList.text('0');
            $cartPopup.text('0');
            break;
        case 1:
            $cartMobile.text('1');
            $cartDesktop.text('1');
            $cartDesktopList.text('1');
            $cartPopup.text('1');
            break;
        default:
            $cartMobile.text(data.item_count);
            $cartDesktop.text(data.item_count);
            $cartDesktopList.text(data.item_count);
            $cartPopup.text(data.item_count);
            break;
    }
    $('.top-cart-content .top-subtotal .price, aside.sidebar .block-cart .subtotal .price, .popup-total .total-price').html($cartPrice);
    $('.popup-total .total-price').html($cartPrice);
    $('.cart-collaterals .totals_price').html($cartPrice);
    $('.header-cart-price .totals_price_mobile').html($cartPrice);
    $('.cartCount, .cart-products-count').html(data.item_count);
}
Bizweb.onCartUpdate = function(cart) {
    Bizweb.updateCartFromForm(cart, '.mini-products-list');
    Bizweb.updateCartPopupForm(cart, '#popup-cart-desktop .tbody-popup');

};
Bizweb.onCartUpdateClick = function(cart, variantId) {
    jQuery.each(cart, function(key, value) {
        if (key === 'items') {
            jQuery.each(value, function(i, item) {
                if (item.variant_id == variantId) {
                    $('.productid-' + variantId).find('.pricechange').html(Bizweb.formatMoney(item.price, "{{amount_no_decimals_with_comma_separator}}₫"));
                    $('.productid-' + variantId).find('.cart-price span.price').html(Bizweb.formatMoney(item.price * item.quantity, "{{amount_no_decimals_with_comma_separator}}₫"));
                    $('.productid-' + variantId).find('.items-count').prop("disabled", false);
                    $('.productid-' + variantId + ' .number-sidebar').val(item.quantity);
                    if (item.quantity == '1') {
                        $('.productid-' + variantId).find('.items-count.btn-minus').prop("disabled", true);
                    }
                }
            });
        }
    });
    updateCartDesc(cart);
}
Bizweb.onCartRemoveClick = function(cart, variantId) {
    jQuery.each(cart, function(key, value) {
        if (key === 'items') {
            jQuery.each(value, function(i, item) {
                if (item.variant_id == variantId) {
                    $('.productid-' + variantId).remove();
                }
            });
        }
    });
    updateCartDesc(cart);
}
$(window).ready(function() {
    $.ajax({
        type: 'GET',
        url: '/cart.js',
        async: false,
        cache: false,
        dataType: 'json',
        success: function(cart) {
            Bizweb.updateCartFromForm(cart, '.mini-products-list');
            Bizweb.updateCartPopupForm(cart, '#popup-cart-desktop .tbody-popup');

        }
    });
});