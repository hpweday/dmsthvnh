









function searchAddressGG(address) {
    var url = "https://www.google.com/maps/search/?q=" + encodeURIComponent(address);

    // Mở một tab mới với URL này
    window.open(url, '_blank');
}