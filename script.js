function generateQRCode () {
let website = document.getElementById("website").value
if (website) {
    let qrcodecontainer = document.getElementById("qrcode")
    qrcodecontainer.innerHTML = "";
    new QRCode(qrcodecontainer, website)

    document.getElementById("qr-container").style.display ="flex";
}
else {
    alert("please enter the valid url")
}
}