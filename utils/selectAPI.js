fetch('https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome')
.then(response => response.json())
.then(distritos => {
  const ufs = new Set();
  distritos.forEach(distrito => {
  ufs.add(distrito.municipio.microrregiao.mesorregiao.UF.sigla);
});

const ufsArray = Array.from(ufs).sort();
const selectUf = document.querySelector('#slctuf');
  ufsArray.forEach(uf => {
    const option = document.createElement('option');
    option.value = uf;
    option.text = distritos.find(distrito => distrito.municipio.microrregiao.mesorregiao.UF.sigla === uf).municipio.microrregiao.mesorregiao.UF.nome;
    selectUf.appendChild(option);
});

selectUf.addEventListener('change', function() {
  const siglaSelecionada = this.value;
fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${siglaSelecionada}/municipios`)
  .then(response => response.json())
  .then(municipios => {
    const selectCidade = document.querySelector('#slctcidade');
      selectCidade.innerHTML = '<option value="" disabled="disabled" selected="selected">Cidades</option>';
      municipios.forEach(municipio => {
      const option = document.createElement('option');
      option.value = municipio.nome;
      option.text = municipio.nome;
      selectCidade.appendChild(option);
      }); 
    });
  });
});