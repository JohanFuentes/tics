//-------FORMATO DE LA PLATA-------//
const formatter = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP', minimumFractionDigits: 0});
//---------------------------------//
//-------Acortador------//
function acortador(Nombre,Interes,Valor,NCuotas){
    var Valor_Cuota = Math.round((Valor*Interes)/(1-(1+Interes)**(-NCuotas)));
    var Total_credito = Math.round(Valor_Cuota*NCuotas);
    var Interes_mensual = Interes*100;
    var Cae = Interes_mensual*NCuotas;
    let lista = [Nombre, formatter.format(Valor_Cuota), formatter.format(Total_credito), Interes_mensual.toFixed(2)+'%', Cae.toFixed(2)+'%'];
    return lista
}
//----------------------//
//-------Calculo por banco-------//
function Itau(Valor,NCuotas){
    var Nombre = "Banco Itau";
    if 		(Valor>=1 		&& Valor<=3000000) {
        if (NCuotas>=1 && NCuotas<=48) {return acortador(Nombre, 0.0193, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=3000001 && Valor<=30000000) {
        if (NCuotas>=1 && NCuotas<=48) {return acortador(Nombre, 0.0159, Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}
function Santander(Valor,NCuotas){
    var Nombre = "Banco Santander";
    if 		(Valor>=1 		 && Valor<=1000000) {
        if 		(NCuotas>=1  && NCuotas<=12) {return acortador(Nombre, 0.0256, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=24) {return acortador(Nombre, 0.0258, Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=36) {return acortador(Nombre, 0.0260, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0261, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=1000001  && Valor<=1500000) {
        if 		(NCuotas>=1 && NCuotas<=48) {return acortador(Nombre, 0.0228, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=1500001  && Valor<=5000000) {
        if 		(NCuotas>=1  && NCuotas<=12) {return acortador(Nombre, 0.0198, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=24) {return acortador(Nombre, 0.02,   Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=36) {return acortador(Nombre, 0.0201, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0202, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=5000001  && Valor<=10000000) {
        if (NCuotas>=1 && NCuotas<=48) {return acortador(Nombre, 0.0143, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=10000001 && Valor<=20000000) {
        if 		(NCuotas>=1  && NCuotas<=12) {return acortador(Nombre, 0.0134, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=24) {return acortador(Nombre, 0.0136, Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=36) {return acortador(Nombre, 0.0137, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0138, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=20000001 && Valor<=30000000) {
        if (NCuotas>=1 && NCuotas<=48) {return acortador(Nombre, 0.0130, Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}
function Edwards(Valor,NCuotas){
    var Nombre = "Banco Edwards";
    if 		(Valor>=1 		&& Valor<=3000000) {
        if (NCuotas>=1 && NCuotas<=48) {return acortador(Nombre, 0.0225, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=3000001 && Valor<=20000000) {
        if (NCuotas>=1 && NCuotas<=48) {return acortador(Nombre, 0.0163, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=20000001 && Valor<=30000000) {
        if 		(NCuotas>=1  && NCuotas<=12) {return acortador(Nombre, 0.0145, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=24) {return acortador(Nombre, 0.0147, Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=36) {return acortador(Nombre, 0.015,  Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0152, Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}
function Caja_los_andes(Valor,NCuotas){
    var Nombre = "Caja Los Andes"
    if 		(Valor>=1  && Valor<=1500000) {
        if 		(NCuotas>=1  && NCuotas<=24) {return acortador(Nombre, 0.0179, Valor, NCuotas)}
        else if (NCuotas>=24 && NCuotas<=48) {return acortador(Nombre, 0.0183, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=1500001  && Valor<=5000000) {
        if 		(NCuotas>=1  && NCuotas<=24) {return acortador(Nombre, 0.0177, Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=36) {return acortador(Nombre, 0.0179, Valor, NCuotas)}
        else if (NCuotas>=36 && NCuotas<=48) {return acortador(Nombre, 0.0159, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=5000001  && Valor<=26000000) {
        if 		(NCuotas>=1  && NCuotas<=12) {return acortador(Nombre, 0.0053, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=24) {return acortador(Nombre, 0.0147, Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=36) {return acortador(Nombre, 0.0145, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.011,  Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}
function Consorcio(Valor,NCuotas){
    var Nombre = "Consorcio";
    if 		(Valor>=1 		 && Valor<=2000000) {
        if 	(NCuotas>=1      && NCuotas<=48) {return acortador(Nombre, 0.0179, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=2000001  && Valor<=5000000) {
        if 		(NCuotas>=1  && NCuotas<=48) {return acortador(Nombre, 0.0165, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=5000001  && Valor<=8000000) {
        if 	(NCuotas>=1      && NCuotas<=48) {return acortador(Nombre, 0.0162, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=8000001  && Valor<=30000000) {
        if  (NCuotas>=1      && NCuotas<=48) {return acortador(Nombre, 0.016, Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}
//-------------------------------//
//------Calculadora------//
function Calculadora(Valor,NCuotas){
    let lista =[]
    lista.push(Itau(Valor, NCuotas));
    lista.push(Santander(Valor, NCuotas));
    lista.push(Edwards(Valor, NCuotas));
    lista.push(Caja_los_andes(Valor, NCuotas));
    lista.push(Consorcio(Valor,NCuotas));
    return lista
}
//------Generador de tabla------//
function Generar_tabla(Valor,NCuotas){
    var mytable = '<table class="table"><thead class="thead-dark"><tr><th scope="col">Nombre entidad financiera</th><th scope="col">Valor de la cuota</th><th scope="col">Total del credito</th><th scope="col">Interes mensual</th><th scope="col">CAE</th></tr></thead><tbody>';
    for (var ROW of Calculadora(Valor,NCuotas)){  
        mytable += "<tr>";
        for (var COL of ROW){  mytable += "<td>" + COL + "</td>"; };
        mytable += "</tr>";
    };
    mytable += "</tbody></table>";

    return mytable;
    //document.write(mytable);
}
//------------------------------//
