$(document).ready(function(){
    $("#btnAlert").click(function () {
        // console.log("tes")
        $("#divAlert").removeClass("d-none")
        window.scrollTo(0, 0);
        const nama = $("#inputNama").val();
        $("#alertText").html("Terima Kasih" + " " + nama + " " + "Link sudah dapat diEmail anda")

    });

    $("#btnClose").click(function () {
        $("#divAlert").addClass("d-none")
    });

// click-foto

    $("#mangkir-id").click(function (e) {
        e.preventDefault();
        const mangkirid = $("#mangkir-id").attr("src");
        window.scrollTo(0, 0);
        $("#chair-id").attr("src", mangkirid);
        $("#chair-id").css("width","95%")

    });
    $("#saman-id").click(function (e) {
        e.preventDefault();
        const samanid = $("#saman-id").attr("src");
        window.scrollTo(0, 0);
        $("#chair-id").attr("src", samanid)
    });
    $("#lini-id").click(function (e) {
        e.preventDefault();
        const liniid = $("#lini-id").attr("src");
        window.scrollTo(0, 0);
        $("#chair-id").attr("src", liniid)
    });
    $("#syail-id").click(function (e) {
        e.preventDefault();
        const syailid = $("#syail-id").attr("src");
        window.scrollTo(0, 0);
        $("#chair-id").attr("src", syailid)
    });

    $("#submitform").click(function (e) {
        // console.log("tes");
        e.preventDefault();
        $("#alert").removeClass("d-none");
        $("#form-id").addClass("d-none");
        // window.scrollTo(0, 0);
        const varNama = $("#firstname").val();
        $("#alerttext").html("Terima Kasih" + " " + varNama + " " + "Telah Order di Website Luxspace");
        const varNama1 = $("#address").val();
        $("#alerttext1").html("Paket akan dikirim ke " + " " + varNama1 + " " + "secepatnya");
    })

});
  