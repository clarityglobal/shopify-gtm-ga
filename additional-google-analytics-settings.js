var checkoutLabel;
if(Shopify.Checkout && Shopify.Checkout.step) {
    checkoutLabel = Shopify.Checkout.step.split("_").map(function(string){return string.charAt(0).toUpperCase() + string.slice(1);}).join(" ");
} 

window.dataLayerData = window.dataLayerData || {};
window.dataLayerData.customer = window.dataLayerData.customer || {};
window.dataLayerData.cart = window.dataLayerData.cart || {};
window.dataLayerData.collection = window.dataLayerData.collection || {};
window.dataLayerData.page = window.dataLayerData.page || {};
window.dataLayerData.product = window.dataLayerData.product || {};

var pageType = window.dataLayerData.page.template ? window.dataLayerData.page.template : "Checkout > " + checkoutLabel;

ga('set', 'contentGroup1', pageType); 
ga('set', 'contentGroup2', window.dataLayerData.page.collection); 

ga('set', 'userId', __st.cid);
ga('set', 'dimension1', __st.cid);
ga('set', 'dimension2', window.dataLayerData.customer.totalSpent);
ga('set', 'dimension3', window.dataLayerData.customer.ordersCount);
ga('set', 'dimension4', window.dataLayerData.customer.tags ? window.dataLayerData.customer.tags.join(",") : undefined);
ga('set', 'dimension5', pageType);
ga('set', 'dimension6', window.dataLayerData.cart.total);
ga('set', 'dimension7', window.dataLayerData.cart.count);
ga('set', 'dimension8', window.dataLayerData.page.collection);
ga('set', 'dimension9', window.dataLayerData.collection.productCount);
ga('set', 'dimension10', window.dataLayerData.product.title);
ga('set', 'dimension11', window.dataLayerData.product.sku);
ga('set', 'dimension12', window.dataLayerData.product.type);
ga('set', 'dimension13', window.dataLayerData.product.brand);
ga('set', 'dimension14', window.dataLayerData.product.price);
ga('set', 'dimension15', window.dataLayerData.product.inStock);
ga('set', 'dimension16', window.dataLayerData.product.stockQty);
ga('set', 'dimension17', window.dataLayerData.product.tags ? window.dataLayerData.product.tags.join(",") : undefined);
ga('set', 'dimension18', window.dataLayerData.product.hasNoVariants);
ga('set', 'dimension19', window.dataLayerData.product.numVariants);
ga('set', 'dimension20', window.dataLayerData.product.variantsInStock);
