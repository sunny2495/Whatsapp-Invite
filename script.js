document.getElementById("saveContact").addEventListener("click", function() {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Umesh Kumar
ORG:Freelance Video Editor / Graphic Designer
TEL:+917428542352
EMAIL:dr.fontkw2019@gmail.com
URL:https://www.instagram.com/shayar_kumar600
END:VCARD`;

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Umesh_Kumar_Contact.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
