function consulta_cep(){
    $("barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#tituloCep").html("CEP " + response.cep);
            $(".cep").show();
            //$("#logradouro").html(response.logradouro);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //alert(response)
        }
    })
}

$(function(){
    $(".cep").hide
})