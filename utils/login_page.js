window.onload = function switching_stakeholders() {

    var userCliente = document.getElementById('infoCliente');
    var userCuidador = document.getElementById("infoCuidador");
    var userEmpresa = document.getElementById("infoEmpresa");       /*  switching bet users  */
    
    userCliente.onclick = clienteInfo;
    userCuidador.onclick = cuidadorInfo;
    userEmpresa.onclick = empresaInfo;
    }
    function enable_button()
    {
    document.getElementById("login").style.backgroundColor = "#ffffff";
    document.getElementById("login").style.cursor = "pointer";
    }
    function empresaInfo(){
        document.getElementById("username").innerHTML = "CNPJ";
        document.getElementById("login").disabled= "false";
    
        enable_button();
                                                        /* enabling button / switching info */
    }
    function clienteInfo(){
        document.getElementById("username").innerHTML = "Email / Telefone";
        document.getElementById("login").disabled= "false";
    
        enable_button();
    
    }
    function cuidadorInfo()
    {   document.getElementById("username").innerHTML = "Email / Telefone";
        document.getElementById("login").disabled= "false";
    
        enable_button();
    }
    
 
    