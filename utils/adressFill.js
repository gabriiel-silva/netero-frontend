$(document).ready(function() {
$('#autofill-button').click(function() {
var cep = $('#cep').val().replace('-', '');   
if (cep.length != 8 || isNaN(cep)) {
    alert('CEP inválido');
    } else {
    $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function(data) {
    if (data.erro) {
        alert('CEP não encontrado');
    } else {
    $('#logradouro').val(data.logradouro);
    $('#bairro').val(data.bairro);
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${data.uf}`)
    .then(response => response.json())
    .then(ufData => {
    $('#slctuf option').each(function() {
    if ($(this).text() == ufData.nome) {
        $(this).attr('selected', 'selected');
        $('#slctuf').trigger('change');
        }});
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${data.uf}/municipios`)
    .then(response => response.json())
    .then(municipios => {
    $('#slctcidade option').remove();
    $('#slctcidade').append('<option value="" disabled="disabled" selected="selected">Cidades</option>');
    municipios.forEach(function(municipio) {
    var option = $('<option></option>').attr('value', municipio.nome).text(municipio.nome);
    $('#slctcidade').append(option);
    });
    $('#slctcidade option').each(function() {
    if ($(this).text() == data.localidade) {
        $(this).attr('selected', 'selected');
                    }});
                });
            });
        }});
    }});
});