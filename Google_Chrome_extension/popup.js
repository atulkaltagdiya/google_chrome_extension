document.addEventListener('DOMContentLoaded', function () {
    var clipboardContent = document.getElementById('clipboardContent');
    var qrCodeContainer = document.getElementById('qrcode');
    function generateQRCode(text) {
        var typeNumber = 0;
        var errorCorrectionLevel = 'L';
        var qr = new qrcode(typeNumber, errorCorrectionLevel);
        qr.addData(text);
        qr.make();
        qrCodeContainer.innerHTML = qr.createImgTag();
    }
    clipboardContent.addEventListener('click', function () {
        navigator.clipboard.readText().then(function (text) {
            clipboardContent.textContent = "Copied content => " + text;
            generateQRCode(text);
        }).catch(function (err) {
            clipboardContent.textContent = "Error reading clipboard: " + err;
        });
    });
}); 