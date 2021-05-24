let profissao = {};
let raca_per = {};
var items_per = [];
let url = window.location.href;
let pers_id = url.split('/');
pers_id = pers_id[pers_id.length - 1];
//const $ = require('jquery'); // Nescessário para usar com electron.js 
const tabela_resol = [
    [-7, "verde", "verde", "verde", "verde", "verde", "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "laranja", "vermelho", "azul", "cinza"],
    [-6, "verde", "verde", "verde", "verde", "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "laranja", "vermelho", "azul", "cinza"],
    [-5, "verde", "verde", "verde", "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "vermelho", "azul", "cinza"],
    [-4, "verde", "verde", "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "vermelho", "azul", "cinza"],
    [-3, "verde", "verde", "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "vermelho", "azul", "cinza"],
    [-2, "verde", "verde", "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "vermelho", "vermelho", "azul", "cinza"],
    [-1, "verde", "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "vermelho", "vermelho", "azul", "cinza"],
    [0, "verde", "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "cinza"],
    [1, "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "cinza"],
    [2, "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "vermelho", "vermelho", "azul", "azul", "cinza"],
    [3, "verde", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "cinza"],
    [4, "verde", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "cinza"],
    [5, "verde", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "cinza"],
    [6, "verde", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "cinza"],
    [7, "verde", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "cinza"],
    [8, "verde", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "cinza"],
    [9, "verde", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "cinza"],
    [10, "verde", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "azul", "cinza"],
    [11, "verde", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "roxo", "cinza"],
    [12, "verde", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "roxo", "cinza"],
    [13, "verde", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "roxo", "cinza"],
    [14, "verde", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "azul", "roxo", "cinza"],
    [15, "verde", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "roxo", "roxo", "cinza"],
    [16, "verde", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "roxo", "roxo", "cinza"],
    [17, "verde", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "roxo", "roxo", "cinza"],
    [18, "verde", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "azul", "roxo", "roxo", "cinza"],
    [19, "verde", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "roxo", "roxo", "roxo", "cinza"],
    [20, "verde", "amarelo", "laranja", "laranja", "laranja", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "azul", "roxo", "roxo", "roxo", "cinza"]
];

$(document).ready(function (){
    let itens_personagem = $('[name="data.items"]').val();
    if (itens_personagem) itens_personagem = JSON.parse(itens_personagem);
    if (Array.isArray(itens_personagem)) items_per = itens_personagem;
    else return;
    if (items_per.length > 1) items_per.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    verifica_items();
    combate_controls();
    tecnicas_controll();
    habilidades_controll();
    defesa_controll();
    magias_controll();
    pertences_controll();
    transportes_controll();
});

$('.btn_fromJson').click(function () {
    const div_hidden = $('.uploadJSON');
    if ($(div_hidden).hasClass("mhidden")) {
        $(div_hidden).removeClass("mhidden");
    }
});

$('.btn_importJSON').click(function () {
    let filename = $('.fileJSON')[0].files[0];
    let reader = new FileReader();
    reader.onload = fileRead;
    reader.readAsText(filename);
    function fileRead(e) {
        let texto = e.target.result;
        $.post($SCRIPT_ROOT + "/uploadFoundryNPC/" + pers_id, {data: texto}, function () {
            location.reload();
        });
    }
});

$('.searchHab').keyup(function (event) {
    let search = $(event.currentTarget).val();
    let search_down = search.toLowerCase();
    $(".habName").each(function(this_td, element) {
        let pertence = $(element).html();
        pertence = pertence.toLowerCase();
        let parente = $(element).closest('tr');
        if (pertence.includes(search_down) && search_down.length > 0) {
            $(parente).removeClass('mhidden');
        } 
        else if (search_down.length > 0) {
            $(parente).addClass('mhidden');
        }
        else {
            $(parente).removeClass('mhidden');
        }
    });
    $('.table_hab_items').each(function(this_td, element) {
        let esconds =  $(element).find('.mhidden');
        if (esconds.length+1 == $(element).find('tr').length) {
            $(element).addClass('mhidden');
        } else $(element).removeClass('mhidden');
    });
});

$('.searchComb').keyup(function (event) {
    let search = $(event.currentTarget).val();
    let search_down = search.toLowerCase();
    $(".combName").each(function(this_td, element) {
        let pertence = $(element).html();
        pertence = pertence.toLowerCase();
        let parente = $(element).closest('tr');
        if (pertence.includes(search_down) && search_down.length > 0) {
            $(parente).removeClass('mhidden');
        } 
        else if (search_down.length > 0) {
            $(parente).addClass('mhidden');
        }
        else {
            $(parente).removeClass('mhidden');
        }
    });
    $('.table_combate_items').each(function(this_td, element) {
        let esconds =  $(element).find('.mhidden');
        if (esconds.length+1 == $(element).find('tr').length) {
            $(element).addClass('mhidden');
        } else $(element).removeClass('mhidden');
    });
});

$('.searchDef').keyup(function (event) {
    let search = $(event.currentTarget).val();
    let search_down = search.toLowerCase();
    $(".defName").each(function(this_td, element) {
        let pertence = $(element).html();
        pertence = pertence.toLowerCase();
        let parente = $(element).closest('tr');
        if (pertence.includes(search_down) && search_down.length > 0) {
            $(parente).removeClass('mhidden');
        } 
        else if (search_down.length > 0) {
            $(parente).addClass('mhidden');
        }
        else {
            $(parente).removeClass('mhidden');
        }
    });
    $('.table_defesas_items').each(function(this_td, element) {
        let esconds =  $(element).find('.mhidden');
        if (esconds.length+1 == $(element).find('tr').length) {
            $(element).addClass('mhidden');
        } else $(element).removeClass('mhidden');
    });
});

$('.searchTec').keyup(function (event) {
    let search = $(event.currentTarget).val();
    let search_down = search.toLowerCase();
    $(".tecName").each(function(this_td, element) {
        let pertence = $(element).html();
        pertence = pertence.toLowerCase();
        let parente = $(element).closest('tr');
        if (pertence.includes(search_down) && search_down.length > 0) {
            $(parente).removeClass('mhidden');
        } 
        else if (search_down.length > 0) {
            $(parente).addClass('mhidden');
        }
        else {
            $(parente).removeClass('mhidden');
        }
    });
    $('.tecnicas_items').each(function(this_td, element) {
        let esconds =  $(element).find('.mhidden');
        if (esconds.length+1 == $(element).find('tr').length) {
            $(element).addClass('mhidden');
        } else $(element).removeClass('mhidden');
    });
});

$('.searchMag').keyup(function (event) {
    let search = $(event.currentTarget).val();
    let search_down = search.toLowerCase();
    $(".magName").each(function(this_td, element) {
        let pertence = $(element).html();
        pertence = pertence.toLowerCase();
        let parente = $(element).closest('tr');
        if (pertence.includes(search_down) && search_down.length > 0) {
            $(parente).removeClass('mhidden');
        } 
        else if (search_down.length > 0) {
            $(parente).addClass('mhidden');
        }
        else {
            $(parente).removeClass('mhidden');
        }
    });
    $('.magias_its').each(function(this_td, element) {
        let esconds =  $(element).find('.mhidden');
        if (esconds.length+1 == $(element).find('tr').length) {
            $(element).addClass('mhidden');
        } else $(element).removeClass('mhidden');
    });
});

$('.searchPert').keyup(function (event) {
    let search = $(event.currentTarget).val();
    let search_down = search.toLowerCase();
    $(".pertName").each(function(this_td, element) {
        let pertence = $(element).html();
        pertence = pertence.toLowerCase();
        let parente = $(element).closest('tr');
        if (pertence.includes(search_down) && search_down.length > 0) {
            $(parente).removeClass('mhidden');
        } 
        else if (search_down.length > 0) {
            $(parente).addClass('mhidden');
        }
        else {
            $(parente).removeClass('mhidden');
        }
    });
    $('.table_pertences_items').each(function(this_td, element) {
        let esconds =  $(element).find('.mhidden');
        if (esconds.length+1 == $(element).find('tr').length) {
            $(element).addClass('mhidden');
        } else $(element).removeClass('mhidden');
    });
});

$('.searchTrans').keyup(function (event) {
    let search = $(event.currentTarget).val();
    let search_down = search.toLowerCase();
    $(".transName").each(function(this_td, element) {
        let pertence = $(element).html();
        pertence = pertence.toLowerCase();
        let parente = $(element).closest('tr');
        if (pertence.includes(search_down) && search_down.length > 0) {
            $(parente).removeClass('mhidden');
        } 
        else if (search_down.length > 0) {
            $(parente).addClass('mhidden');
        }
        else {
            $(parente).removeClass('mhidden');
        }
    });
});

$('.roll_avulso').click(function () {
    let col = $('.coluna_avulso').val();
    if (col) col = parseInt(col);
    else col = -8;
    if (col > -8 && col <= 20) {
        $.getJSON($SCRIPT_ROOT + '/d20', function (dado) {
            let coluna = tabela_resol.filter(b => b[0] === col);
            let resultado = coluna[0][dado];
            atrib_message("1d20", dado, resultado, "Teste Avulso", coluna[0][0]);
            $('.coluna_avulso').val("");
        });
    }
});

$('.teste_avulso').click(function () {
    let forc_ataque = $('.fataque_avulso').val();
    if (forc_ataque) forc_ataque = parseInt(forc_ataque);
    else forc_ataque = -8;
    let forc_def = $('.fdefesa_avulso').val();
    if (forc_def) forc_def = parseInt(forc_def);
    else forc_def = -8;
    if (forc_ataque > -8 && forc_def > -8) {
        roll_teste_resist(forc_ataque, forc_def);
        $('.fataque_avulso').val("");
        $('.fdefesa_avulso').val("");
    }
});

$('.rolaR_Fis').click(function () {
    let forc_ataque = $('[name="data.forca_ataque"]').val();
    if (forc_ataque) forc_ataque = parseInt(forc_ataque);
    else forc_ataque = 0;
    let forc_resist = $('[name="data.rf"]').val();
    if (forc_resist) parseInt(forc_resist);
    else forc_resist = 0;
    roll_teste_resist(forc_ataque, forc_resist);
    $('[name="data.forca_ataque"]').val("");
});

$('.rolaR_Mag').click(function () {
    let forc_ataque = $('[name="data.forca_ataque"]').val();
    if (forc_ataque) forc_ataque = parseInt(forc_ataque);
    else forc_ataque = 0;
    let forc_resist = $('[name="data.rm"]').val();
    if (forc_resist) parseInt(forc_resist);
    else forc_resist = 0;
    roll_teste_resist(forc_ataque, forc_resist);
    $('[name="data.forca_ataque"]').val("");
});

$('.rolarMoral').click(function () {
    let moral = $('[name="data.moral"]').val();
    if (moral) moral = parseInt(moral);
    else moral = 0;
    if (moral < -7) moral = -7;
    if (moral > 20) moral = 20;
    $.getJSON($SCRIPT_ROOT + '/d20', function (data) {
        let coluna = tabela_resol.filter(b => b[0] === moral);
        let resultado = coluna[0][data];
        atrib_message("1d20", data, resultado, "Moral" , coluna[0][0]);
    });
});

$('[name="data.atributos.INT"]').change(function (event,) {
    att_atrib(event, "INT");
});
$('[name="data.atributos.AUR"]').change(function (event) {
    att_atrib(event, "AUR");
});
$('[name="data.atributos.CAR"]').change(function (event) {
    att_atrib(event, "CAR");
});
$('[name="data.atributos.FOR"]').change(function (event) {
    att_atrib(event, "FOR");
});
$('[name="data.atributos.FIS"]').change(function (event) {
    att_atrib(event, "FIS");
});
$('[name="data.atributos.AGI"]').change(function (event) {
    att_atrib(event, "AGI");
});
$('[name="data.atributos.PER"]').change(function (event) {
    att_atrib(event, "PER");
});

$('.btn_combate').click(function (event) {
    let combate = $(event.currentTarget).data('combate');
    add_items(combate);
    att_combate();
});

$('.btn_hab').click(function (event) {
    let hab = $(event.currentTarget).data('hab');
    add_items(hab);
    att_hab_tables();
});

$('.btn_defesa').click(function (event) {
    let defesa = $(event.currentTarget).data('defesa');
    add_items(defesa);
    att_defesa_table();
});

$('.btn_tecnica').click(function (event) {
    let tecnica = $(event.currentTarget).data('tecnica');
    add_items(tecnica);
    att_tecnicas_table();
});

$('.btn_magia').click(function (event) {
    let magia = $(event.currentTarget).data('magia');
    add_items(magia);
    att_magias_table();
});

$('.btn_pertence').click(function (event) {
    let pertence = $(event.currentTarget).data('pertence');
    add_items(pertence);
    att_pertences_table();
}); 

$('.btn_transporte').click(function (event) {
    let transporte = $(event.currentTarget).data('transporte');
    add_items(transporte);
    att_transportes_table();
});

$('.subGrupoArmas').click(function (event) {
    let tipo = $(event.currentTarget).data('tipo_grupo');
    if (tipo == "CD") {
        let valor = parseInt($('[name="data.grupos.CD"]').val());
        $('[name="data.grupos.CD"]').val(valor-1);
    } else if (tipo == "CI") {
        let valor = parseInt($('[name="data.grupos.CI"]').val());
        $('[name="data.grupos.CI"]').val(valor-1);
    } else if (tipo == "CL") {
        let valor = parseInt($('[name="data.grupos.CL"]').val());
        $('[name="data.grupos.CL"]').val(valor-1);
    } else if (tipo == "CLD") {
        let valor = parseInt($('[name="data.grupos.CLD"]').val());
        $('[name="data.grupos.CLD"]').val(valor-1);
    } else if (tipo == "EL") {
        let valor = parseInt($('[name="data.grupos.EL"]').val());
        $('[name="data.grupos.EL"]').val(valor-1);
    } else if (tipo == "CmE") {
        let valor = parseInt($('[name="data.grupos.CmE"]').val());
        $('[name="data.grupos.CmE"]').val(valor-1);
    } else if (tipo == "CmM") {
        let valor = parseInt($('[name="data.grupos.CmM"]').val());
        $('[name="data.grupos.CmM"]').val(valor-1);
    } else if (tipo == "EM") {
        let valor = parseInt($('[name="data.grupos.EM"]').val());
        $('[name="data.grupos.EM"]').val(valor-1);
    } else if (tipo == "PmA") {
        let valor = parseInt($('[name="data.grupos.PmA"]').val());
        $('[name="data.grupos.PmA"]').val(valor-1);
    } else if (tipo == "PmL") {
        let valor = parseInt($('[name="data.grupos.PmL"]').val());
        $('[name="data.grupos.PmL"]').val(valor-1);
    } else if (tipo == "CpE") {
        let valor = parseInt($('[name="data.grupos.CpE"]').val());
        $('[name="data.grupos.CpE"]').val(valor-1);
    } else if (tipo == "CpM") {
        let valor = parseInt($('[name="data.grupos.CpM"]').val());
        $('[name="data.grupos.CpM"]').val(valor-1);
    } else if (tipo == "EP") {
        let valor = parseInt($('[name="data.grupos.EP"]').val());
        $('[name="data.grupos.EP"]').val(valor-1);
    } else if (tipo == "PP") {
        let valor = parseInt($('[name="data.grupos.PP"]').val());
        $('[name="data.grupos.PP"]').val(valor-1);
    } else if (tipo == "PpA") {
        let valor = parseInt($('[name="data.grupos.PpA"]').val());
        $('[name="data.grupos.PpA"]').val(valor-1);
    } else if (tipo == "PpB") {
        let valor = parseInt($('[name="data.grupos.PpB"]').val());
        $('[name="data.grupos.PpB"]').val(valor-1);
    }
    att_combate();
});

$('.addGrupoArmas').click(function (event) {
    let tipo = $(event.currentTarget).data('tipo_grupo');
    if (tipo == "CD") {
        let valor = parseInt($('[name="data.grupos.CD"]').val());
        $('[name="data.grupos.CD"]').val(valor+1);
    } else if (tipo == "CI") {
        let valor = parseInt($('[name="data.grupos.CI"]').val());
        $('[name="data.grupos.CI"]').val(valor+1);
    } else if (tipo == "CL") {
        let valor = parseInt($('[name="data.grupos.CL"]').val());
        $('[name="data.grupos.CL"]').val(valor+1);
    } else if (tipo == "CLD") {
        let valor = parseInt($('[name="data.grupos.CLD"]').val());
        $('[name="data.grupos.CLD"]').val(valor+1);
    } else if (tipo == "EL") {
        let valor = parseInt($('[name="data.grupos.EL"]').val());
        $('[name="data.grupos.EL"]').val(valor+1);
    } else if (tipo == "CmE") {
        let valor = parseInt($('[name="data.grupos.CmE"]').val());
        $('[name="data.grupos.CmE"]').val(valor+1);
    } else if (tipo == "CmM") {
        let valor = parseInt($('[name="data.grupos.CmM"]').val());
        $('[name="data.grupos.CmM"]').val(valor+1);
    } else if (tipo == "EM") {
        let valor = parseInt($('[name="data.grupos.EM"]').val());
        $('[name="data.grupos.EM"]').val(valor+1);
    } else if (tipo == "PmA") {
        let valor = parseInt($('[name="data.grupos.PmA"]').val());
        $('[name="data.grupos.PmA"]').val(valor+1);
    } else if (tipo == "PmL") {
        let valor = parseInt($('[name="data.grupos.PmL"]').val());
        $('[name="data.grupos.PmL"]').val(valor+1);
    } else if (tipo == "CpE") {
        let valor = parseInt($('[name="data.grupos.CpE"]').val());
        $('[name="data.grupos.CpE"]').val(valor+1);
    } else if (tipo == "CpM") {
        let valor = parseInt($('[name="data.grupos.CpM"]').val());
        $('[name="data.grupos.CpM"]').val(valor+1);
    } else if (tipo == "EP") {
        let valor = parseInt($('[name="data.grupos.EP"]').val());
        $('[name="data.grupos.EP"]').val(valor+1);
    } else if (tipo == "PP") {
        let valor = parseInt($('[name="data.grupos.PP"]').val());
        $('[name="data.grupos.PP"]').val(valor+1);
    } else if (tipo == "PpA") {
        let valor = parseInt($('[name="data.grupos.PpA"]').val());
        $('[name="data.grupos.PpA"]').val(valor+1);
    } else if (tipo == "PpB") {
        let valor = parseInt($('[name="data.grupos.PpB"]').val());
        $('[name="data.grupos.PpB"]').val(valor+1);
    }
    att_combate();
});

function att_transportes_table () {
    $('.table_transp_pers td').parent().remove();
    let carga_trans = 0;
    for (let item of items_per) {
        if (item.type == "Transporte") {
            carga_trans += item.data.capacidade.carga;
            $('.table_transp_pers').append(`<tr><td class="mediaeval">${item.name}</td><td class="mediaeval">${item.data.capacidade.carga}</td><td class="mediaeval">${item.data.capacidade.pessoas}</td><td><a class="remove_transporte" data-transporte="${ item._id }"><i class="fas fa-trash"></i></a></td></tr>`);
        }
    }
    if (carga_trans > 0) $('[name="data.carga_transp.hasTransp"]').prop( "checked", true );
    else $('[name="data.carga_transp.hasTransp"]').prop( "checked", false );
    $('[name="data.carga_transp.max"]').val(carga_trans.toFixed(2));
    transportes_controll();
}

function transportes_controll() {
    $('.remove_transporte').click(function(event) {
        let transporte = $(event.currentTarget).data('transporte');
        remove_item(transporte);
        att_transportes_table();
        verifica_removido(transporte, 'transporte');
    });
}

function att_pertences_table() { // Atualiza tabela de Pertences
    $('.table_pert_pers td').parent().remove();
    $('.table_pert_transp td').parent().remove();
    let forca = $('[name="data.atributos.FOR"]').val();
    if (forca) forca = parseInt(forca);
    else forca = 0;
    let carga = 0;
    let carga_transporte = 0;
    let carga_max = 20 + (forca * 20);
    if (carga_max < 20) carga_max = 20;
    for (let item of items_per) {
        if (item.type == "Pertence") {
            if (!item.data.inTransport){
                carga += item.data.peso * item.data.quant;
                $('.table_pert_pers').append(`<tr><td class="mediaeval">${item.name}</td><td class="mediaeval"><input type="number" class="qnt_pert" value="${item.data.quant}" data-pertence="${item._id}" style="width:40px;text-align:center;"/></td><td class="mediaeval" style="text-align:center;">${item.data.peso.toFixed(2)}</td><td class="mediaeval" style="text-align:center;">${(item.data.quant * item.data.peso).toFixed(2)}</td><td class="mediaeval" style="text-align:center;">${item.data.preco}</td><td><a class="movePertence" title="Mover para Transporte" data-pertence="${item._id}"><i class="fas fa-horse"></i></a></td><td><a class="remove_pertence" data-pertence="${item._id}"><i class="fas fa-trash"></i></a></td></tr>`);
            } else {
                carga_transporte += item.data.peso * item.data.quant;
                $('.table_pert_transp').append(`<tr><td class="mediaeval">${item.name}</td><td class="mediaeval">${item.data.quant}</td><td class="mediaeval">${item.data.peso.toFixed(2)}</td><td><a class="movePertence" title="Mover para o corpo" data-pertence="${item._id}"><i class="fas fa-user"></i></a></td><td><a class="remove_pertence" data-pertence="${item._id}"><i class="fas fa-trash"></i></a></td></tr>`);
            }
        }
    }
    $('[name="data.carga.value"]').val(carga.toFixed(2));
    $('[name="data.carga_transp.value"]').val(carga_transporte.toFixed(2));
    if (carga > carga_max) {
        let carga_s = carga - carga_max;
        carga_s = carga_s.toFixed(2)
        $('[name="data.carga.sobrecarga"]').prop( "checked", true );
        $('[name="data.carga.valor_s"]').val(carga_s);
        $('.sobrepeso').removeClass('mhidden');
        $('.sobrepeso').html(`<span class='fa-layers fa-fw' style='margin-left:5px;'><i class="fas fa-weight-hanging" data-fa-transform='up-10 right-10'></i><span class="mediaeval fa-layers-text" data-fa-transform='right-10 down-10'>+${carga_s}Kg</span></span>`);
    } else {
        $('[name="data.carga.sobrecarga"]').prop( "checked", false );
        $('[name="data.carga.valor_s"]').val(0);
        $('.sobrepeso').addClass('mhidden');
        
    }
    $('[name="data.carga.max"]').val(carga_max);
    $('.actor_items').val(JSON.stringify(items_per));
    pertences_controll();
}

function pertences_controll() {
    $('.remove_pertence').click(function(event) {
        let pertence = $(event.currentTarget).data('pertence');
        remove_item(pertence);
        att_pertences_table();
        verifica_removido(pertence, 'pertence');
    });
    $('.qnt_pert').change(function(event) {
        let pertence_id = $(event.currentTarget).data('pertence');
        let quant = $(event.currentTarget).val();
        if (quant) quant = parseInt(quant);
        else return;
        updatePertence(pertence_id, quant);
        att_pertences_table();
    });
    $('.movePertence').click(function(event) {
        let pertence_id = $(event.currentTarget).data('pertence');
        if ($('[name="data.carga_transp.hasTransp"]').prop('checked')) {
            movePertence(pertence_id);
            att_pertences_table();
        }
    });
}

function movePertence(pertence_id) {
    for (let item of items_per) {
        if (item._id == pertence_id) {
            if (item.data.inTransport) items_per[items_per.indexOf(item)].data.inTransport = false;
            else items_per[items_per.indexOf(item)].data.inTransport = true;
        }
    }
    $('.actor_items').val(JSON.stringify(items_per));
}

function updatePertence(pertence_id, quant) {
    for (let item of items_per) {
        if (item._id == pertence_id) items_per[items_per.indexOf(item)].data.quant = quant;
    }
    $('.actor_items').val(JSON.stringify(items_per));
}

function att_magias_table() {
    $('.table_magias_pers td').parent().remove();
    let aura = $('[name="data.atributos.AUR"]').val();
    if (aura) aura = parseInt(aura);
    else aura = 0;

    for (let item of items_per) {
        if (item.type == "Magia") {
            let total = 0;
            if (item.data.total.valorKarma) total = aura + item.data.nivel + item.data.total.valorKarma;
            else total = aura + item.data.nivel;
            items_per[items_per.indexOf(item)].data.total.valor = total;
            $('.table_magias_pers').append('<tr><td class="mediaeval"><a class="roll_magia" data-item="'+item._id+'">'+item.name+'</a></td><td class="mediaeval"><input type="number" class="nivel_magia" value="'+item.data.nivel+'" data-magia="'+item._id+'" style="width:40px;text-align:center;"/></td><td class="mediaeval">'+item.data.total.valor+'</td><td><a class="remove_magia" data-magia="'+item._id+'"><i class="fas fa-trash"></i></a></td></tr>');
        }
    }
    $('.actor_items').val(JSON.stringify(items_per));
    magias_controll();
}

function magias_controll() {
    $('.remove_magia').click(function(event) {
        let magia = $(event.currentTarget).data('magia');
        remove_item(magia);
        att_magias_table();
        verifica_removido(magia, 'magia');
    });
    $('.nivel_magia').change(function(event) {
        let magia_id = $(event.currentTarget).data('magia');
        let nivel = $(event.currentTarget).val();
        if (nivel) nivel = parseInt(nivel);
        else return;
        updateMagia(magia_id, nivel);
        att_magias_table();
    });
    $('.roll_magia').click(function(event) {
        let magia_id = $(event.currentTarget).data('item');
        const item = getItem_id(magia_id);
        roll_item(item);
    });
}

function updateMagia(magia_id, nivel) {
    for (let item of items_per) {
        if (item._id == magia_id) {
            items_per[items_per.indexOf(item)].data.nivel = nivel;
        }
    }
    $('.actor_items').val(JSON.stringify(items_per));
}

function att_tecnicas_table() {
    $('.table_tecnica td').parent().remove();
    for (let item of items_per) {
        if (item.type == "TecnicasCombate") {
            let ajuste_tecnica = item.data.ajuste.atributo;
            let nivel = item.data.nivel;
            let total = 0;
            let valor_ajuste = $('[name="data.atributos.'+ajuste_tecnica+'"]').val();
            if (valor_ajuste) valor_ajuste = parseInt(valor_ajuste);
            else valor_ajuste = 0;
            total = valor_ajuste + nivel;
            items_per[items_per.indexOf(item)].data.total = total;
            $('.table_tecnica').append('<tr><td class="mediaeval"><a class="roll_tec" data-item="'+item._id+'">'+item.name+'</a></td><td class="mediaeval"><input type="number" class="nivel_tecnica" value="'+item.data.nivel+'" data-tecnica="'+item._id+'" style="width:40px;text-align:center;"/></td><td class="mediaeval" style="text-align: center;">'+item.data.total+'</td><td class="mediaeval">'+item.data.categoria+'</td><td><a class="remove_tecnica" data-tecnica="'+item._id+'"><i class="fas fa-trash"></i></a></td> </tr>');
        }
    }
    $('.actor_items').val(JSON.stringify(items_per));
    tecnicas_controll();
}

function updateTecnica(tecnica_id, nivel) {
    for (let item of items_per) {
        if (item._id == tecnica_id) {
            items_per[items_per.indexOf(item)].data.nivel = nivel;
        }
    }
    $('.actor_items').val(JSON.stringify(items_per));
}

function tecnicas_controll() {
    $('.remove_tecnica').click(function(event) {
        let tecnica = $(event.currentTarget).data('tecnica');
        remove_item(tecnica);
        att_tecnicas_table();
        verifica_removido(tecnica, 'tecnica');
    });
    $('.nivel_tecnica').change(function(event) {
        let tecnica_id = $(event.currentTarget).data('tecnica');
        let nivel = $(event.currentTarget).val();
        if (nivel) nivel = parseInt(nivel);
        else return;
        updateTecnica(tecnica_id, nivel);
        att_tecnicas_table();
    });
    $('.roll_tec').click(function(event) {
        let tec_id = $(event.currentTarget).data('item');
        const item = getItem_id(tec_id);
        roll_item(item);
    });
}

function att_defesa_table() {
    $('.table_defesa td').parent().remove();
    let categoria = "L";
    let valor_def = 0;
    let absorcao = 0;
    let agilidade = $('[name="data.atributos.AGI"]').val();
    if (agilidade) agilidade = parseInt(agilidade);
    else agilidade = 0;
    for (let item of items_per) {
        if (item.type == "Defesa") {
            let def_tipo = item.data.defesa_base.tipo;
            if (def_tipo == "L" || def_tipo == "M" || def_tipo == "P") categoria = item.data.defesa_base.tipo;
            if (item.data.defesa_base.valor) valor_def += item.data.defesa_base.valor;
            if (item.data.absorcao) absorcao += item.data.absorcao;
            $('.table_defesa').append('<tr><td class="mediaeval">'+item.name+'</td><td class="mediaeval">'+ item.data.defesa_base.tipo  + item.data.defesa_base.valor.toString() +'</td><td class="mediaeval">'+ item.data.absorcao.toString()+'</td><td><a class="remove_defesa" data-defesa="'+item._id+'"><i class="fas fa-trash"></i></a></td> </tr>');
        }
    }
    for (let item of items_per) {
        if (item.type == "Efeito" && item.data.atributo == "DEF" && item.data.ativo) {
            if (item.data.tipo == "+") valor_def += item.data.valor;
            else if (item.data.tipo == "-") valor_def -= item.data.valor;
            else if (item.data.tipo == "/") valor_def = valor_def / item.data.valor;
            else if (item.data.tipo == "*") valor_def = valor_def * item.data.valor;
        } else if (item.type == "Efeito" && item.data.atributo == "ABS" && item.data.ativo) {
            if (item.data.tipo == "+") absorcao += item.data.valor;
            else if (item.data.tipo == "-") absorcao -= item.data.valor;
            else if (item.data.tipo == "/") absorcao = absorcao / item.data.valor;
            else if (item.data.tipo == "*") absorcao = absorcao * item.data.valor;
        }
    }
    $('[name="data.d_ativa.categoria"]').val(categoria);
    $('[name="data.d_ativa.valor"]').val(valor_def + agilidade);
    $('[name="data.d_passiva.categoria"]').val(categoria);
    $('[name="data.d_passiva.valor"]').val(valor_def);
    $('[name="data.absorcao.max"]').val(absorcao);
    defesa_controll();
} 

function defesa_controll() {
    $('.remove_defesa').click(function(event) {
        let defesa = $(event.currentTarget).data('defesa');
        remove_item(defesa);
        att_defesa_table();
        verifica_removido(defesa, 'defesa');
    });
}

function att_hab_tables () { // Atualiza tabela de Habilidades na ficha
    $('.table_h_prof td').parent().remove();
    $('.table_h_man td').parent().remove();
    $('.table_h_con td').parent().remove();
    $('.table_h_sub td').parent().remove();
    $('.table_h_inf td').parent().remove();
    $('.table_h_ger td').parent().remove();
    for (let item of items_per) {
        if (item.type == "Habilidade") {
            $('.select_hab_nata').append('<option value="'+ item.name +'">' + item.name + '</option>');
            if (item.data.tipo == "profissional") {
                $('.table_h_prof').append("<tr><td class='mediaeval' style='font-size: 80%;'><a class='roll_hab' data-item='"+item._id+"'>"+ item.name +"</a></td><td class='mediaeval'><input style='width: 30px; text-align:center;' type='number' class='hab_nivel' data-hab='"+ item._id +"' value='" + item.data.nivel + "'/></td><td><a class='remove_hab' data-hab='"+ item._id +"'><i class='fas fa-trash'></i></a></td></tr>");
            } else if (item.data.tipo == "manobra") {
                $('.table_h_man').append("<tr><td class='mediaeval' style='font-size: 80%;'><a class='roll_hab' data-item='"+item._id+"'>"+ item.name +"</a></td><td class='mediaeval'><input style='width: 30px; text-align:center;' type='number' class='hab_nivel' data-hab='"+ item._id +"' value='" + item.data.nivel + "'/></td><td><a class='remove_hab' data-hab='"+ item._id +"'><i class='fas fa-trash'></i></a></td></tr>");
            } else if (item.data.tipo == "conhecimento") {
                $('.table_h_con').append("<tr><td class='mediaeval' style='font-size: 80%;'><a class='roll_hab' data-item='"+item._id+"'>"+ item.name +"</a></td><td class='mediaeval'><input style='width: 30px; text-align:center;' type='number' class='hab_nivel' data-hab='"+ item._id +"' value='" + item.data.nivel + "'/></td><td><a class='remove_hab' data-hab='"+ item._id +"'><i class='fas fa-trash'></i></a></td></tr>");
            } else if (item.data.tipo == "subterfugio") {
                $('.table_h_sub').append("<tr><td class='mediaeval' style='font-size: 80%;'><a class='roll_hab' data-item='"+item._id+"'>"+ item.name +"</a></td><td class='mediaeval'><input style='width: 30px; text-align:center;' type='number' class='hab_nivel' data-hab='"+ item._id +"' value='" + item.data.nivel + "'/></td><td><a class='remove_hab' data-hab='"+ item._id +"'><i class='fas fa-trash'></i></a></td></tr>");
            } else if (item.data.tipo == "influencia") {
                $('.table_h_inf').append("<tr><td class='mediaeval' style='font-size: 80%;'><a class='roll_hab' data-item='"+item._id+"'>"+ item.name +"</a></td><td class='mediaeval'><input style='width: 30px; text-align:center;' type='number' class='hab_nivel' data-hab='"+ item._id +"' value='" + item.data.nivel + "'/></td><td><a class='remove_hab' data-hab='"+ item._id +"'><i class='fas fa-trash'></i></a></td></tr>");
            } else if (item.data.tipo == "geral") {
                $('.table_h_ger').append("<tr><td class='mediaeval' style='font-size: 80%;'><a class='roll_hab' data-item='"+item._id+"'>"+ item.name +"</a></td><td class='mediaeval'><input style='width: 30px; text-align:center;' type='number' class='hab_nivel' data-hab='"+ item._id +"' value='" + item.data.nivel + "'/></td><td><a class='remove_hab' data-hab='"+ item._id +"'><i class='fas fa-trash'></i></a></td></tr>");
            }
        }
    }
    habilidades_controll();
}

function habilidades_controll() {
    $('.remove_hab').click(function(event) {
        let hab = $(event.currentTarget).data('hab');
        remove_item(hab);
        att_hab_tables(); 
        att_pontos_hab();
        verifica_removido(hab, 'hab');
    });
    $('.hab_nivel').change(function (event) {
        let hab = $(event.currentTarget).data('hab');
        let nivel = $(event.currentTarget).val();
        att_hab_total(hab, nivel);
        att_pontos_hab();
    });
    $('.roll_hab').click (function (event) {
        let item_id = $(event.currentTarget).data('item');
        const item = getItem_id(item_id);
        roll_item(item);
    });
}

function att_pontos_hab() {
    for (let item of items_per) {
        if (item.type == "Habilidade") {
            att_hab_total(item._id, item.data.nivel);
        }
    }
}

function att_hab_total(hab_id, nivel) { // Atualiza nivel e total da habilidade
    for (let item of items_per) {
        if (item._id == hab_id) {
            items_per[items_per.indexOf(item)].data.nivel = parseInt(nivel);
            let atrib = item.data.ajuste.atributo;
            let valor_atrib = 0;
            if (atrib == "INT") valor_atrib = parseInt($('[name="data.atributos.INT"]').val());
            else if (atrib == "AUR") valor_atrib = parseInt($('[name="data.atributos.AUR"]').val());
            else if (atrib == "CAR") valor_atrib = parseInt($('[name="data.atributos.CAR"]').val());
            else if (atrib == "FOR") valor_atrib = parseInt($('[name="data.atributos.FOR"]').val());
            else if (atrib == "FIS") valor_atrib = parseInt($('[name="data.atributos.FIS"]').val());
            else if (atrib == "AGI") valor_atrib = parseInt($('[name="data.atributos.AGI"]').val());
            else if (atrib == "PER") valor_atrib = parseInt($('[name="data.atributos.PER"]').val());
            items_per[items_per.indexOf(item)].data.ajuste.valor = valor_atrib;
            let total = 0;
            total = parseInt(nivel) + parseInt(valor_atrib) + parseInt(item.data.penalidade) + parseInt(item.data.bonus);
            if (typeof total == 'number') items_per[items_per.indexOf(item)].data.total = parseInt(total);
        }
    }
    $('.actor_items').val(JSON.stringify(items_per));
}

function att_combate() { // Atualiza Tabela de ATAQUES
    $('.table_combate_itemspers td').parent().remove();
    for (let item of items_per) {
        if (item.type == "Combate") {
            let tipo = item.data.tipo;
            let nivel = 0;
            if (tipo == "" || tipo == "MAG") nivel = item.data.nivel;
            else nivel = $('[name="data.grupos.'+tipo+'"]').val();
            let bonus_valor = $('[name="data.atributos.'+ item.data.bonus_dano +'"]').val();
            let dano_mais = item.data.peso;
            let bonus_normal = $('[name="data.atributos.'+ item.data.bonus +'"]').val();
            items_per[items_per.indexOf(item)].data.nivel =  parseInt(nivel);
            items_per[items_per.indexOf(item)].data.custo = parseInt(bonus_normal);
            items_per[items_per.indexOf(item)].data.dano.d25 = item.data.dano_base.d25 + parseInt(bonus_valor) + parseInt(dano_mais);
            items_per[items_per.indexOf(item)].data.dano.d50 = item.data.dano_base.d50 + parseInt(bonus_valor) + parseInt(dano_mais);
            items_per[items_per.indexOf(item)].data.dano.d75 = item.data.dano_base.d75 + parseInt(bonus_valor) + parseInt(dano_mais);
            items_per[items_per.indexOf(item)].data.dano.d100 = item.data.dano_base.d100 + parseInt(bonus_valor) + parseInt(dano_mais);
            items_per[items_per.indexOf(item)].data.dano.d125 = item.data.dano_base.d125 + parseInt(bonus_valor) + parseInt(dano_mais);
            items_per[items_per.indexOf(item)].data.dano.d150 = item.data.dano_base.d150 + parseInt(bonus_valor) + parseInt(dano_mais);
            items_per[items_per.indexOf(item)].data.dano.d175 = item.data.dano_base.d175 + parseInt(bonus_valor) + parseInt(dano_mais);
            items_per[items_per.indexOf(item)].data.dano.d200 = item.data.dano_base.d200 + parseInt(bonus_valor) + parseInt(dano_mais);
            items_per[items_per.indexOf(item)].data.dano.d225 = item.data.dano_base.d225 + parseInt(bonus_valor) + parseInt(dano_mais);
            items_per[items_per.indexOf(item)].data.dano.d250 = item.data.dano_base.d250 + parseInt(bonus_valor) + parseInt(dano_mais);
            items_per[items_per.indexOf(item)].data.dano.d275 = item.data.dano_base.d275 + parseInt(bonus_valor) + parseInt(dano_mais);
            items_per[items_per.indexOf(item)].data.dano.d300 = item.data.dano_base.d300 + parseInt(bonus_valor) + parseInt(dano_mais);
            let total_l = parseInt(nivel) + parseInt(bonus_normal) + item.data.bonus_magico + item.data.def_l;
            let total_m = parseInt(nivel) + parseInt(bonus_normal) + item.data.bonus_magico + item.data.def_m;
            let total_p = parseInt(nivel) + parseInt(bonus_normal) + item.data.bonus_magico + item.data.def_p;
            $('.table_combate_itemspers').append('<tr class="item" data-combate="'+item._id+'"><td class="mediaeval"><a class="roll_comb" data-item="'+item._id+'">'+ item.name +'</a></td><td class="mediaeval"><input type="number" class="nivel_comb" value="'+item.data.nivel+'" data-combate="'+ item.name +'" style="width:40px;text-align:center;"/></td><td class="mediaeval"><input type="number" class="municao" value="'+item.data.municao+'" data-combate="'+ item.name +'" style="width:40px;text-align:center;"/></td><td class="mediaeval">'+item.data.alcance+'</td><td class="mediaeval"><input type="number" class="bonus_coluna" value="'+item.data.bonus_magico+'" data-combate="'+ item.name +'" style="width:40px;text-align:center;"/></td><td class="mediaeval"><input type="number" class="bonus_dano" value="'+item.data.peso+'" data-combate="'+ item.name +'" style="width:40px;text-align:center;"/></td><td class="mediaeval">'+total_l+'</td><td class="mediaeval">'+total_m+'</td><td class="mediaeval">'+total_p+'</td><td class="mediaeval">'+item.data.dano.d100+'</td><td><a class="remove_comb" data-combate="'+ item._id +'"><i class="fas fa-trash"></i></a></td> </tr>');
        }
    }
    $('.actor_items').val(JSON.stringify(items_per));
    combate_controls();
}

function combate_controls() {
    $('.remove_comb').click(function (event) {
        let combate = $(event.currentTarget).data("combate");
        remove_item(combate);
        att_combate();
        verifica_removido(combate, 'combate');
    });
    $('.nivel_comb').change(function (event) {
        let tr = $(event.currentTarget);
        let li = tr.parents('.item');
        let comb_id = li.data('combate');
        let nivel = li.find('.nivel_comb').val();
        let municao = li.find('.municao').val();
        let bonus_coluna = li.find('.bonus_coluna').val();
        let bonus_dano = li.find('.bonus_dano').val();
        update_combate(comb_id, nivel, municao, bonus_coluna, bonus_dano);
        att_combate();
    });
    $('.municao').change(function (event) {
        let tr = $(event.currentTarget);
        let li = tr.parents('.item');
        let comb_id = li.data('combate');
        let nivel = li.find('.nivel_comb').val();
        let municao = li.find('.municao').val();
        let bonus_coluna = li.find('.bonus_coluna').val();
        let bonus_dano = li.find('.bonus_dano').val();
        update_combate(comb_id, nivel, municao, bonus_coluna, bonus_dano);
        att_combate();
    });
    $('.bonus_coluna').change(function (event) {
        let tr = $(event.currentTarget);
        let li = tr.parents('.item');
        let comb_id = li.data('combate');
        let nivel = li.find('.nivel_comb').val();
        let municao = li.find('.municao').val();
        let bonus_coluna = li.find('.bonus_coluna').val();
        let bonus_dano = li.find('.bonus_dano').val();
        update_combate(comb_id, nivel, municao, bonus_coluna, bonus_dano);
        att_combate();
    });
    $('.bonus_dano').change(function (event) {
        let tr = $(event.currentTarget);
        let li = tr.parents('.item');
        let comb_id = li.data('combate');
        let nivel = li.find('.nivel_comb').val();
        let municao = li.find('.municao').val();
        let bonus_coluna = li.find('.bonus_coluna').val();
        let bonus_dano = li.find('.bonus_dano').val();
        update_combate(comb_id, nivel, municao, bonus_coluna, bonus_dano);
        att_combate();
    });
    $('.roll_comb').click(function (event) {
        let item_id = $(event.currentTarget).data('item');
        const item = getItem_id(item_id);
        roll_item(item);
    });
}

function update_combate(comb_id, nivel, municao, bonus_coluna, bonus_dano) { // Atualiza item COMBATE
    if (nivel) nivel = parseInt(nivel);
    else nivel = 0;
    if (municao) municao = parseInt(municao);
    else municao = 0;
    if (bonus_coluna) bonus_coluna = parseInt(bonus_coluna);
    else bonus_coluna = 0;
    if (bonus_dano) bonus_dano = parseInt(bonus_dano);
    else bonus_dano = 0;
    for (let item of items_per) {
        if (item._id == comb_id) {
            items_per[items_per.indexOf(item)].data.nivel = nivel;
            items_per[items_per.indexOf(item)].data.municao = municao;
            items_per[items_per.indexOf(item)].data.bonus_magico = bonus_coluna;
            items_per[items_per.indexOf(item)].data.peso = bonus_dano;
        }
    }
    $('.actor_items').val(JSON.stringify(items_per));
}

function verifica_removido(item_id, item_type) {
    $('.btn_'+item_type).each(function (){
        if ($(this).data(item_type)._id == item_id) $(this).removeClass('mhidden');
    });
}

function remove_item(item_id) { // Remove Actor Items
    for (let item of items_per) {
        if (item._id == item_id) {
            items_per.splice(items_per.indexOf(item),1);
        }
    }
    $('.actor_items').val(JSON.stringify(items_per));
}

function add_items(item) { // Add Item to the Actor
    items_per.push(item);
    $('.actor_items').val(JSON.stringify(items_per));
    verifica_items();
}

function att_atrib(event, atrib) {
    let value = parseInt($(event.currentTarget).val());
    $('[name="data.valor_teste.'+atrib+'"]').val(4*value);
    att_pontos_hab();
    att_combate();
    att_tecnicas_table();
    att_defesa_table();
    //att_pertences_table();
    att_hab_tables();
    att_magias_table();
}

function clear_chat () {
    $('.chat_content').html("");
}

function atrib_message(formula, dado, resultado, atributo, coluna, descricao) {
    let dt = new Date();
    let time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    $('.chat_content').append("<div class='container'>");
    $('.chat_content').append("<div class='row chat_msg' style='margin-top:5px;'><div class='col-12'><h5 class='mediaeval' style='color: rgb(109, 1, 1);'>"+ time +"</h5></div></div>");
    $('.chat_content').append("<div class='row chat_msg'><div class='col-12' style='text-align:center;'> <h5 class='fairyDust' style='letter-spacing: 5px;'>"+ atributo +"</h5> </div></div>");
    if (descricao) $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><p>"+ descricao +"</p></div></div>");
    if (resultado == "verde") $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval' style='color: white; text-align:center;background-color:green;'>Verde - Falha</h1></div></div>");
    else if (resultado == "branco") $('.chat_content').append("<div class='row chat_msg'><div class='col-12'> <h1 class='mediaeval' style='color: black; text-align:center;background-color:white;'>Branco - Rotineiro</h1> </div></div>");
    else if (resultado == "amarelo") $('.chat_content').append("<div class='row chat_msg'><div class='col-12'> <h1 class='mediaeval' style='color: black; text-align:center;background-color:yellow;'>Amarelo - Fácil</h1> </div></div>");
    else if (resultado == "laranja") $('.chat_content').append("<div class='row chat_msg'><div class='col-12'> <h1 class='mediaeval' style='color: white; text-align:center;background-color:orange;'>Laranja - Médio</h1> </div></div>");
    else if (resultado == "vermelho") $('.chat_content').append("<div class='row chat_msg'><div class='col-12'> <h1 class='mediaeval' style='color: white; text-align:center;background-color:red;'>Vermelho - Difícil</h1> </div></div>");
    else if (resultado == "azul") $('.chat_content').append("<div class='row chat_msg'><div class='col-12'> <h1 class='mediaeval' style='color: white; text-align:center;background-color:blue;'>Azul - Muito Difícil</h1> </div></div>");
    else if (resultado == "roxo") $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: white; text-align:center;background-color:rgb(2,9,37);'>Azul Escuro - Absurdo</h1></div></div>");
    else if (resultado == "cinza") $('.chat_content').append("<div class='row chat_msg'><div class='col-12'> <h1 class='mediaeval' style='color: black; text-align:center;background-color:gray;'>Cinza - Impossível</h1> </div></div>");
    $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h4 class='mediaeval'>Coluna: "+coluna+"</h4></div></div>");
    $(".chat_content").append("<div class='row chat_msg'><div class='col-12 mensage_uno mediaeval'>" + formula + ":        <span class='fa-layers fa-fw'><i class='fas fa-dice-d20' data-fa-transform='grow-10' style='color: white;'></i><span class='fa-layers-text' data-fa-transform='grow-6 down-2 left-1' style='color: black;'>" + dado + "</span></span> " + "</div></div>");
    $('.chat_content').append("</div>");
    $('.chat_content').scrollTop($('.chat_content').get(0).scrollHeight);
}

function roll_teste_resist(forc_ataque, forc_resist) {
    let def_ataq = forc_resist - forc_ataque;
    let valorSucess = 0;
    if (def_ataq == 0) valorSucess = 11;
    else if (def_ataq == 1) valorSucess = 10;
    else if (def_ataq == 2) valorSucess = 9;
    else if (def_ataq == 3) valorSucess = 8;
    else if (def_ataq == 4 || def_ataq == 5) valorSucess = 7;
    else if (def_ataq == 6 || def_ataq == 7) valorSucess = 6;
    else if (def_ataq == 8 || def_ataq == 9) valorSucess = 5;
    else if (def_ataq == 10 || def_ataq == 11) valorSucess = 4;
    else if (def_ataq == 12 || def_ataq == 13) valorSucess = 3;
    else if (def_ataq == 14 || def_ataq == 15) valorSucess = 2;
    else if (def_ataq >= 16) valorSucess = 1;
    else if (def_ataq == -1) valorSucess = 11;
    else if (def_ataq == -2) valorSucess = 12;
    else if (def_ataq == -3) valorSucess = 13;
    else if (def_ataq == -4 || def_ataq == -5) valorSucess = 14;
    else if (def_ataq == -6 || def_ataq == -7) valorSucess = 15;
    else if (def_ataq == -8 || def_ataq == -9) valorSucess = 16;
    else if (def_ataq == -10 || def_ataq == -11) valorSucess = 17;
    else if (def_ataq == -12 || def_ataq == -13) valorSucess = 18;
    else if (def_ataq == -14 || def_ataq == -15) valorSucess = 19;
    else if (def_ataq <= -16) valorSucess = 20;
    $.getJSON($SCRIPT_ROOT + "/d20", function(dado) {
        if ((dado >= valorSucess || dado == 20) && dado > 1) { // Sucesso
            stringSucesso = "<h1 class='mediaeval rola' style='text-align:center; color: white;background-color:blue;'>SUCESSO</h1>";
        } else {    // Insucesso
            stringSucesso = "<h1 class='mediaeval rola' style='text-align:center; color: white;background-color:red;'>FRACASSO</h1>";
        }
        let dt = new Date();
        let time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
        $('.chat_content').append("<div class='container'>");
        $('.chat_content').append("<div class='row chat_msg' style='margin-top:5px;'><div class='col-12'><h5 class='mediaeval' style='color: rgb(109, 1, 1);'>"+ time +"</h5></div></div>");
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12' style='text-align:center;'> <h5 class='fairyDust' style='letter-spacing: 5px;'>Teste de Resistência</h5> </div></div>");
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h4 class='mediaeval'>Força de Ataque: "+forc_ataque+"</h4></div></div>");
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h4 class='mediaeval'>Força de Defesa: "+forc_resist+"</h4></div></div>");
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'>" + stringSucesso + "</div></div>");
        $(".chat_content").append("<div class='row chat_msg'><div class='col-12 mensage_uno mediaeval'>1d20:        <span class='fa-layers fa-fw'><i class='fas fa-dice-d20' data-fa-transform='grow-10' style='color: white;'></i><span class='fa-layers-text' data-fa-transform='grow-6 down-2 left-1' style='color: black;'>" + dado + "</span></span> " + "</div></div>");
        $('.chat_content').append("</div>");
        $('.chat_content').scrollTop($('.chat_content').get(0).scrollHeight);
    });
}

function verifica_items() {
    for (let item of items_per) {
        if (item.type == "Habilidade") {
            $('.btn_hab').each(function () {
                if ($(this).data('hab')._id == item._id) {
                    $(this).addClass('mhidden');
                }
            });
        } else if (item.type == "Combate") {
            $('.btn_combate').each(function () {
                if ($(this).data('combate')._id == item._id) {
                    $(this).addClass('mhidden');
                }
            });
        } else if (item.type == "TecnicasCombate") {
            $('.btn_tecnica').each(function () {
                if ($(this).data('tecnica')._id == item._id) {
                    $(this).addClass('mhidden');
                }
            });
        } else if (item.type == "Defesa") {
            $('.btn_defesa').each(function () {
                if ($(this).data('defesa')._id == item._id) {
                    $(this).addClass('mhidden');
                }
            });
        } else if (item.type == "Magia") {
            $('.btn_magia').each(function () {
                if ($(this).data('magia')._id == item._id) {
                    $(this).addClass('mhidden');
                }
            });
        } else if (item.type == "Pertence") {
            $('.btn_pertence').each(function () {
                if ($(this).data('pertence')._id == item._id) {
                    $(this).addClass('mhidden');
                }
            });
        } else if (item.type == "Transporte") {
            $('.btn_transporte').each(function () {
                if ($(this).data('transporte')._id == item._id) {
                    $(this).addClass('mhidden');
                }
            });
        } 
    }
}

function roll_item(item) {
    if (item.type == "Habilidade") roll_habilidade(item);
    else if (item.type == "Combate") roll_combate(item);  
    else if (item.type == "TecnicasCombate") roll_tecnica(item); 
    else if (item.type == "Magia") roll_magia(item);
}

function getItem(item_name) {
    let item_ret;
    for (let item of items_per) {
        if (item.name == item_name) item_ret = item;
    }
    return item_ret;
}

function getItem_id (item_id) {
    let item_ret;
    for (let item of items_per) {
        if (item._id == item_id) item_ret = item;
    }
    return item_ret;
}

$('.roll_atributo').click(function(event) { // Rolagem ATRIBUTOS
    const atributo = $(event.currentTarget).data("atrib");
    const valor_teste = $('[name="data.valor_teste.'+ atributo +'"]').val();
    if (!valor_teste) return;
    let valor_tab = parseInt(valor_teste);
    if (valor_tab < -7) valor_tab = -7; 
    if (valor_tab <= 20) {
        $.getJSON($SCRIPT_ROOT + '/d20', function (data) {
            let coluna = tabela_resol.filter(b => b[0] === valor_tab);
            let resultado = coluna[0][data];
            atrib_message("1d20", data, resultado, atributo, coluna[0][0]);
        });
    } else {
        let valor_hab = valor_tab % 20;
        if (valor_hab == 0) {
            let vezes = valor_tab / 20;
            for (let x = 0; x < vezes; x++) {
                $.getJSON($SCRIPT_ROOT + '/d20', function (data) {
                    let coluna = tabela_resol.filter(b => b[0] === 20);
                    let resultado = coluna[0][data];
                    atrib_message("1d20", data, resultado, atributo, coluna[0][0]);
                });
            }
        } else if (valor_hab > 0) {
            let vezes = parseInt(valor_tab / 20);
            let sobra = valor_tab % 20;
            for (let x = 0; x < vezes; x++) {
                $.getJSON($SCRIPT_ROOT + '/d20', function (data) {
                    let coluna = tabela_resol.filter(b => b[0] === 20);
                    let resultado = coluna[0][data];
                    atrib_message("1d20", data, resultado, atributo, coluna[0][0]);
                });
            }
            $.getJSON($SCRIPT_ROOT + '/d20', function (data) {
                let coluna = tabela_resol.filter(b => b[0] === sobra);
                let resultado = coluna[0][data];
                atrib_message("1d20", data, resultado, atributo, coluna[0][0])
            });
        }
    }
});

$('.rolaR_iniciativa').click(function () {
    let iniciativa = $('[name="data.iniciativa"]').val();
    if (iniciativa) iniciativa = parseInt(iniciativa);
    else iniciativa = 0;
    $.getJSON($SCRIPT_ROOT + "/d10", function (dado) {
        let total = dado + iniciativa;
        let formula = "1d10 + " + iniciativa; 
        iniciativa_chat(formula, dado, iniciativa,total);
    });
});

function iniciativa_chat(formula, dado, iniciativa, total) {
    let dt = new Date();
    let time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    $('.chat_content').append("<div class='container'>");
    $('.chat_content').append("<div class='row chat_msg' style='margin-top:5px;'><div class='col-12'><h5 class='mediaeval' style='color: rgb(109, 1, 1);'>"+ time +"</h5></div></div>");
    $('.chat_content').append("<div class='row chat_msg'><div class='col-12' style='text-align:center;'> <h5 class='fairyDust' style='letter-spacing: 5px;'>Iniciativa</h5> </div></div>");
    $(".chat_content").append("<div class='row chat_msg'><div class='col-12 mensage_uno mediaeval'>" + formula + ":        <span class='fa-layers fa-fw'><i class='fas fa-dice-d20' data-fa-transform='grow-10' style='color: white;'></i><span class='fa-layers-text' data-fa-transform='grow-6 down-2' style='color: black;'>" + dado + "</span></span> + " + iniciativa + " = "+ total +"</div></div>");
    $('.chat_content').append("</div>")
    $('.chat_content').scrollTop($('.chat_content').get(0).scrollHeight);
}

function roll_magia(magia) {
    let dt = new Date();
    let time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    $('.chat_content').append("<div class='container'>");
    $('.chat_content').append("<div class='row chat_msg' style='margin-top:5px;'><div class='col-12'><h5 class='mediaeval' style='color: rgb(109, 1, 1);'>"+ time +"</h5></div></div>");
    $('.chat_content').append("<div class='row chat_msg'><div class='col-12' style='text-align:center;'> <h5 class='fairyDust' style='letter-spacing: 5px;'>"+ magia.name +"</h5> </div></div>");
    if (magia.data.efeito) $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><p>"+ magia.data.efeito +"</p></div></div>");
    $('.chat_content').append("</div>")
    $('.chat_content').scrollTop($('.chat_content').get(0).scrollHeight);
}

function roll_tecnica(tecnica) {
    let total = tecnica.data.total;
    if (total <= 20) {
        $.getJSON($SCRIPT_ROOT + "/d20", function(dado) {
            let coluna = tabela_resol.filter(b => b[0] === total);
            let resultado = coluna[0][dado];
            atrib_message("1d20", dado, resultado, tecnica.name, coluna[0][0], tecnica.data.descricao);
        });
    } else {
        let valor_tec = total % 20;
        if (valor_tec == 0) {
            let vezes = total / 20;
            for (let x = 0; x < vezes; x++) {
                $.getJSON($SCRIPT_ROOT + "/d20", function (dado) {
                    let coluna = tabela_resol.filter(b => b[0] === 20);
                    let resultado = coluna[0][dado];
                    atrib_message("1d20", dado, resultado, tecnica.name, coluna[0][0], tecnica.data.descricao);
                });
            }
        } else if (valor_tec > 0) {
            let vezes = parseInt(total / 20);
            let sobra = total % 20;
            for (let x = 0; x < vezes; x++){
                $.getJSON($SCRIPT_ROOT + '/d20', function (dado) {
                    let coluna = tabela_resol.filter(b => b[0] === 20);
                    let resultado = coluna[0][dado];
                    atrib_message("1d20", dado, resultado, tecnica.name, coluna[0][0], tecnica.data.descricao);
                });
            }
            $.getJSON($SCRIPT_ROOT + '/d20', function (dado) {
                let coluna = tabela_resol.filter(b => b[0] === sobra);
                let resultado = coluna[0][dado];
                atrib_message("1d20", dado, resultado, tecnica.name, coluna[0][0], tecnica.data.descricao);
            });
        }
    }
}

function roll_habilidade(habilidade) {
    let bonus_hab = $('[name="data.bonus_habil"]').val();
    if (bonus_hab) bonus_hab = parseInt(bonus_hab);
    else bonus_hab = 0;
    let h_total = 0;
    if (habilidade.data.nivel > 0){
        h_total = habilidade.data.total + bonus_hab;
    } else {
        h_total = -7 + habilidade.data.ajuste.valor + habilidade.data.bonus + habilidade.data.penalidade + bonus_hab;
    }
    if (h_total < -7) h_total = -7;
    if (h_total <= 20) {
        $.getJSON($SCRIPT_ROOT + '/d20', function (dado) {
            let coluna = tabela_resol.filter(b => b[0] === h_total);
            let resultado = coluna[0][dado];
            atrib_message("1d20", dado, resultado, habilidade.name, coluna[0][0]);
        });
    } else {
        let valor_hab = h_total % 20;
        if (valor_hab == 0) {
            let vezes = h_total / 20;
            for (let x = 0; x < vezes; x++){
                $.getJSON($SCRIPT_ROOT + '/d20', function (dado) {
                    let coluna = tabela_resol.filter(b => b[0] === 20);
                    let resultado = coluna[0][dado];
                    atrib_message("1d20", dado, resultado, habilidade.name, coluna[0][0]);
                });
            }
        } else if (valor_hab > 0) {
            let vezes = parseInt(h_total / 20);
            let sobra = h_total % 20;
            for (let x = 0; x < vezes; x++){
                $.getJSON($SCRIPT_ROOT + '/d20', function (dado) {
                    let coluna = tabela_resol.filter(b => b[0] === 20);
                    let resultado = coluna[0][dado];
                    atrib_message("1d20", dado, resultado, habilidade.name, coluna[0][0]);
                });
            }
            $.getJSON($SCRIPT_ROOT + '/d20', function (dado) {
                let coluna = tabela_resol.filter(b => b[0] === sobra);
                let resultado = coluna[0][dado];
                atrib_message("1d20", dado, resultado, habilidade.name, coluna[0][0]);
            });
        }
    }
}

function roll_combate(combate) { // Rolagem Combate
    let municao = combate.data.municao;
    let muni_usada = 0;
    if (municao > 0) {
        if (combate.data.tipo == "") muni_usada = combate.data.nivel;
        else muni_usada = 1;
        municao -= muni_usada;
        update_combate(combate._id, combate.data.nivel, municao, combate.data.bonus_magico, combate.data.peso);
        att_combate();
    }
    let municao_text = "";
    if (muni_usada >= 1) municao_text = "<h4 class='mediaeval'>Munição gasta: " + muni_usada + " Restam: " + municao + "</h4>";
    else municao_text = "";
    let bonus_cat = combate.data.bonus;
    let bonus_ajustev = 0;
    bonus_ajustev = $('[name="data.atributos.'+bonus_cat+'"]').val();
    if (bonus_ajustev) bonus_ajustev = parseInt(bonus_ajustev);
    else bonus_ajustev = 0;
    let total_l = combate.data.nivel + bonus_ajustev + combate.data.bonus_magico + combate.data.def_l;
    let total_m = combate.data.nivel + bonus_ajustev + combate.data.bonus_magico + combate.data.def_m;
    let total_p = combate.data.nivel + bonus_ajustev + combate.data.bonus_magico + combate.data.def_p;
    let cat_def = $('[name="data.inf_ataque.cat_def"').val();
    let valor_tabela = 0;
    let bonus_ataque = $('[name="data.inf_ataque.bonus"').val();
    if (bonus_ataque) bonus_ataque = parseInt(bonus_ataque);
    else bonus_ataque = 0;
    let valor_defesa = $('[name="data.inf_ataque.valor_def"]').val();
    if (valor_defesa) valor_defesa = parseInt(valor_defesa);
    else valor_defesa = 0;
    if (combate.data.nivel > 0) {
        if (cat_def == "L") valor_tabela = total_l + bonus_ataque - valor_defesa;
        else if (cat_def == "M") valor_tabela = total_m + bonus_ataque - valor_defesa;
        else if (cat_def == "P") valor_tabela = total_p + bonus_ataque - valor_defesa;
    } else {
        valor_tabela = -7;
    }
    if (combate.data.tipo == "") valor_tabela = total_l + bonus_ataque; // Magia de Ataque
    if (valor_tabela < -7) valor_tabela = -7; // Abaixo da Tabela
    if (valor_tabela <= 20) {
        $.getJSON($SCRIPT_ROOT + "/d20", function (dado) {
            let coluna = tabela_resol.filter(b => b[0] === valor_tabela);
            let resultado = coluna[0][dado];
            combate_message("1d20", dado, resultado, combate.name, coluna[0][0], municao_text, combate);
        })
    } else {
        $.getJSON($SCRIPT_ROOT + "/d20", function (dado) {
            let coluna_t = valor_tabela % 20;
            const ajusteDano = parseInt(valor_tabela/20) * 50;
            let coluna_tab = tabela_resol.filter(b => b[0] === coluna_t);
            let resultado = coluna_tab[0][dado];
            combate_message_aac20("1d20", dado, resultado, combate.name, coluna_tab[0][0], municao_text, combate, ajusteDano);
        });
    }
}

function combate_message(formula, dado, resultado, nome, coluna, municao_text, combate) {
    let critico = false;
    let dt = new Date();
    let time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    $('.chat_content').append("<div class='container'>");
    $('.chat_content').append("<div class='row chat_msg' style='margin-top:5px;'><div class='col-12'><h5 class='mediaeval' style='color: rgb(109, 1, 1);'>"+ time +"</h5></div></div>");
    $('.chat_content').append("<div class='row chat_msg'><div class='col-12' style='text-align:center;'> <h5 class='fairyDust' style='letter-spacing: 5px;'>"+ nome +"</h5> </div></div>");
    let descricao = combate.data.descricao;
    let dano_total = 0;
    if (descricao) $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><p>"+ descricao +"</p></div></div>");
    if (municao_text) $('.chat_content').append("<div class='row chat_msg'><div class='col-12'>" + municao_text + "</div></div>");
    if (resultado == "verde") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: white; text-align:center;background-color:green;'>Verde - Falha Crítica</h1></div></div>");
        critico = true;
    }
    else if (resultado == "branco") $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: black; text-align:center;background-color:white;'>Branco - Errou</h1></div></div>");
    else if (resultado == "amarelo") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: black; text-align:center;background-color:yellow;'>Amarelo - 25%</h1></div></div>");
        dano_total = combate.data.dano.d25;
    } else if (resultado == "laranja") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: white; text-align:center;background-color:orange;'>Laranja - 50%</h1></div></div>");
        dano_total = combate.data.dano.d50;
    } else if (resultado == "vermelho") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: white; text-align:center;background-color:red;'>Vermelho - 75%</h1></div></div>");
        dano_total = combate.data.dano.d75;
    } else if (resultado == "azul") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: white; text-align:center;background-color:blue;'>Azul - 100%</h1></div></div>");
        dano_total = combate.data.dano.d100;
    } else if (resultado == "roxo") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: white; text-align:center;background-color:rgb(2,9,37);'>Azul Escuro - 125%</h1></div></div>");
        dano_total = combate.data.dano.d125;
    } else if (resultado == "cinza") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: black; text-align:center;background-color:gray;'>Cinza - Crítico</h1></div></div>");
        critico = true;
    }
    $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h4 class='mediaeval'>Coluna: "+coluna+"</h4></div></div>");
    $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h2 class='mediaeval rola rola_dano' style='text-align: center;'>Dano: " + dano_total + "</h2></div></div>");
    $('.chat_content').append("<div class='row chat_msg'><div class='col-12 mensage_uno mediaeval'>" + formula + ":        <span class='fa-layers fa-fw'><i class='fas fa-dice-d20' data-fa-transform='grow-10' style='color: white;'></i><span class='fa-layers-text' data-fa-transform='grow-6 down-2 left-1' style='color: black;'>" + dado + "</span></span> " + "</div></div>");
    $('.chat_content').append("</div>");
    $('.chat_content').scrollTop($('.chat_content').get(0).scrollHeight);
    if (critico) roll_critico(coluna);
}

function combate_message_aac20(formula, dado, resultado, nome, coluna, municao_text, combate, ajusteDano) {
    let critico = false;
    let dt = new Date();
    let time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    $('.chat_content').append("<div class='container'>");
    $('.chat_content').append("<div class='row chat_msg' style='margin-top:5px;'><div class='col-12'><h5 class='mediaeval' style='color: rgb(109, 1, 1);'>"+ time +"</h5></div></div>");
    $('.chat_content').append("<div class='row chat_msg'><div class='col-12' style='text-align:center;'> <h5 class='fairyDust' style='letter-spacing: 5px;'>"+ nome +"</h5> </div></div>");
    let descricao = combate.data.descricao;
    let dano_total = 0;
    if (descricao) $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><p>"+ descricao +"</p></div></div>");
    if (municao_text) $('.chat_content').append("<div class='row chat_msg'><div class='col-12'>" + municao_text + "</div></div>");
    if (resultado == "verde") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: white; text-align:center;background-color:green;'>Verde - Falha Crítica</h1></div></div>");
        critico = true;
    }
    else if (resultado == "branco") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: black; text-align:center;background-color:white;'>Branco - Errou</h1></div></div>");
        dano_total = 0 + ajusteDano;
    } else if (resultado == "amarelo") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: black; text-align:center;background-color:yellow;'>Amarelo - 25%</h1></div></div>");
        dano_total = 25 + ajusteDano;
    } else if (resultado == "laranja") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: white; text-align:center;background-color:orange;'>Laranja - 50%</h1></div></div>");
        dano_total = 50 + ajusteDano;
    } else if (resultado == "vermelho") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: white; text-align:center;background-color:red;'>Vermelho - 75%</h1></div></div>");
        dano_total = 75 + ajusteDano;
    } else if (resultado == "azul") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: white; text-align:center;background-color:blue;'>Azul - 100%</h1></div></div>");
        dano_total = 100 + ajusteDano;
    } else if (resultado == "roxo") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: white; text-align:center;background-color:rgb(2,9,37);'>Azul Escuro - 125%</h1></div></div>");
        dano_total = 125 + ajusteDano;
    } else if (resultado == "cinza") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: black; text-align:center;background-color:gray;'>Cinza - Crítico</h1></div></div>");
        critico = true;
    }
    let dano_novo = 0;
    switch (dano_total) {
        case 25:
            dano_novo = combate.data.dano.d25;
            break;
        case 50:
            dano_novo = combate.data.dano.d50;
            break;
        case 75:
            dano_novo = combate.data.dano.d75;
            break;
        case 100:
            dano_novo = combate.data.dano.d100;
            break;
        case 125:
            dano_novo = combate.data.dano.d125;
            break;
        case 150:
            dano_novo = combate.data.dano.d150;
            break;
        case 175:
            dano_novo = combate.data.dano.d175;
            break;
        case 200:
            dano_novo = combate.data.dano.d200;
            break;
        case 225:
            dano_novo = combate.data.dano.d225;
            break;
        case 250:
            dano_novo = combate.data.dano.d250;
            break;
        case 275:
            dano_novo = combate.data.dano.d275;
            break;
        case 300:
            dano_novo = combate.data.dano.d300;
            break;
    }
    $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h4 class='mediaeval'>Coluna: "+coluna+"</h4></div></div>");
    $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='text-align: center;'>AAC20: " + ajusteDano + "%</h1></div></div>");
    $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h2 class='mediaeval rola rola_dano' style='text-align: center;'>Dano: " + dano_novo + "</h2></div></div>");
    $('.chat_content').append("<div class='row chat_msg'><div class='col-12 mensage_uno mediaeval'>" + formula + ":        <span class='fa-layers fa-fw'><i class='fas fa-dice-d20' data-fa-transform='grow-10' style='color: white;'></i><span class='fa-layers-text' data-fa-transform='grow-6 down-2 left-1' style='color: black;'>" + dado + "</span></span> " + "</div></div>");
    $('.chat_content').append("</div>");
    $('.chat_content').scrollTop($('.chat_content').get(0).scrollHeight);
    if (critico) roll_critico(coluna);
}

function roll_critico(total) {
    $.getJSON($SCRIPT_ROOT + "/d20", function (dado) {
        let coluna = tabela_resol.filter(b => b[0] === total);
        let resultado = coluna[0][dado];
        critico_to_chat("1d20", resultado, coluna[0][0], dado)
    });
}

function critico_to_chat(formula, resultado, coluna, dado) {
    let dt = new Date();
    let time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    $('.chat_content').append("<div class='container'>");
    $('.chat_content').append("<div class='row chat_msg' style='margin-top:5px;'><div class='col-12'><h5 class='mediaeval' style='color: rgb(109, 1, 1);'>"+ time +"</h5></div></div>");
    $('.chat_content').append("<div class='row chat_msg'><div class='col-12' style='text-align:center;'> <h5 class='fairyDust' style='letter-spacing: 5px;'>Crítico</h5> </div></div>");
    if (resultado == "verde") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><p class='mediaeval rola_desc'><b>Corte: </b>25%. Corte leve no músculo do braço dá um ajuste de – 4 na próxima rodada.<br><b>Esmagamento: </b>25%. Golpe no ombro desequilibra o adversário na próxima rodada, dando um ajuste de – 4.<br><b>Penetração: </b>25% Estocada na perna reduz o movimento à metade e causa um ajuste de – 2 por 1 hora.<br><b>Garras/Mordida: </b>25%. Ataque desequilibra o inimigo, levando-o a cair e perder uma rodada.<br><b>Magia: </b>25%. A magia foi evocada com maestria. Economizando 1 de karma OU causando +2 na FA.<br><b>Falha: </b>Faça um ataque no seu companheiro mais próximo.<br><b>10 a 50 vezes o peso do atacante: </b>25%. Golpe impõe ao adversário um ajuste de - 3 por 5 rodadas.<br><b>Peso acima de 50 vezes: </b>25%. ataque preciso causa um ajuste de –5 no próximo ataque.<br><b>Combate Desarmado: </b>25%. Golpe no ouvido causa desorientação. Ajuste de -3 por 3 rodadas.</p></div></div>");
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: white; text-align:center;background-color:green;'>Verde - Falha Crítica</h1></div></div>");
    }
    else if (resultado == "branco") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><p class='mediaeval rola_desc'><b>Corte: </b>50%. Corte no ombro, impõe um ajuste de – 4 por 1 dia.<br><b>Esmagamento: </b>50%. Golpe duro no ombro, paralisa o oponente na próxima rodada.<br><b>Penetração: </b>50%. Penetração causa ajuste de – 4 por 2 dias. Se for flecha o ajuste é de - 6 até que a mesma seja retirada.<br><b>Garras/Mordida: </b>50%. Rasgo na mão impede o adversário de realizar seu próximo ataque.<br><b>Magia: </b>50%. O poder da magia atordoa o inimigo, impedindo de realizar seu próximo ataque.<br><b>Falha: </b>Tropeção o impede de realizar seu próximo ataque.<br><b>10 a 50 vezes o peso do atacante: </b>50%. Golpe reduz a velocidade base à metade e impõe ao adversário um ajuste de – 3 por 5 rodadas.<br><b>Peso acima de 50 vezes: </b>50%. Golpe impõe ao adversário um ajuste de – 3 por 3 rodadas.<br><b>Combate Desarmado: </b>50%. Golpe desarma o oponente, e a arma cai a 2 m dele.</p></div></div>");
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: black; text-align:center;background-color:white;'>Branco - Errou</h1></div></div>");
    }
    else if (resultado == "amarelo") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><p class='mediaeval rola_desc'><b>Corte: </b>50%. Com um belo golpe, não só atinge como desarma o inimigo.<br><b>Esmagamento: </b>50%. Golpe no tórax derruba o adversário, que deixa cair o que tiver segurando.<br><b>Penetração: </b>50% Estocada no peito paralisa o adversário nas próximas 2 rodadas.<br><b>Garras/Mordida: </b>50%. Feroz ataque na mão desarma o inimigo.<br><b>Magia: </b>50%. A força da magia arremessa o adversário a 2 metros de distância, e ele deixa cair sua arma.<br><b>Falha: </b>Sua arma escapa da sua mão, caindo a 3 metros de distância.<br><b>10 a 50 vezes o peso do atacante: </b>50%. Golpe faz com que o adversário se atrapalhe, impedindo-o de realizar sua próxima ação.<br><b>Peso acima de 50 vezes: </b>50%. Golpe impõe ao adversário um ajuste de – 3 por 5 rodadas.<br><b>Combate Desarmado: </b>50%. Inchaço e sangramento facial atrapalham a visão. Ajuste de - 3 por 6 rodadas.</p></div></div>");
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: black; text-align:center;background-color:yellow;'>Amarelo - 25%</h1></div></div>");
    } else if (resultado == "laranja") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><p class='mediaeval rola_desc'><b>Corte: </b>75%. Corte na cabeça põe adversário em coma por 1 dia se ele não tiver usando elmo.<br><b>Esmagamento: </b>75%. Escudo do inimigo se quebra (caso não seja mágico). Na ausência deste o braço quebra (cura em um mês).<br><b>Penetração: </b>75%. Golpe no tronco derruba o adversário se estiver usando escudo. Caso contrário incapacita-o por 2 dias.<br><b>Garras/Mordida: </b>75%. A ferocidade do golpe derruba o adversário impedindo de atacar nas próximas 3 rodadas.<br><b>Magia: </b>75%. O potente impacto paralisa o adversário, impedindo de atacar nas próximas 3 rodadas.<br><b>Falha: </b>Ataque desastroso causa 50 % de dano em si mesmo.<br><b>10 a 50 vezes o peso do atacante: </b>75%. Ferimento desnorteia o oponente impedindo-o de atacar por duas rodadas.<br><b>Peso acima de 50 vezes: </b>75%. Golpe reduz a velocidade base à metade e impõe ao adversário um ajuste de – 3 por 5 rodadas.<br><b>Combate Desarmado: </b>75%. A dor ou falta de ar deixam o oponente grogue. Ajuste de - 5 por 4 rodadas.</p></div></div>");
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: white; text-align:center;background-color:orange;'>Laranja - 50%</h1></div></div>");
    } else if (resultado == "vermelho") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><p class='mediaeval rola_desc'><b>Corte: </b>75%. Corte mediano no músculo inutiliza um braço por 2 dias.<br><b>Esmagamento: </b>75%. Pancada na cabeça. Elmo se parte (caso não seja mágico). Se não tiver Elmo fica desacordado por 2 horas e incapacito por 2 dias.<br><b>Penetração: </b>75%. Perfura o músculo do braço e o inutiliza por 2 dias.<br><b>Garras/Mordida: </b>75%. Ataque rasga o braço causando um ajuste de - 8 por 2 dias.<br><b>Magia: </b>75%. O poder da magia leva o inimigo a inconsciência por meia hora.<br><b>Falha: </b>Ataque precipitado causa 25 % de dano em si mesmo.<br><b>10 a 50 vezes o peso do atacante: </b>75%. Golpe paralisa o oponente por uma rodada e impõe um ajuste de – 5 por 10 rodadas.<br><b>Peso acima de 50 vezes: </b>75%. Golpe reduz a velocidade base à metade e o impede de realizar sua próxima ação.<br><b>Combate Desarmado: </b>75%. Golpe desarma o oponente e o derruba, a arma cai a 3m dele.</p></div></div>");
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: white; text-align:center;background-color:red;'>Vermelho - 75%</h1></div></div>");
    } else if (resultado == "azul") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><p class='mediaeval rola_desc'><b>Corte: </b>100%. Corte grande no músculo inutiliza um braço por uma semana.<br><b>Esmagamento: </b>100%. Pancada na cabeça. Elmo se parte (caso não seja mágico). Se não tiver Elmo entra em coma por 2 dias.<br><b>Penetração: </b>100%. Perfura o músculo do braço e o inutiliza por uma semana.<br><b>Garras/Mordida: </b>100%. Ataque arranca uma orelha e paralisa o adversário por uma rodada.<br><b>Magia: </b>100%. O poder da magia leva o inimigo a inconsciência por um dia.<br><b>Falha: </b>Descontrole dá um ajuste de – 4 nas próximas 3 rodadas.<br><b>10 a 50 vezes o peso do atacante: </b>100%. Golpe paralisa o oponente por duas rodadas e impõe um ajuste de – 5 por 10 rodadas.<br><b>Peso acima de 50 vezes: </b>100%. Ferimento desnorteia o oponente impedindo-o de atacar por uma rodada.<br><b>Combate Desarmado: </b>100%. Oponente tonto não ataca por duas rodadas.</p></div></div>");
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: white; text-align:center;background-color:blue;'>Azul - 100%</h1></div></div>");
    } else if (resultado == "roxo") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><p class='mediaeval rola_desc'><b>Corte: </b>100%. Corte vaza o olho. A dor paralisa o adversário por duas rodadas.<br><b>Esmagamento: </b>100%. Golpe no pulso destrói a articulação, obrigando a amputação em 2 dias. O inimigo é paralisado por duas rodadas.<br><b>Penetração: </b>100%. Estocada na mão, inutiliza permanentemente. A dor paralisa o inimigo por duas rodadas.<br><b>Garras/Mordida: </b>100%. Ataque no olho arranca o globo ocular e paralisa o adversário por duas rodadas.<br><b>Magia: </b>100% Impacto no pé do adversário o destrói, e ele fica paralisado por duas rodadas.<br><b>Falha: </b>Descontrole dá um ajuste de – 3 nas próximas duas rodadas.<br><b>10 a 50 vezes o peso do atacante: </b>100%. Ferimento no oponente reduz o número de ataques pela metade (se for só 1, passa a ser um a cada duas rodadas).<br><b>Peso acima de 50 vezes: </b>100%. Golpe paralisa o oponente por uma rodada e impõe um ajuste de – 5 por 10 rodadas.<br><b>Combate Desarmado: </b>100%. Nocaute, oponente fica desmaiado por meia hora.</p></div></div>");
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: white; text-align:center;background-color:rgb(2,9,37);'>Azul Escuro - 125%</h1></div></div>");
    } else if (resultado == "cinza") {
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><p class='mediaeval rola_desc'><b>Corte: </b>O Oponente é decapitado.<br><b>Esmagamento: </b>Afundamento torácico destrói os pulmões.<br><b>Penetração: </b>Golpe perfura o coração.<br><b>Garras/Mordida: </b>Força do golpe rasga a carótida.<br><b>Magia: </b>Impacto total da magia mata o adversário.<br><b>Falha: </b>Um golpe ruim. Erra o adversário.<br><b>10 a 50 vezes o peso do atacante: </b>100%. Golpe paralisa por uma rodada causando um ferimento fatal e impondo um ajuste de – 10, depois de 7 rodadas o oponente morre.<br><b>Peso acima de 50 vezes: </b>100%. Ferimento no oponente reduz o número de ataques pela metade (se for só 1, passa a ser um a cada duas rodadas).<br><b>Combate Desarmado: </b>100%. Nocaute, oponente fica desmaiado por 1 hora e incapacitado por 2 dias.</p></div></div>");
        $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h1 class='mediaeval rola' style='color: black; text-align:center;background-color:gray;'>Cinza - Crítico</h1></div></div>");
    }
    $('.chat_content').append("<div class='row chat_msg'><div class='col-12'><h4 class='mediaeval'>Coluna: "+coluna+"</h4></div></div>");
    $('.chat_content').append("<div class='row chat_msg'><div class='col-12 mensage_uno mediaeval'>" + formula + ":        <span class='fa-layers fa-fw'><i class='fas fa-dice-d20' data-fa-transform='grow-10' style='color: white;'></i><span class='fa-layers-text' data-fa-transform='grow-6 down-2 left-1' style='color: black;'>" + dado + "</span></span> " + "</div></div>");
    $('.chat_content').append("</div>");
    $('.chat_content').scrollTop($('.chat_content').get(0).scrollHeight);
}