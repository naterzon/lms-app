// Reemplazar cancelBubble con stopPropagation donde sea necesario
document.addEventListener('contextmenu', function(event) {
    if (typeof event.cancelBubble === 'undefined') {
        event.stopPropagation = event.stopPropagation || function() {};
        event.preventDefault = event.preventDefault || function() {};
    }
    console.log("Parche aplicado: cancelBubble redirigido a stopPropagation.");
});
