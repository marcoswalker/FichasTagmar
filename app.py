import sys, os
if sys.executable.endswith('pythonw.exe'):
    sys.stdout = open(os.devnull, 'w')
    sys.stderr = open(os.path.join(os.getenv('TEMP'), 'stderr-{}'.format(os.path.basename(sys.argv[0]))), "w")
    
from flask import Flask, render_template, url_for, jsonify, redirect, request, send_file
from flask_sqlalchemy import SQLAlchemy
from itens import items_master
from random import randint
import json
from pysideflask import init_gui
from PySide2.QtWidgets import QFileDialog



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///base.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
db = SQLAlchemy(app)

class NPC(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    descricao = db.Column(db.Text, default='')
    raca = db.Column(db.String(200), default='')
    profissao = db.Column(db.String(200), default='')
    estagio = db.Column(db.Integer, default=1)
    especializacao = db.Column(db.String(200), default='')
    atributos_INT = db.Column(db.Integer, default=0)
    atributos_AUR = db.Column(db.Integer, default=0)
    atributos_CAR = db.Column(db.Integer, default=0)
    atributos_FOR = db.Column(db.Integer, default=0)
    atributos_FIS = db.Column(db.Integer, default=0)
    atributos_AGI = db.Column(db.Integer, default=0)
    atributos_PER = db.Column(db.Integer, default=0)
    valor_teste_INT = db.Column(db.Integer, default=0)
    valor_teste_AUR = db.Column(db.Integer, default=0)
    valor_teste_CAR = db.Column(db.Integer, default=0)
    valor_teste_FOR = db.Column(db.Integer, default=0)
    valor_teste_FIS = db.Column(db.Integer, default=0)
    valor_teste_AGI = db.Column(db.Integer, default=0)
    valor_teste_PER = db.Column(db.Integer, default=0)
    eh_value = db.Column(db.Integer, default=0)
    eh_max = db.Column(db.Integer, default=0)
    eh_min = db.Column(db.Integer, default=0)
    absorcao_value = db.Column(db.Integer, default=0)
    absorcao_max = db.Column(db.Integer, default=0)
    absorcao_min = db.Column(db.Integer, default=0)
    ef_value = db.Column(db.Integer, default=0)
    ef_max = db.Column(db.Integer, default=0)
    ef_min = db.Column(db.Integer, default=0)
    karma_value = db.Column(db.Integer, default=0)
    karma_max = db.Column(db.Integer, default=0)
    karma_min = db.Column(db.Integer, default=0)
    focus_value = db.Column(db.Integer, default=0)
    focus_max = db.Column(db.Integer, default=0)
    focus_min = db.Column(db.Integer, default=0)
    iniciativa = db.Column(db.Integer, default=0)
    d_ativa_valor = db.Column(db.Integer, default=0)
    d_ativa_categoria = db.Column(db.String(1), default='')
    d_passiva_valor = db.Column(db.Integer, default=0)
    d_passiva_categoria = db.Column(db.String(1), default='')
    vb = db.Column(db.Integer, default=0)
    vbe = db.Column(db.Integer, default=0)
    rm = db.Column(db.Integer, default=0)
    rf = db.Column(db.Integer, default=0)
    grupos_CD = db.Column(db.Integer, default=0)
    grupos_CI = db.Column(db.Integer, default=0)
    grupos_CL = db.Column(db.Integer, default=0)
    grupos_CLD = db.Column(db.Integer, default=0)
    grupos_EL = db.Column(db.Integer, default=0)
    grupos_CmE = db.Column(db.Integer, default=0)
    grupos_CmM = db.Column(db.Integer, default=0)
    grupos_EM = db.Column(db.Integer, default=0)
    grupos_PmA = db.Column(db.Integer, default=0)
    grupos_PmL = db.Column(db.Integer, default=0)
    grupos_CpE = db.Column(db.Integer, default=0)
    grupos_CpM = db.Column(db.Integer, default=0)
    grupos_EP = db.Column(db.Integer, default=0)
    grupos_PP = db.Column(db.Integer, default=0)
    grupos_PpA = db.Column(db.Integer, default=0)
    grupos_PpB = db.Column(db.Integer, default=0)
    altura = db.Column(db.String(20), default='')
    peso = db.Column(db.Integer, default=0)
    moral = db.Column(db.Integer, default=0)
    hab_nata = db.Column(db.String(200), default='')
    carga_value = db.Column(db.Float, default=0.0)
    carga_max = db.Column(db.Float, default=0.0)
    carga_sobrecarga = db.Column(db.Boolean, default=False)
    carga_valor_s = db.Column(db.Float, default=0.0)
    carga_transp_max = db.Column(db.Float, default=0.0)
    carga_transp_value = db.Column(db.Float, default=0.0)
    carga_transp_hasTransp = db.Column(db.Boolean, default=False)
    items = db.Column(db.Text, default='')

class Personagem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    img = db.Column(db.String(400), default='')
    token = db.Column(db.Text, default='')
    descricao = db.Column(db.Text, default='')
    raca = db.Column(db.String(200), default='')
    profissao = db.Column(db.String(200), default='')
    estagio = db.Column(db.Integer, default=1)
    especializacao = db.Column(db.String(200), default='')
    atributos_INT = db.Column(db.Integer, default=0)
    atributos_AUR = db.Column(db.Integer, default=0)
    atributos_CAR = db.Column(db.Integer, default=0)
    atributos_FOR = db.Column(db.Integer, default=0)
    atributos_FIS = db.Column(db.Integer, default=0)
    atributos_AGI = db.Column(db.Integer, default=0)
    atributos_PER = db.Column(db.Integer, default=0)
    valor_teste_INT = db.Column(db.Integer, default=0)
    valor_teste_AUR = db.Column(db.Integer, default=0)
    valor_teste_CAR = db.Column(db.Integer, default=0)
    valor_teste_FOR = db.Column(db.Integer, default=0)
    valor_teste_FIS = db.Column(db.Integer, default=0)
    valor_teste_AGI = db.Column(db.Integer, default=0)
    valor_teste_PER = db.Column(db.Integer, default=0)
    eh_value = db.Column(db.Integer, default=0)
    eh_max = db.Column(db.Integer, default=0)
    eh_min = db.Column(db.Integer, default=0)
    absorcao_value = db.Column(db.Integer, default=0)
    absorcao_max = db.Column(db.Integer, default=0)
    absorcao_min = db.Column(db.Integer, default=0)
    ef_value = db.Column(db.Integer, default=0)
    ef_max = db.Column(db.Integer, default=0)
    ef_min = db.Column(db.Integer, default=0)
    karma_value = db.Column(db.Integer, default=0)
    karma_max = db.Column(db.Integer, default=0)
    karma_min = db.Column(db.Integer, default=0)
    focus_value = db.Column(db.Integer, default=0)
    focus_max = db.Column(db.Integer, default=0)
    focus_min = db.Column(db.Integer, default=0)
    defesa_categoria = db.Column(db.String(1), default='')
    defasa_valor = db.Column(db.Integer, default=0)
    vb = db.Column(db.Integer, default=0)
    vbe = db.Column(db.Integer, default=0)
    rm = db.Column(db.Integer, default=0)
    rf = db.Column(db.Integer, default=0)
    iniciativa = db.Column(db.Integer, default=0)
    d_ativa_valor = db.Column(db.Integer, default=0)
    d_ativa_categoria = db.Column(db.String(1), default='')
    d_passiva_valor = db.Column(db.Integer, default=0)
    d_passiva_categoria = db.Column(db.String(1), default='')
    v_base = db.Column(db.Integer, default=0)
    grupos_CD = db.Column(db.Integer, default=0)
    grupos_CI = db.Column(db.Integer, default=0)
    grupos_CL = db.Column(db.Integer, default=0)
    grupos_CLD = db.Column(db.Integer, default=0)
    grupos_EL = db.Column(db.Integer, default=0)
    grupos_CmE = db.Column(db.Integer, default=0)
    grupos_CmM = db.Column(db.Integer, default=0)
    grupos_EM = db.Column(db.Integer, default=0)
    grupos_PmA = db.Column(db.Integer, default=0)
    grupos_PmL = db.Column(db.Integer, default=0)
    grupos_CpE = db.Column(db.Integer, default=0)
    grupos_CpM = db.Column(db.Integer, default=0)
    grupos_EP = db.Column(db.Integer, default=0)
    grupos_PP = db.Column(db.Integer, default=0)
    grupos_PpA = db.Column(db.Integer, default=0)
    grupos_PpB = db.Column(db.Integer, default=0)
    pontos_aqui = db.Column(db.Integer, default=0)
    max_hab = db.Column(db.Integer, default=0)
    pontos_comb = db.Column(db.Integer, default=0)
    pontos_tec = db.Column(db.Integer, default=0)
    pontos_mag = db.Column(db.Integer, default=0)
    idade = db.Column(db.Integer, default=0)
    altura = db.Column(db.String(20), default='')
    peso = db.Column(db.Integer, default=0)
    carga_value = db.Column(db.Float, default=0.0)
    carga_max = db.Column(db.Float, default=0.0)
    carga_sobrecarga = db.Column(db.Boolean, default=False)
    carga_valor_s = db.Column(db.Float, default=0.0)
    classe_social = db.Column(db.String(100), default="")
    deus = db.Column(db.String(100), default='')
    pontos_estagio_value = db.Column(db.Integer, default=0)
    pontos_estagio_next = db.Column(db.Integer, default=0)
    dinheiro_mo = db.Column(db.Integer, default=0)
    dinheiro_mp = db.Column(db.Integer, default=0)
    dinheiro_mc = db.Column(db.Integer, default=0)
    combos = db.Column(db.String(100), default='')
    carga_transp_max = db.Column(db.Float, default=0.0)
    carga_transp_value = db.Column(db.Float, default=0.0)
    carga_transp_hasTransp = db.Column(db.Boolean, default=False)
    carac_sort_INT = db.Column(db.Integer, default=0)
    carac_sort_AUR = db.Column(db.Integer, default=0)
    carac_sort_CAR = db.Column(db.Integer, default=0)
    carac_sort_FOR = db.Column(db.Integer, default=0)
    carac_sort_FIS = db.Column(db.Integer, default=0)
    carac_sort_AGI = db.Column(db.Integer, default=0)
    carac_sort_PER = db.Column(db.Integer, default=0)
    carac_final_INT = db.Column(db.Integer, default=0)
    carac_final_AUR = db.Column(db.Integer, default=0)
    carac_final_CAR = db.Column(db.Integer, default=0)
    carac_final_FOR = db.Column(db.Integer, default=0)
    carac_final_FIS = db.Column(db.Integer, default=0)
    carac_final_AGI = db.Column(db.Integer, default=0)
    carac_final_PER = db.Column(db.Integer, default=0)
    mod_racial_INT = db.Column(db.Integer, default=0)
    mod_racial_AUR = db.Column(db.Integer, default=0)
    mod_racial_CAR = db.Column(db.Integer, default=0)
    mod_racial_FOR = db.Column(db.Integer, default=0)
    mod_racial_FIS = db.Column(db.Integer, default=0)
    mod_racial_AGI = db.Column(db.Integer, default=0)
    mod_racial_PER = db.Column(db.Integer, default=0)
    inf_ataque_cat_def = db.Column(db.String(1), default="L")
    inf_ataque_valor_def = db.Column(db.Integer, default=0)
    inf_ataque_bonus = db.Column(db.Integer, default=0)
    bonus_habil = db.Column(db.Integer, default=0)
    hab_nata = db.Column(db.String(200), default='')
    valor_dado_eh = db.Column(db.Integer, default=0)
    forca_ataque = db.Column(db.Integer, default=0)
    items = db.Column(db.Text, default='')
    
    def __repr__(self):
        return '<Task %r>' % self.id 

@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        task_content = request.form['data.name']
        if (request.form['tipo'] == "Personagem"):
            new_task = Personagem(name=task_content)
        else:
            new_task = NPC(name=task_content)
        try:
            db.session.add(new_task)
            db.session.commit()
            return redirect('/')
        except:
            return "Deu problema!"
    else:
        tasks = Personagem.query.order_by(Personagem.name).all()
        npcs = NPC.query.order_by(NPC.name).all()
        return render_template('index.html', personagens = tasks, npcs = npcs)

@app.route('/delete_npc/<int:id>')
def delete_npc(id):
    npc = NPC.query.get_or_404(id)
    try:
        db.session.delete(npc)
        db.session.commit()
        return redirect('/')
    except:
        return "Deu Erro!"

@app.route('/delete/<int:id>')
def delete(id):
    personagem = Personagem.query.get_or_404(id)
    try:
        db.session.delete(personagem)
        db.session.commit()
        return redirect('/')
    except:
        return "Deu problema!"

@app.route('/npc/<int:id>')
def ficha_npc(id):
    npc = NPC.query.get_or_404(id)
    try:
        npc_items = json.loads(npc.items)
    except:
        npc_items = []
    return render_template('npc.html', items = items_master, npc = npc, items_pers = npc_items)

@app.route('/personagem/<int:id>')
def ficha(id):
    personagem = Personagem.query.get_or_404(id)
    try:
        personagem_items = json.loads(personagem.items)
    except:
        personagem_items = []
    return render_template('personagem.html', items = items_master, personagem = personagem, items_pers = personagem_items)

@app.route('/personagem_cp/<int:id>')
def ficha_cp(id):
    personagem = Personagem.query.get_or_404(id)
    try:
        personagem_items = json.loads(personagem.items)
    except:
        personagem_items = []
    return render_template('personagem_cp.html', items = items_master, personagem = personagem, items_pers = personagem_items)

@app.route('/tojson_cp/<int:id>', methods=['GET'])
def tojson_cp(id):
    personagem = Personagem.query.get_or_404(id)
    ficha = dict()
    ficha['name'] = personagem.name
    ficha['type'] = "Personagem"
    ficha['flags'] = {}
    ficha['flags']['core'] = {}
    ficha['flags']['core']['sheetClass'] = "tagmar.tagmarAltSheet"
    ficha['data'] = {}
    ficha['data']['descricao'] = personagem.descricao
    ficha['data']['raca'] = personagem.raca
    ficha['data']['profissao'] = personagem.profissao
    ficha['data']['estagio'] = personagem.estagio
    ficha['data']['especializacao'] = personagem.especializacao
    ficha['data']['atributos'] = {}
    ficha['data']['atributos']['INT'] = personagem.atributos_INT
    ficha['data']['atributos']['AUR'] = personagem.atributos_AUR
    ficha['data']['atributos']['CAR'] = personagem.atributos_CAR
    ficha['data']['atributos']['FOR'] = personagem.atributos_FOR
    ficha['data']['atributos']['FIS'] = personagem.atributos_FIS
    ficha['data']['atributos']['AGI'] = personagem.atributos_AGI
    ficha['data']['atributos']['PER'] = personagem.atributos_PER
    ficha['data']['valor_teste'] = {}
    ficha['data']['valor_teste']['INT'] = personagem.valor_teste_INT
    ficha['data']['valor_teste']['AUR'] = personagem.valor_teste_AUR
    ficha['data']['valor_teste']['CAR'] = personagem.valor_teste_CAR
    ficha['data']['valor_teste']['FOR'] = personagem.valor_teste_FOR
    ficha['data']['valor_teste']['FIS'] = personagem.valor_teste_FIS
    ficha['data']['valor_teste']['AGI'] = personagem.valor_teste_AGI
    ficha['data']['valor_teste']['PER'] = personagem.valor_teste_PER
    ficha['data']['eh'] = {}
    ficha['data']['eh']['value'] = personagem.eh_value
    ficha['data']['eh']['max'] = personagem.eh_max
    ficha['data']['absorcao'] = {}
    ficha['data']['absorcao']['value'] = personagem.absorcao_value
    ficha['data']['absorcao']['max'] = personagem.absorcao_max
    ficha['data']['ef'] = {}
    ficha['data']['ef']['value'] = personagem.ef_value
    ficha['data']['ef']['max'] = personagem.ef_max
    ficha['data']['karma'] = {}
    ficha['data']['karma']['value'] = personagem.karma_value
    ficha['data']['karma']['max'] = personagem.karma_max
    ficha['data']['focus'] = {}
    ficha['data']['focus']['value'] = personagem.focus_value
    ficha['data']['focus']['max'] = personagem.focus_max
    ficha['data']['vb'] = personagem.vb
    ficha['data']['vbe'] = personagem.vbe
    ficha['data']['rm'] = personagem.rm
    ficha['data']['rf'] = personagem.rf
    ficha['data']['iniciativa'] = personagem.iniciativa
    ficha['data']['d_ativa'] = {}
    ficha['data']['d_ativa']['valor'] = personagem.d_ativa_valor
    ficha['data']['d_ativa']['categoria'] = personagem.d_ativa_categoria
    ficha['data']['d_passiva'] = {}
    ficha['data']['d_passiva']['valor'] = personagem.d_passiva_valor
    ficha['data']['d_passiva']['categoria'] = personagem.d_passiva_categoria
    ficha['data']['grupos'] = {}
    ficha['data']['grupos']['CD'] = personagem.grupos_CD
    ficha['data']['grupos']['CI'] = personagem.grupos_CI
    ficha['data']['grupos']['CL'] = personagem.grupos_CL
    ficha['data']['grupos']['CLD'] = personagem.grupos_CLD
    ficha['data']['grupos']['EL'] = personagem.grupos_EL
    ficha['data']['grupos']['CmE'] = personagem.grupos_CmE
    ficha['data']['grupos']['CmM'] = personagem.grupos_CmM
    ficha['data']['grupos']['EM'] = personagem.grupos_EM
    ficha['data']['grupos']['PmA'] = personagem.grupos_PmA
    ficha['data']['grupos']['PmL'] = personagem.grupos_PmL
    ficha['data']['grupos']['CpE'] = personagem.grupos_CpE
    ficha['data']['grupos']['CpM'] = personagem.grupos_CpM
    ficha['data']['grupos']['EP'] = personagem.grupos_EP
    ficha['data']['grupos']['PP'] = personagem.grupos_PP
    ficha['data']['grupos']['PpA'] = personagem.grupos_PpA
    ficha['data']['grupos']['PpB'] = personagem.grupos_PpB
    ficha['data']['pontos_aqui'] = personagem.pontos_aqui
    ficha['data']['max_hab'] = personagem.max_hab
    ficha['data']['pontos_comb'] = personagem.pontos_comb
    ficha['data']['pontos_tec'] = personagem.pontos_tec
    ficha['data']['pontos_mag'] = personagem.pontos_mag
    ficha['data']['idade'] = personagem.idade
    ficha['data']['altura'] = personagem.altura
    ficha['data']['peso'] = personagem.peso
    ficha['data']['carga'] = {}
    ficha['data']['carga']['value'] = personagem.carga_value
    ficha['data']['carga']['max'] = personagem.carga_max
    ficha['data']['carga']['sobrecarga'] = personagem.carga_sobrecarga
    ficha['data']['carga']['valor_s'] = personagem.carga_valor_s
    ficha['data']['classe_social'] = personagem.classe_social
    ficha['data']['deus'] = personagem.deus
    ficha['data']['pontos_estagio'] = {}
    ficha['data']['pontos_estagio']['value'] = personagem.pontos_estagio_value
    ficha['data']['pontos_estagio']['next'] = personagem.pontos_estagio_next
    ficha['data']['dinheiro'] = {}
    ficha['data']['dinheiro']['mo'] = personagem.dinheiro_mo
    ficha['data']['dinheiro']['mp'] = personagem.dinheiro_mp
    ficha['data']['dinheiro']['mc'] = personagem.dinheiro_mc
    ficha['data']['carga_transp'] = {}
    ficha['data']['carga_transp']['max'] = personagem.carga_transp_max 
    ficha['data']['carga_transp']['value'] = personagem.carga_transp_value
    ficha['data']['carga_transp']['hasTransp'] = personagem.carga_transp_hasTransp 
    ficha['data']['carac_sort'] = {}
    ficha['data']['carac_sort']['INT'] = personagem.carac_sort_INT
    ficha['data']['carac_sort']['AUR'] = personagem.carac_sort_AUR
    ficha['data']['carac_sort']['CAR'] = personagem.carac_sort_CAR
    ficha['data']['carac_sort']['FOR'] = personagem.carac_sort_FOR
    ficha['data']['carac_sort']['FIS'] = personagem.carac_sort_FIS
    ficha['data']['carac_sort']['AGI'] = personagem.carac_sort_AGI
    ficha['data']['carac_sort']['PER'] = personagem.carac_sort_PER
    ficha['data']['carac_final'] = {}
    ficha['data']['carac_final']['INT'] = personagem.carac_final_INT
    ficha['data']['carac_final']['AUR'] = personagem.carac_final_AUR
    ficha['data']['carac_final']['CAR'] = personagem.carac_final_CAR
    ficha['data']['carac_final']['FOR'] = personagem.carac_final_FOR
    ficha['data']['carac_final']['FIS'] = personagem.carac_final_FIS
    ficha['data']['carac_final']['AGI'] = personagem.carac_final_AGI
    ficha['data']['carac_final']['PER'] = personagem.carac_final_PER
    ficha['data']['mod_racial'] = {}
    ficha['data']['mod_racial']['INT'] = personagem.mod_racial_INT
    ficha['data']['mod_racial']['AUR'] = personagem.mod_racial_AUR
    ficha['data']['mod_racial']['CAR'] = personagem.mod_racial_CAR
    ficha['data']['mod_racial']['FOR'] = personagem.mod_racial_FOR
    ficha['data']['mod_racial']['FIS'] = personagem.mod_racial_FIS
    ficha['data']['mod_racial']['AGI'] = personagem.mod_racial_AGI
    ficha['data']['mod_racial']['PER'] = personagem.mod_racial_PER
    ficha['data']['hab_nata'] = personagem.hab_nata
    ficha['items'] = json.loads(personagem.items)
    try:
        filename = "fvtt-Actor-"+personagem.name
        filenam, _ = QFileDialog.getSaveFileName(None,"JSON para importar no Foundry Vtt",filename,"JSON (*.json)")
        arquivo = open(filenam, 'w', encoding='utf8')
        #arquivo = filedialog.asksaveasfile(mode="w",defaultextension='.json',filetypes=[('JSON',".json")],initialfile=filename)
        arquivo.write(json.dumps(ficha))
        arquivo.close()
        return redirect('/personagem_cp/%d' % id)
    except:
        return "Deu pobrema ai!"

@app.route('/tojson_npc/<int:id>', methods=['GET'])
def tojson_npc(id):
    personagem = NPC.query.get_or_404(id)
    ficha = dict()
    ficha['name'] = personagem.name
    ficha['type'] = "NPC"
    ficha['data'] = {}
    ficha['data']['descricao'] = personagem.descricao
    ficha['data']['estagio'] = personagem.estagio
    ficha['data']['atributos'] = {}
    ficha['data']['atributos']['INT'] = personagem.atributos_INT
    ficha['data']['atributos']['AUR'] = personagem.atributos_AUR
    ficha['data']['atributos']['CAR'] = personagem.atributos_CAR
    ficha['data']['atributos']['FOR'] = personagem.atributos_FOR
    ficha['data']['atributos']['FIS'] = personagem.atributos_FIS
    ficha['data']['atributos']['AGI'] = personagem.atributos_AGI
    ficha['data']['atributos']['PER'] = personagem.atributos_PER
    ficha['data']['valor_teste'] = {}
    ficha['data']['valor_teste']['INT'] = personagem.valor_teste_INT
    ficha['data']['valor_teste']['AUR'] = personagem.valor_teste_AUR
    ficha['data']['valor_teste']['CAR'] = personagem.valor_teste_CAR
    ficha['data']['valor_teste']['FOR'] = personagem.valor_teste_FOR
    ficha['data']['valor_teste']['FIS'] = personagem.valor_teste_FIS
    ficha['data']['valor_teste']['AGI'] = personagem.valor_teste_AGI
    ficha['data']['valor_teste']['PER'] = personagem.valor_teste_PER
    ficha['data']['eh_npc'] = {}
    ficha['data']['eh_npc']['value'] = personagem.eh_value
    ficha['data']['eh_npc']['max'] = personagem.eh_max
    ficha['data']['absorcao'] = {}
    ficha['data']['absorcao']['value'] = personagem.absorcao_value
    ficha['data']['absorcao']['max'] = personagem.absorcao_max
    ficha['data']['ef_npc'] = {}
    ficha['data']['ef_npc']['value'] = personagem.ef_value
    ficha['data']['ef_npc']['max'] = personagem.ef_max
    ficha['data']['karma_npc'] = {}
    ficha['data']['karma_npc']['value'] = personagem.karma_value
    ficha['data']['karma_npc']['max'] = personagem.karma_max
    ficha['data']['focus'] = {}
    ficha['data']['focus']['value'] = personagem.focus_value
    ficha['data']['focus']['max'] = personagem.focus_max
    ficha['data']['vb'] = personagem.vb
    ficha['data']['vbe'] = personagem.vbe
    ficha['data']['rm'] = personagem.rm
    ficha['data']['rf'] = personagem.rf
    ficha['data']['iniciativa'] = personagem.iniciativa
    ficha['data']['d_ativa'] = {}
    ficha['data']['d_ativa']['valor'] = personagem.d_ativa_valor
    ficha['data']['d_ativa']['categoria'] = personagem.d_ativa_categoria
    ficha['data']['d_passiva'] = {}
    ficha['data']['d_passiva']['valor'] = personagem.d_passiva_valor
    ficha['data']['d_passiva']['categoria'] = personagem.d_passiva_categoria
    ficha['data']['grupos'] = {}
    ficha['data']['grupos']['CD'] = personagem.grupos_CD
    ficha['data']['grupos']['CI'] = personagem.grupos_CI
    ficha['data']['grupos']['CL'] = personagem.grupos_CL
    ficha['data']['grupos']['CLD'] = personagem.grupos_CLD
    ficha['data']['grupos']['EL'] = personagem.grupos_EL
    ficha['data']['grupos']['CmE'] = personagem.grupos_CmE
    ficha['data']['grupos']['CmM'] = personagem.grupos_CmM
    ficha['data']['grupos']['EM'] = personagem.grupos_EM
    ficha['data']['grupos']['PmA'] = personagem.grupos_PmA
    ficha['data']['grupos']['PmL'] = personagem.grupos_PmL
    ficha['data']['grupos']['CpE'] = personagem.grupos_CpE
    ficha['data']['grupos']['CpM'] = personagem.grupos_CpM
    ficha['data']['grupos']['EP'] = personagem.grupos_EP
    ficha['data']['grupos']['PP'] = personagem.grupos_PP
    ficha['data']['grupos']['PpA'] = personagem.grupos_PpA
    ficha['data']['grupos']['PpB'] = personagem.grupos_PpB
    ficha['data']['altura'] = personagem.altura
    ficha['data']['peso'] = personagem.peso
    ficha['data']['carga'] = {}
    ficha['data']['carga']['max'] = personagem.carga_max
    ficha['data']['carga']['sobrecarga'] = personagem.carga_sobrecarga
    ficha['data']['carga']['valor_s'] = personagem.carga_valor_s
    ficha['data']['carga_transp'] = {}
    ficha['data']['carga_transp']['max'] = personagem.carga_transp_max 
    ficha['data']['carga_transp']['value'] = personagem.carga_transp_value
    ficha['data']['carga_transp']['hasTransp'] = personagem.carga_transp_hasTransp 
    ficha['data']['moral'] = personagem.moral
    ficha['items'] = json.loads(personagem.items)
    try:
        filename = "fvtt-Actor-"+personagem.name
        filenam, _ = QFileDialog.getSaveFileName(None,"JSON para importar no Foundry Vtt",filename,"JSON (*.json)")
        arquivo = open(filenam, 'w', encoding='utf8')
        #arquivo = filedialog.asksaveasfile(mode="w",defaultextension='.json',filetypes=[('JSON',".json")],initialfile=filename)
        arquivo.write(json.dumps(ficha))
        arquivo.close()
        return redirect('/npc/%d' % id)
    except:
        return "Deu pobrema ai!"

@app.route('/tojson_sp/<int:id>', methods=['GET'])
def tojson_sp(id):
    personagem = Personagem.query.get_or_404(id)
    ficha = dict()
    ficha['name'] = personagem.name
    ficha['type'] = "Personagem"
    ficha['data'] = {}
    ficha['data']['descricao'] = personagem.descricao
    ficha['data']['raca'] = personagem.raca
    ficha['data']['profissao'] = personagem.profissao
    ficha['data']['estagio'] = personagem.estagio
    ficha['data']['especializacao'] = personagem.especializacao
    ficha['data']['atributos'] = {}
    ficha['data']['atributos']['INT'] = personagem.atributos_INT
    ficha['data']['atributos']['AUR'] = personagem.atributos_AUR
    ficha['data']['atributos']['CAR'] = personagem.atributos_CAR
    ficha['data']['atributos']['FOR'] = personagem.atributos_FOR
    ficha['data']['atributos']['FIS'] = personagem.atributos_FIS
    ficha['data']['atributos']['AGI'] = personagem.atributos_AGI
    ficha['data']['atributos']['PER'] = personagem.atributos_PER
    ficha['data']['valor_teste'] = {}
    ficha['data']['valor_teste']['INT'] = personagem.valor_teste_INT
    ficha['data']['valor_teste']['AUR'] = personagem.valor_teste_AUR
    ficha['data']['valor_teste']['CAR'] = personagem.valor_teste_CAR
    ficha['data']['valor_teste']['FOR'] = personagem.valor_teste_FOR
    ficha['data']['valor_teste']['FIS'] = personagem.valor_teste_FIS
    ficha['data']['valor_teste']['AGI'] = personagem.valor_teste_AGI
    ficha['data']['valor_teste']['PER'] = personagem.valor_teste_PER
    ficha['data']['eh'] = {}
    ficha['data']['eh']['value'] = personagem.eh_value
    ficha['data']['eh']['max'] = personagem.eh_max
    ficha['data']['absorcao'] = {}
    ficha['data']['absorcao']['value'] = personagem.absorcao_value
    ficha['data']['absorcao']['max'] = personagem.absorcao_max
    ficha['data']['ef'] = {}
    ficha['data']['ef']['value'] = personagem.ef_value
    ficha['data']['ef']['max'] = personagem.ef_max
    ficha['data']['karma'] = {}
    ficha['data']['karma']['value'] = personagem.karma_value
    ficha['data']['karma']['max'] = personagem.karma_max
    ficha['data']['focus'] = {}
    ficha['data']['focus']['value'] = personagem.focus_value
    ficha['data']['focus']['max'] = personagem.focus_max
    ficha['data']['vb'] = personagem.vb
    ficha['data']['vbe'] = personagem.vbe
    ficha['data']['rm'] = personagem.rm
    ficha['data']['rf'] = personagem.rf
    ficha['data']['iniciativa'] = personagem.iniciativa
    ficha['data']['d_ativa'] = {}
    ficha['data']['d_ativa']['valor'] = personagem.d_ativa_valor
    ficha['data']['d_ativa']['categoria'] = personagem.d_ativa_categoria
    ficha['data']['d_passiva'] = {}
    ficha['data']['d_passiva']['valor'] = personagem.d_passiva_valor
    ficha['data']['d_passiva']['categoria'] = personagem.d_passiva_categoria
    ficha['data']['grupos'] = {}
    ficha['data']['grupos']['CD'] = personagem.grupos_CD
    ficha['data']['grupos']['CI'] = personagem.grupos_CI
    ficha['data']['grupos']['CL'] = personagem.grupos_CL
    ficha['data']['grupos']['CLD'] = personagem.grupos_CLD
    ficha['data']['grupos']['EL'] = personagem.grupos_EL
    ficha['data']['grupos']['CmE'] = personagem.grupos_CmE
    ficha['data']['grupos']['CmM'] = personagem.grupos_CmM
    ficha['data']['grupos']['EM'] = personagem.grupos_EM
    ficha['data']['grupos']['PmA'] = personagem.grupos_PmA
    ficha['data']['grupos']['PmL'] = personagem.grupos_PmL
    ficha['data']['grupos']['CpE'] = personagem.grupos_CpE
    ficha['data']['grupos']['CpM'] = personagem.grupos_CpM
    ficha['data']['grupos']['EP'] = personagem.grupos_EP
    ficha['data']['grupos']['PP'] = personagem.grupos_PP
    ficha['data']['grupos']['PpA'] = personagem.grupos_PpA
    ficha['data']['grupos']['PpB'] = personagem.grupos_PpB
    ficha['data']['pontos_aqui'] = personagem.pontos_aqui
    ficha['data']['max_hab'] = personagem.max_hab
    ficha['data']['pontos_comb'] = personagem.pontos_comb
    ficha['data']['pontos_tec'] = personagem.pontos_tec
    ficha['data']['pontos_mag'] = personagem.pontos_mag
    ficha['data']['idade'] = personagem.idade
    ficha['data']['altura'] = personagem.altura
    ficha['data']['peso'] = personagem.peso
    ficha['data']['carga'] = {}
    ficha['data']['carga']['value'] = personagem.carga_value
    ficha['data']['carga']['max'] = personagem.carga_max
    ficha['data']['carga']['sobrecarga'] = personagem.carga_sobrecarga
    ficha['data']['carga']['valor_s'] = personagem.carga_valor_s
    ficha['data']['classe_social'] = personagem.classe_social
    ficha['data']['deus'] = personagem.deus
    ficha['data']['pontos_estagio'] = {}
    ficha['data']['pontos_estagio']['value'] = personagem.pontos_estagio_value
    ficha['data']['pontos_estagio']['next'] = personagem.pontos_estagio_next
    ficha['data']['dinheiro'] = {}
    ficha['data']['dinheiro']['mo'] = personagem.dinheiro_mo
    ficha['data']['dinheiro']['mp'] = personagem.dinheiro_mp
    ficha['data']['dinheiro']['mc'] = personagem.dinheiro_mc
    ficha['data']['carga_transp'] = {}
    ficha['data']['carga_transp']['max'] = personagem.carga_transp_max 
    ficha['data']['carga_transp']['value'] = personagem.carga_transp_value
    ficha['data']['carga_transp']['hasTransp'] = personagem.carga_transp_hasTransp 
    ficha['data']['carac_sort'] = {}
    ficha['data']['carac_sort']['INT'] = personagem.carac_sort_INT
    ficha['data']['carac_sort']['AUR'] = personagem.carac_sort_AUR
    ficha['data']['carac_sort']['CAR'] = personagem.carac_sort_CAR
    ficha['data']['carac_sort']['FOR'] = personagem.carac_sort_FOR
    ficha['data']['carac_sort']['FIS'] = personagem.carac_sort_FIS
    ficha['data']['carac_sort']['AGI'] = personagem.carac_sort_AGI
    ficha['data']['carac_sort']['PER'] = personagem.carac_sort_PER
    ficha['data']['carac_final'] = {}
    ficha['data']['carac_final']['INT'] = personagem.carac_final_INT
    ficha['data']['carac_final']['AUR'] = personagem.carac_final_AUR
    ficha['data']['carac_final']['CAR'] = personagem.carac_final_CAR
    ficha['data']['carac_final']['FOR'] = personagem.carac_final_FOR
    ficha['data']['carac_final']['FIS'] = personagem.carac_final_FIS
    ficha['data']['carac_final']['AGI'] = personagem.carac_final_AGI
    ficha['data']['carac_final']['PER'] = personagem.carac_final_PER
    ficha['data']['mod_racial'] = {}
    ficha['data']['mod_racial']['INT'] = personagem.mod_racial_INT
    ficha['data']['mod_racial']['AUR'] = personagem.mod_racial_AUR
    ficha['data']['mod_racial']['CAR'] = personagem.mod_racial_CAR
    ficha['data']['mod_racial']['FOR'] = personagem.mod_racial_FOR
    ficha['data']['mod_racial']['FIS'] = personagem.mod_racial_FIS
    ficha['data']['mod_racial']['AGI'] = personagem.mod_racial_AGI
    ficha['data']['mod_racial']['PER'] = personagem.mod_racial_PER
    ficha['data']['hab_nata'] = personagem.hab_nata
    ficha['items'] = json.loads(personagem.items)
    try:
        filename = "fvtt-Actor-"+personagem.name
        filenam, _ = QFileDialog.getSaveFileName(None,"JSON para importar no Foundry Vtt",filename,"JSON (*.json)")
        arquivo = open(filenam, 'w', encoding='utf8')
        #arquivo = filedialog.asksaveasfile(mode="w",defaultextension='.json',filetypes=[('JSON',".json")],initialfile=filename)
        arquivo.write(json.dumps(ficha))
        arquivo.close()
        return redirect('/personagem/%d' % id)
    except:
        return "Deu pobrema ai!"

@app.route('/uploadFoundry/<int:id>', methods=['GET'])
def uploadFoundry(id):
    personagem = Personagem.query.get_or_404(id)
    filename, _ = QFileDialog.getOpenFileName(None, "JSON do Foundry Vtt", "", "JSON (*.json)")
    arquivo = open(filename,'r',encoding="utf8")
    ficha = json.loads(arquivo.read())
    arquivo.close()
    try:
        personagem.name = ficha['name']
        personagem.descricao = ficha['data']['descricao']
        personagem.raca = ficha['data']['raca']
        personagem.profissao = ficha['data']['profissao']
        personagem.estagio = ficha['data']['estagio']
        personagem.especializacao = ficha['data']['especializacao']
        personagem.atributos_INT = ficha['data']['atributos']['INT']
        personagem.atributos_AUR = ficha['data']['atributos']['AUR'] 
        personagem.atributos_CAR = ficha['data']['atributos']['CAR']  
        personagem.atributos_FOR = ficha['data']['atributos']['FOR'] 
        personagem.atributos_FIS = ficha['data']['atributos']['FIS'] 
        personagem.atributos_AGI = ficha['data']['atributos']['AGI']  
        personagem.atributos_PER = ficha['data']['atributos']['PER'] 
        personagem.valor_teste_INT = ficha['data']['valor_teste']['INT']
        personagem.valor_teste_AUR = ficha['data']['valor_teste']['AUR']
        personagem.valor_teste_CAR = ficha['data']['valor_teste']['CAR']
        personagem.valor_teste_FOR = ficha['data']['valor_teste']['FOR']
        personagem.valor_teste_FIS = ficha['data']['valor_teste']['FIS']
        personagem.valor_teste_AGI = ficha['data']['valor_teste']['AGI']
        personagem.valor_teste_PER = ficha['data']['valor_teste']['PER']
        personagem.eh_value = ficha['data']['eh']['value']
        personagem.eh_max = ficha['data']['eh']['max']
        personagem.ef_value = ficha['data']['ef']['value']
        personagem.ef_max = ficha['data']['ef']['max']
        personagem.karma_value = ficha['data']['karma']['value']
        personagem.karma_max = ficha['data']['karma']['max']
        personagem.focus_value = ficha['data']['focus']['value']
        personagem.focus_max = ficha['data']['focus']['max']
        personagem.absorcao_value = ficha['data']['absorcao']['value']
        personagem.absorcao_max = ficha['data']['absorcao']['max']
        personagem.vb = ficha['data']['vb']
        personagem.vbe = ficha['data']['vbe']
        personagem.rm = ficha['data']['rm']
        personagem.rf = ficha['data']['rf']
        personagem.iniciativa = ficha['data']['iniciativa']
        personagem.d_ativa_categoria = ficha['data']['d_ativa']['categoria']
        personagem.d_ativa_valor = ficha['data']['d_ativa']['valor']
        personagem.d_passiva_categoria = ficha['data']['d_passiva']['categoria']
        personagem.d_passiva_valor = ficha['data']['d_passiva']['valor']
        personagem.grupos_CD = ficha['data']['grupos']['CD']
        personagem.grupos_CI = ficha['data']['grupos']['CI'] 
        personagem.grupos_CL = ficha['data']['grupos']['CL'] 
        personagem.grupos_CLD = ficha['data']['grupos']['CLD'] 
        personagem.grupos_CmE = ficha['data']['grupos']['CmE'] 
        personagem.grupos_CmM = ficha['data']['grupos']['CmM']
        personagem.grupos_CpE = ficha['data']['grupos']['CpE'] 
        personagem.grupos_CpM = ficha['data']['grupos']['CpM'] 
        personagem.grupos_EL = ficha['data']['grupos']['EL'] 
        personagem.grupos_EM = ficha['data']['grupos']['EM'] 
        personagem.grupos_EP = ficha['data']['grupos']['EP'] 
        personagem.grupos_PmA = ficha['data']['grupos']['PmA'] 
        personagem.grupos_PmL = ficha['data']['grupos']['PmL'] 
        personagem.grupos_PP = ficha['data']['grupos']['PP'] 
        personagem.grupos_PpA = ficha['data']['grupos']['PpA'] 
        personagem.grupos_PpB = ficha['data']['grupos']['PpB'] 
        personagem.pontos_aqui = ficha['data']['pontos_aqui']
        personagem.max_hab = ficha['data']['max_hab']
        personagem.pontos_comb = ficha['data']['pontos_comb']
        personagem.pontos_tec = ficha['data']['pontos_tec']
        personagem.pontos_mag = ficha['data']['pontos_mag']
        personagem.idade = ficha['data']['idade']
        personagem.altura = ficha['data']['altura']
        personagem.peso = ficha['data']['peso']
        personagem.classe_social = ficha['data']['classe_social']
        personagem.deus = ficha['data']['deus']
        personagem.pontos_estagio_value = ficha['data']['pontos_estagio']['value']
        personagem.pontos_estagio_next = ficha['data']['pontos_estagio']['next']
        personagem.dinheiro_mo = ficha['data']['dinheiro']['mo']
        personagem.dinheiro_mp = ficha['data']['dinheiro']['mp']
        personagem.dinheiro_mc = ficha['data']['dinheiro']['mc']
        personagem.carga_transp_max = ficha['data']['carga_transp']['max']
        personagem.carga_transp_value = ficha['data']['carga_transp']['value']
        personagem.carga_transp_hasTransp = ficha['data']['carga_transp']['hasTransp'] 
        personagem.carga_value = ficha['data']['carga']['value']
        personagem.carga_sobrecarga = ficha['data']['carga']['sobrecarga']
        personagem.carga_max = ficha['data']['carga']['max']
        personagem.carga_valor_s = ficha['data']['carga']['valor_s']
        personagem.carac_sort_INT = ficha['data']['carac_sort']['INT']
        personagem.carac_sort_AUR = ficha['data']['carac_sort']['AUR'] 
        personagem.carac_sort_CAR = ficha['data']['carac_sort']['CAR'] 
        personagem.carac_sort_FOR = ficha['data']['carac_sort']['FOR']
        personagem.carac_sort_FIS = ficha['data']['carac_sort']['FIS'] 
        personagem.carac_sort_AGI = ficha['data']['carac_sort']['AGI'] 
        personagem.carac_sort_PER = ficha['data']['carac_sort']['PER'] 
        personagem.carac_final_INT = ficha['data']['carac_final']['INT']
        personagem.carac_final_AUR = ficha['data']['carac_final']['AUR'] 
        personagem.carac_final_CAR = ficha['data']['carac_final']['CAR'] 
        personagem.carac_final_FOR = ficha['data']['carac_final']['FOR'] 
        personagem.carac_final_FIS = ficha['data']['carac_final']['FIS']
        personagem.carac_final_AGI = ficha['data']['carac_final']['AGI']
        personagem.carac_final_PER = ficha['data']['carac_final']['PER'] 
        personagem.mod_racial_INT = ficha['data']['mod_racial']['INT'] 
        personagem.mod_racial_AUR = ficha['data']['mod_racial']['AUR'] 
        personagem.mod_racial_CAR = ficha['data']['mod_racial']['CAR'] 
        personagem.mod_racial_FOR = ficha['data']['mod_racial']['FOR'] 
        personagem.mod_racial_FIS = ficha['data']['mod_racial']['FIS'] 
        personagem.mod_racial_AGI = ficha['data']['mod_racial']['AGI'] 
        personagem.mod_racial_PER = ficha['data']['mod_racial']['PER'] 
        personagem.hab_nata = ficha['data']['hab_nata']
        print(type(ficha['items']))
        personagem.items = json.dumps(ficha['items'])
        db.session.commit()
        return redirect('/personagem/%d' % id)
    except:
        return "Algo deu Errado!"

@app.route('/uploadFoundryNPC/<int:id>', methods=['GET'])
def uploadFoundryNPC(id):
    personagem = NPC.query.get_or_404(id)
    filename, _ = QFileDialog.getOpenFileName(None, "JSON do Foundry Vtt", "", "JSON (*.json)")
    arquivo = open(filename,'r',encoding="utf8")
    ficha = json.loads(arquivo.read())
    arquivo.close()
    try:
        personagem.name = ficha['name']
        personagem.descricao = ficha['data']['descricao']
        personagem.estagio = ficha['data']['estagio']
        personagem.atributos_INT = ficha['data']['atributos']['INT']
        personagem.atributos_AUR = ficha['data']['atributos']['AUR'] 
        personagem.atributos_CAR = ficha['data']['atributos']['CAR']  
        personagem.atributos_FOR = ficha['data']['atributos']['FOR'] 
        personagem.atributos_FIS = ficha['data']['atributos']['FIS'] 
        personagem.atributos_AGI = ficha['data']['atributos']['AGI']  
        personagem.atributos_PER = ficha['data']['atributos']['PER'] 
        personagem.valor_teste_INT = ficha['data']['valor_teste']['INT']
        personagem.valor_teste_AUR = ficha['data']['valor_teste']['AUR']
        personagem.valor_teste_CAR = ficha['data']['valor_teste']['CAR']
        personagem.valor_teste_FOR = ficha['data']['valor_teste']['FOR']
        personagem.valor_teste_FIS = ficha['data']['valor_teste']['FIS']
        personagem.valor_teste_AGI = ficha['data']['valor_teste']['AGI']
        personagem.valor_teste_PER = ficha['data']['valor_teste']['PER']
        personagem.eh_value = ficha['data']['eh_npc']['value']
        personagem.eh_max = ficha['data']['eh_npc']['max']
        personagem.ef_value = ficha['data']['ef_npc']['value']
        personagem.ef_max = ficha['data']['ef_npc']['max']
        personagem.karma_value = ficha['data']['karma_npc']['value']
        personagem.karma_max = ficha['data']['karma_npc']['max']
        personagem.focus_value = ficha['data']['focus']['value']
        personagem.focus_max = ficha['data']['focus']['max']
        personagem.absorcao_value = ficha['data']['absorcao']['value']
        personagem.absorcao_max = ficha['data']['absorcao']['max']
        personagem.vb = ficha['data']['vb']
        personagem.vbe = ficha['data']['vbe']
        personagem.rm = ficha['data']['rm']
        personagem.rf = ficha['data']['rf']
        personagem.iniciativa = ficha['data']['iniciativa']
        personagem.d_ativa_categoria = ficha['data']['d_ativa']['categoria']
        personagem.d_ativa_valor = ficha['data']['d_ativa']['valor']
        personagem.d_passiva_categoria = ficha['data']['d_passiva']['categoria']
        personagem.d_passiva_valor = ficha['data']['d_passiva']['valor']
        personagem.grupos_CD = ficha['data']['grupos']['CD']
        personagem.grupos_CI = ficha['data']['grupos']['CI'] 
        personagem.grupos_CL = ficha['data']['grupos']['CL'] 
        personagem.grupos_CLD = ficha['data']['grupos']['CLD'] 
        personagem.grupos_CmE = ficha['data']['grupos']['CmE'] 
        personagem.grupos_CmM = ficha['data']['grupos']['CmM']
        personagem.grupos_CpE = ficha['data']['grupos']['CpE'] 
        personagem.grupos_CpM = ficha['data']['grupos']['CpM'] 
        personagem.grupos_EL = ficha['data']['grupos']['EL'] 
        personagem.grupos_EM = ficha['data']['grupos']['EM'] 
        personagem.grupos_EP = ficha['data']['grupos']['EP'] 
        personagem.grupos_PmA = ficha['data']['grupos']['PmA'] 
        personagem.grupos_PmL = ficha['data']['grupos']['PmL'] 
        personagem.grupos_PP = ficha['data']['grupos']['PP'] 
        personagem.grupos_PpA = ficha['data']['grupos']['PpA'] 
        personagem.grupos_PpB = ficha['data']['grupos']['PpB'] 
        personagem.altura = ficha['data']['altura']
        personagem.peso = ficha['data']['peso']
        personagem.carga_transp_max = ficha['data']['carga_transp']['max']
        personagem.carga_transp_value = ficha['data']['carga_transp']['value']
        personagem.carga_transp_hasTransp = ficha['data']['carga_transp']['hasTransp'] 
        personagem.carga_sobrecarga = ficha['data']['carga']['sobrecarga']
        personagem.carga_max = ficha['data']['carga']['max']
        personagem.carga_valor_s = ficha['data']['carga']['valor_s']
        personagem.moral = ficha['data']['moral']
        personagem.items = json.dumps(ficha['items'])
        db.session.commit()
        return redirect('/npc/%d' % id)
    except:
        return "Algo deu Errado!"

@app.route('/uploadFoundry_cp/<int:id>', methods=['GET'])
def uploadFoundry_cp(id):
    personagem = Personagem.query.get_or_404(id)
    filename, _ = QFileDialog.getOpenFileName(None, "JSON do Foundry Vtt", "", "JSON (*.json)")
    arquivo = open(filename,'r',encoding="utf8")
    ficha = json.loads(arquivo.read())
    arquivo.close()
    try:
        personagem.name = ficha['name']
        personagem.descricao = ficha['data']['descricao']
        personagem.raca = ficha['data']['raca']
        personagem.profissao = ficha['data']['profissao']
        personagem.estagio = ficha['data']['estagio']
        personagem.especializacao = ficha['data']['especializacao']
        personagem.atributos_INT = ficha['data']['atributos']['INT']
        personagem.atributos_AUR = ficha['data']['atributos']['AUR'] 
        personagem.atributos_CAR = ficha['data']['atributos']['CAR']  
        personagem.atributos_FOR = ficha['data']['atributos']['FOR'] 
        personagem.atributos_FIS = ficha['data']['atributos']['FIS'] 
        personagem.atributos_AGI = ficha['data']['atributos']['AGI']  
        personagem.atributos_PER = ficha['data']['atributos']['PER'] 
        personagem.valor_teste_INT = ficha['data']['valor_teste']['INT']
        personagem.valor_teste_AUR = ficha['data']['valor_teste']['AUR']
        personagem.valor_teste_CAR = ficha['data']['valor_teste']['CAR']
        personagem.valor_teste_FOR = ficha['data']['valor_teste']['FOR']
        personagem.valor_teste_FIS = ficha['data']['valor_teste']['FIS']
        personagem.valor_teste_AGI = ficha['data']['valor_teste']['AGI']
        personagem.valor_teste_PER = ficha['data']['valor_teste']['PER']
        personagem.eh_value = ficha['data']['eh']['value']
        personagem.eh_max = ficha['data']['eh']['max']
        personagem.ef_value = ficha['data']['ef']['value']
        personagem.ef_max = ficha['data']['ef']['max']
        personagem.karma_value = ficha['data']['karma']['value']
        personagem.karma_max = ficha['data']['karma']['max']
        personagem.focus_value = ficha['data']['focus']['value']
        personagem.focus_max = ficha['data']['focus']['max']
        personagem.absorcao_value = ficha['data']['absorcao']['value']
        personagem.absorcao_max = ficha['data']['absorcao']['max']
        personagem.vb = ficha['data']['vb']
        personagem.vbe = ficha['data']['vbe']
        personagem.rm = ficha['data']['rm']
        personagem.rf = ficha['data']['rf']
        personagem.iniciativa = ficha['data']['iniciativa']
        personagem.d_ativa_categoria = ficha['data']['d_ativa']['categoria']
        personagem.d_ativa_valor = ficha['data']['d_ativa']['valor']
        personagem.d_passiva_categoria = ficha['data']['d_passiva']['categoria']
        personagem.d_passiva_valor = ficha['data']['d_passiva']['valor']
        personagem.grupos_CD = ficha['data']['grupos']['CD']
        personagem.grupos_CI = ficha['data']['grupos']['CI'] 
        personagem.grupos_CL = ficha['data']['grupos']['CL'] 
        personagem.grupos_CLD = ficha['data']['grupos']['CLD'] 
        personagem.grupos_CmE = ficha['data']['grupos']['CmE'] 
        personagem.grupos_CmM = ficha['data']['grupos']['CmM']
        personagem.grupos_CpE = ficha['data']['grupos']['CpE'] 
        personagem.grupos_CpM = ficha['data']['grupos']['CpM'] 
        personagem.grupos_EL = ficha['data']['grupos']['EL'] 
        personagem.grupos_EM = ficha['data']['grupos']['EM'] 
        personagem.grupos_EP = ficha['data']['grupos']['EP'] 
        personagem.grupos_PmA = ficha['data']['grupos']['PmA'] 
        personagem.grupos_PmL = ficha['data']['grupos']['PmL'] 
        personagem.grupos_PP = ficha['data']['grupos']['PP'] 
        personagem.grupos_PpA = ficha['data']['grupos']['PpA'] 
        personagem.grupos_PpB = ficha['data']['grupos']['PpB'] 
        personagem.pontos_aqui = ficha['data']['pontos_aqui']
        personagem.max_hab = ficha['data']['max_hab']
        personagem.pontos_comb = ficha['data']['pontos_comb']
        personagem.pontos_tec = ficha['data']['pontos_tec']
        personagem.pontos_mag = ficha['data']['pontos_mag']
        personagem.idade = ficha['data']['idade']
        personagem.altura = ficha['data']['altura']
        personagem.peso = ficha['data']['peso']
        personagem.classe_social = ficha['data']['classe_social']
        personagem.deus = ficha['data']['deus']
        personagem.pontos_estagio_value = ficha['data']['pontos_estagio']['value']
        personagem.pontos_estagio_next = ficha['data']['pontos_estagio']['next']
        personagem.dinheiro_mo = ficha['data']['dinheiro']['mo']
        personagem.dinheiro_mp = ficha['data']['dinheiro']['mp']
        personagem.dinheiro_mc = ficha['data']['dinheiro']['mc']
        personagem.carga_transp_max = ficha['data']['carga_transp']['max']
        personagem.carga_transp_value = ficha['data']['carga_transp']['value']
        personagem.carga_transp_hasTransp = ficha['data']['carga_transp']['hasTransp'] 
        personagem.carga_value = ficha['data']['carga']['value']
        personagem.carga_sobrecarga = ficha['data']['carga']['sobrecarga']
        personagem.carga_max = ficha['data']['carga']['max']
        personagem.carga_valor_s = ficha['data']['carga']['valor_s']
        personagem.carac_sort_INT = ficha['data']['carac_sort']['INT']
        personagem.carac_sort_AUR = ficha['data']['carac_sort']['AUR'] 
        personagem.carac_sort_CAR = ficha['data']['carac_sort']['CAR'] 
        personagem.carac_sort_FOR = ficha['data']['carac_sort']['FOR']
        personagem.carac_sort_FIS = ficha['data']['carac_sort']['FIS'] 
        personagem.carac_sort_AGI = ficha['data']['carac_sort']['AGI'] 
        personagem.carac_sort_PER = ficha['data']['carac_sort']['PER'] 
        personagem.carac_final_INT = ficha['data']['carac_final']['INT']
        personagem.carac_final_AUR = ficha['data']['carac_final']['AUR'] 
        personagem.carac_final_CAR = ficha['data']['carac_final']['CAR'] 
        personagem.carac_final_FOR = ficha['data']['carac_final']['FOR'] 
        personagem.carac_final_FIS = ficha['data']['carac_final']['FIS']
        personagem.carac_final_AGI = ficha['data']['carac_final']['AGI']
        personagem.carac_final_PER = ficha['data']['carac_final']['PER'] 
        personagem.mod_racial_INT = ficha['data']['mod_racial']['INT'] 
        personagem.mod_racial_AUR = ficha['data']['mod_racial']['AUR'] 
        personagem.mod_racial_CAR = ficha['data']['mod_racial']['CAR'] 
        personagem.mod_racial_FOR = ficha['data']['mod_racial']['FOR'] 
        personagem.mod_racial_FIS = ficha['data']['mod_racial']['FIS'] 
        personagem.mod_racial_AGI = ficha['data']['mod_racial']['AGI'] 
        personagem.mod_racial_PER = ficha['data']['mod_racial']['PER'] 
        personagem.hab_nata = ficha['data']['hab_nata']
        print(type(ficha['items']))
        personagem.items = json.dumps(ficha['items'])
        db.session.commit()
        return redirect('/personagem_cp/%d' % id)
    except:
        return "Algo deu Errado!"

@app.route('/update_npc/<int:id>', methods=['POST'])
def update_npc(id):
    npc = NPC.query.get_or_404(id)
    npc.name = request.form['data.name']
    npc.descricao = request.form['data.descricao']
    npc.estagio = request.form['data.estagio']
    npc.atributos_INT = request.form['data.atributos.INT']
    npc.atributos_AUR = request.form['data.atributos.AUR']
    npc.atributos_CAR = request.form['data.atributos.CAR']
    npc.atributos_FOR = request.form['data.atributos.FOR']
    npc.atributos_FIS = request.form['data.atributos.FIS']
    npc.atributos_AGI = request.form['data.atributos.AGI']
    npc.atributos_PER = request.form['data.atributos.PER']
    npc.valor_teste_INT = request.form['data.valor_teste.INT']
    npc.valor_teste_AUR = request.form['data.valor_teste.AUR']
    npc.valor_teste_CAR = request.form['data.valor_teste.CAR']
    npc.valor_teste_FOR = request.form['data.valor_teste.FOR']
    npc.valor_teste_FIS = request.form['data.valor_teste.FIS']
    npc.valor_teste_AGI = request.form['data.valor_teste.AGI']
    npc.valor_teste_PER = request.form['data.valor_teste.PER']
    npc.eh_value = request.form['data.eh.value']
    npc.eh_max = request.form['data.eh.max']
    npc.ef_value = request.form['data.ef.value']
    npc.ef_max = request.form['data.ef.max']
    npc.karma_value = request.form['data.karma.value']
    npc.karma_max = request.form['data.karma.max']
    npc.focus_value = request.form['data.focus.value']
    npc.focus_max = request.form['data.focus.max']
    npc.absorcao_value = request.form['data.absorcao.value']
    npc.absorcao_max = request.form['data.absorcao.max']
    npc.vb = request.form['data.vb']
    npc.vbe = request.form['data.vbe']
    npc.rm = request.form['data.rm']
    npc.rf = request.form['data.rf']
    npc.iniciativa = request.form['data.iniciativa']
    npc.d_ativa_categoria = request.form['data.d_ativa.categoria']
    npc.d_ativa_valor = request.form['data.d_ativa.valor']
    npc.d_passiva_categoria = request.form['data.d_passiva.categoria']
    npc.d_passiva_valor = request.form['data.d_passiva.valor']
    npc.grupos_CD = request.form['data.grupos.CD']
    npc.grupos_CI = request.form['data.grupos.CI']
    npc.grupos_CL = request.form['data.grupos.CL']
    npc.grupos_CLD = request.form['data.grupos.CLD']
    npc.grupos_CmE = request.form['data.grupos.CmE']
    npc.grupos_CmM = request.form['data.grupos.CmM']
    npc.grupos_CpE = request.form['data.grupos.CpE']
    npc.grupos_CpM = request.form['data.grupos.CpM']
    npc.grupos_EL = request.form['data.grupos.EL']
    npc.grupos_EM = request.form['data.grupos.EM']
    npc.grupos_EP = request.form['data.grupos.EP']
    npc.grupos_PmA = request.form['data.grupos.PmA']
    npc.grupos_PmL = request.form['data.grupos.PmL']
    npc.grupos_PP = request.form['data.grupos.PP']
    npc.grupos_PpA = request.form['data.grupos.PpA']
    npc.grupos_PpB = request.form['data.grupos.PpB']
    npc.altura = request.form['data.altura']
    npc.peso = request.form['data.peso']
    npc.carga_transp_max = request.form['data.carga_transp.max']
    npc.carga_transp_value = request.form['data.carga_transp.value']
    npc.carga_transp_hasTransp = request.form.get('data.carga_transp.hasTransp')
    if (npc.carga_transp_hasTransp == "on"): npc.carga_transp_hasTransp = True
    else: npc.carga_transp_hasTransp = False
    npc.carga_sobrecarga = request.form.get('data.carga.sobrecarga')
    if (npc.carga_sobrecarga == "on"): npc.carga_sobrecarga = True
    else: npc.carga_sobrecarga = False
    npc.carga_max = request.form['data.carga.max']
    npc.carga_valor_s = request.form['data.carga.valor_s']
    npc.moral = request.form['data.moral']
    npc.items = request.form['data.items']
    try:
        db.session.commit()
        return redirect('/npc/%d' % id)
    except:
        return "Algo deu Errado!"

@app.route('/update/<int:id>', methods=['POST'])
def update(id):
    personagem = Personagem.query.get_or_404(id)
    personagem.name = request.form['data.name']
    personagem.descricao = request.form['data.descricao']
    personagem.raca = request.form['data.raca']
    personagem.profissao = request.form['data.profissao']
    personagem.estagio = request.form['data.estagio']
    personagem.especializacao = request.form['data.especializacao']
    personagem.atributos_INT = request.form['data.atributos.INT']
    personagem.atributos_AUR = request.form['data.atributos.AUR']
    personagem.atributos_CAR = request.form['data.atributos.CAR']
    personagem.atributos_FOR = request.form['data.atributos.FOR']
    personagem.atributos_FIS = request.form['data.atributos.FIS']
    personagem.atributos_AGI = request.form['data.atributos.AGI']
    personagem.atributos_PER = request.form['data.atributos.PER']
    personagem.valor_teste_INT = request.form['data.valor_teste.INT']
    personagem.valor_teste_AUR = request.form['data.valor_teste.AUR']
    personagem.valor_teste_CAR = request.form['data.valor_teste.CAR']
    personagem.valor_teste_FOR = request.form['data.valor_teste.FOR']
    personagem.valor_teste_FIS = request.form['data.valor_teste.FIS']
    personagem.valor_teste_AGI = request.form['data.valor_teste.AGI']
    personagem.valor_teste_PER = request.form['data.valor_teste.PER']
    personagem.eh_value = request.form['data.eh.value']
    personagem.eh_max = request.form['data.eh.max']
    personagem.ef_value = request.form['data.ef.value']
    personagem.ef_max = request.form['data.ef.max']
    personagem.karma_value = request.form['data.karma.value']
    personagem.karma_max = request.form['data.karma.max']
    personagem.focus_value = request.form['data.focus.value']
    personagem.focus_max = request.form['data.focus.max']
    personagem.absorcao_value = request.form['data.absorcao.value']
    personagem.absorcao_max = request.form['data.absorcao.max']
    personagem.vb = request.form['data.vb']
    personagem.vbe = request.form['data.vbe']
    personagem.rm = request.form['data.rm']
    personagem.rf = request.form['data.rf']
    personagem.iniciativa = request.form['data.iniciativa']
    personagem.d_ativa_categoria = request.form['data.d_ativa.categoria']
    personagem.d_ativa_valor = request.form['data.d_ativa.valor']
    personagem.d_passiva_categoria = request.form['data.d_passiva.categoria']
    personagem.d_passiva_valor = request.form['data.d_passiva.valor']
    personagem.grupos_CD = request.form['data.grupos.CD']
    personagem.grupos_CI = request.form['data.grupos.CI']
    personagem.grupos_CL = request.form['data.grupos.CL']
    personagem.grupos_CLD = request.form['data.grupos.CLD']
    personagem.grupos_CmE = request.form['data.grupos.CmE']
    personagem.grupos_CmM = request.form['data.grupos.CmM']
    personagem.grupos_CpE = request.form['data.grupos.CpE']
    personagem.grupos_CpM = request.form['data.grupos.CpM']
    personagem.grupos_EL = request.form['data.grupos.EL']
    personagem.grupos_EM = request.form['data.grupos.EM']
    personagem.grupos_EP = request.form['data.grupos.EP']
    personagem.grupos_PmA = request.form['data.grupos.PmA']
    personagem.grupos_PmL = request.form['data.grupos.PmL']
    personagem.grupos_PP = request.form['data.grupos.PP']
    personagem.grupos_PpA = request.form['data.grupos.PpA']
    personagem.grupos_PpB = request.form['data.grupos.PpB']
    personagem.pontos_aqui = request.form['data.pontos_aqui']
    personagem.max_hab = request.form['data.max_hab']
    personagem.pontos_comb = request.form['data.pontos_comb']
    personagem.pontos_tec = request.form['data.pontos_tec']
    personagem.pontos_mag = request.form['data.pontos_mag']
    personagem.idade = request.form['data.idade']
    personagem.altura = request.form['data.altura']
    personagem.peso = request.form['data.peso']
    personagem.classe_social = request.form['data.classe_social']
    personagem.deus = request.form['data.deus']
    personagem.pontos_estagio_value = request.form['data.pontos_estagio.value']
    personagem.pontos_estagio_next = request.form['data.pontos_estagio.next']
    personagem.dinheiro_mo = request.form['data.mo']
    personagem.dinheiro_mp = request.form['data.mp']
    personagem.dinheiro_mc = request.form['data.mc']
    personagem.carga_transp_max = request.form['data.carga_transp.max']
    personagem.carga_transp_value = request.form['data.carga_transp.value']
    personagem.carga_transp_hasTransp = request.form.get('data.carga_transp.hasTransp')
    if (personagem.carga_transp_hasTransp == "on"): personagem.carga_transp_hasTransp = True
    else: personagem.carga_transp_hasTransp = False
    personagem.carga_value = request.form['data.carga.value']
    personagem.carga_sobrecarga = request.form.get('data.carga.sobrecarga')
    if (personagem.carga_sobrecarga == "on"): personagem.carga_sobrecarga = True
    else: personagem.carga_sobrecarga = False
    personagem.carga_max = request.form['data.carga.max']
    personagem.carga_valor_s = request.form['data.carga.valor_s']
    personagem.carac_sort_INT = request.form['data.carac_sort.INT']
    personagem.carac_sort_AUR = request.form['data.carac_sort.AUR']
    personagem.carac_sort_CAR = request.form['data.carac_sort.CAR']
    personagem.carac_sort_FOR = request.form['data.carac_sort.FOR']
    personagem.carac_sort_FIS = request.form['data.carac_sort.FIS']
    personagem.carac_sort_AGI = request.form['data.carac_sort.AGI']
    personagem.carac_sort_PER = request.form['data.carac_sort.PER']
    personagem.carac_final_INT = request.form['data.carac_final.INT']
    personagem.carac_final_AUR = request.form['data.carac_final.AUR']
    personagem.carac_final_CAR = request.form['data.carac_final.CAR']
    personagem.carac_final_FOR = request.form['data.carac_final.FOR']
    personagem.carac_final_FIS = request.form['data.carac_final.FIS']
    personagem.carac_final_AGI = request.form['data.carac_final.AGI']
    personagem.carac_final_PER = request.form['data.carac_final.PER']
    personagem.mod_racial_INT = request.form['data.mod_racial.INT']
    personagem.mod_racial_AUR = request.form['data.mod_racial.AUR']
    personagem.mod_racial_CAR = request.form['data.mod_racial.CAR']
    personagem.mod_racial_FOR = request.form['data.mod_racial.FOR']
    personagem.mod_racial_FIS = request.form['data.mod_racial.FIS']
    personagem.mod_racial_AGI = request.form['data.mod_racial.AGI']
    personagem.mod_racial_PER = request.form['data.mod_racial.PER']
    personagem.hab_nata = request.form['data.hab_nata']
    personagem.items = request.form['data.items']
    try:
        db.session.commit()
        return redirect('/personagem/%d' % id)
    except:
        return "Algo deu Errado!"

@app.route('/update_cp/<int:id>', methods=['POST'])
def update_cp(id):
    personagem = Personagem.query.get_or_404(id)
    personagem.name = request.form['data.name']
    personagem.descricao = request.form['data.descricao']
    personagem.raca = request.form['data.raca']
    personagem.profissao = request.form['data.profissao']
    personagem.estagio = request.form['data.estagio']
    personagem.especializacao = request.form['data.especializacao']
    personagem.atributos_INT = request.form['data.atributos.INT']
    personagem.atributos_AUR = request.form['data.atributos.AUR']
    personagem.atributos_CAR = request.form['data.atributos.CAR']
    personagem.atributos_FOR = request.form['data.atributos.FOR']
    personagem.atributos_FIS = request.form['data.atributos.FIS']
    personagem.atributos_AGI = request.form['data.atributos.AGI']
    personagem.atributos_PER = request.form['data.atributos.PER']
    personagem.valor_teste_INT = request.form['data.valor_teste.INT']
    personagem.valor_teste_AUR = request.form['data.valor_teste.AUR']
    personagem.valor_teste_CAR = request.form['data.valor_teste.CAR']
    personagem.valor_teste_FOR = request.form['data.valor_teste.FOR']
    personagem.valor_teste_FIS = request.form['data.valor_teste.FIS']
    personagem.valor_teste_AGI = request.form['data.valor_teste.AGI']
    personagem.valor_teste_PER = request.form['data.valor_teste.PER']
    personagem.eh_value = request.form['data.eh.value']
    personagem.eh_max = request.form['data.eh.max']
    personagem.ef_value = request.form['data.ef.value']
    personagem.ef_max = request.form['data.ef.max']
    personagem.karma_value = request.form['data.karma.value']
    personagem.karma_max = request.form['data.karma.max']
    personagem.focus_value = request.form['data.focus.value']
    personagem.focus_max = request.form['data.focus.max']
    personagem.absorcao_value = request.form['data.absorcao.value']
    personagem.absorcao_max = request.form['data.absorcao.max']
    personagem.vb = request.form['data.vb']
    personagem.vbe = request.form['data.vbe']
    personagem.rm = request.form['data.rm']
    personagem.rf = request.form['data.rf']
    personagem.iniciativa = request.form['data.iniciativa']
    personagem.d_ativa_categoria = request.form['data.d_ativa.categoria']
    personagem.d_ativa_valor = request.form['data.d_ativa.valor']
    personagem.d_passiva_categoria = request.form['data.d_passiva.categoria']
    personagem.d_passiva_valor = request.form['data.d_passiva.valor']
    personagem.grupos_CD = request.form['data.grupos.CD']
    personagem.grupos_CI = request.form['data.grupos.CI']
    personagem.grupos_CL = request.form['data.grupos.CL']
    personagem.grupos_CLD = request.form['data.grupos.CLD']
    personagem.grupos_CmE = request.form['data.grupos.CmE']
    personagem.grupos_CmM = request.form['data.grupos.CmM']
    personagem.grupos_CpE = request.form['data.grupos.CpE']
    personagem.grupos_CpM = request.form['data.grupos.CpM']
    personagem.grupos_EL = request.form['data.grupos.EL']
    personagem.grupos_EM = request.form['data.grupos.EM']
    personagem.grupos_EP = request.form['data.grupos.EP']
    personagem.grupos_PmA = request.form['data.grupos.PmA']
    personagem.grupos_PmL = request.form['data.grupos.PmL']
    personagem.grupos_PP = request.form['data.grupos.PP']
    personagem.grupos_PpA = request.form['data.grupos.PpA']
    personagem.grupos_PpB = request.form['data.grupos.PpB']
    personagem.pontos_aqui = request.form['data.pontos_aqui']
    personagem.max_hab = request.form['data.max_hab']
    personagem.pontos_comb = request.form['data.pontos_comb']
    personagem.pontos_tec = request.form['data.pontos_tec']
    personagem.pontos_mag = request.form['data.pontos_mag']
    personagem.idade = request.form['data.idade']
    personagem.altura = request.form['data.altura']
    personagem.peso = request.form['data.peso']
    personagem.classe_social = request.form['data.classe_social']
    personagem.deus = request.form['data.deus']
    personagem.pontos_estagio_value = request.form['data.pontos_estagio.value']
    personagem.pontos_estagio_next = request.form['data.pontos_estagio.next']
    personagem.dinheiro_mo = request.form['data.mo']
    personagem.dinheiro_mp = request.form['data.mp']
    personagem.dinheiro_mc = request.form['data.mc']
    personagem.carga_transp_max = request.form['data.carga_transp.max']
    personagem.carga_transp_value = request.form['data.carga_transp.value']
    personagem.carga_transp_hasTransp = request.form.get('data.carga_transp.hasTransp')
    if (personagem.carga_transp_hasTransp == "on"): personagem.carga_transp_hasTransp = True
    else: personagem.carga_transp_hasTransp = False
    personagem.carga_value = request.form['data.carga.value']
    personagem.carga_sobrecarga = request.form.get('data.carga.sobrecarga')
    if (personagem.carga_sobrecarga == "on"): personagem.carga_sobrecarga = True
    else: personagem.carga_sobrecarga = False
    personagem.carga_max = request.form['data.carga.max']
    personagem.carga_valor_s = request.form['data.carga.valor_s']
    personagem.carac_sort_INT = request.form['data.carac_sort.INT']
    personagem.carac_sort_AUR = request.form['data.carac_sort.AUR']
    personagem.carac_sort_CAR = request.form['data.carac_sort.CAR']
    personagem.carac_sort_FOR = request.form['data.carac_sort.FOR']
    personagem.carac_sort_FIS = request.form['data.carac_sort.FIS']
    personagem.carac_sort_AGI = request.form['data.carac_sort.AGI']
    personagem.carac_sort_PER = request.form['data.carac_sort.PER']
    personagem.carac_final_INT = request.form['data.carac_final.INT']
    personagem.mod_racial_INT = request.form['data.mod_racial.INT']
    personagem.mod_racial_AUR = request.form['data.mod_racial.AUR']
    personagem.mod_racial_CAR = request.form['data.mod_racial.CAR']
    personagem.mod_racial_FOR = request.form['data.mod_racial.FOR']
    personagem.mod_racial_FIS = request.form['data.mod_racial.FIS']
    personagem.mod_racial_AGI = request.form['data.mod_racial.AGI']
    personagem.mod_racial_PER = request.form['data.mod_racial.PER']
    personagem.hab_nata = request.form['data.hab_nata']
    personagem.items = request.form['data.items']
    try:
        db.session.commit()
        return redirect('/personagem_cp/%d' % id)
    except:
        return "Algo deu Errado!"

@app.route('/d10')
def d10():
    dado10 = randint(1,10)
    return jsonify(dado10)

@app.route('/d20')
def d20():
    dado20 = randint(1,20)
    return jsonify(dado20)

@app.route("/roll_carac")
def roll_carac():
    d1 = [randint(1,10),randint(1,10),randint(1,10)]
    d2 = [randint(1,10),randint(1,10),randint(1,10)]
    d3 = [randint(1,10),randint(1,10),randint(1,10)]
    d4 = [randint(1,10),randint(1,10),randint(1,10)]
    d5 = [randint(1,10),randint(1,10),randint(1,10)]
    d6 = [randint(1,10),randint(1,10),randint(1,10)]
    d7 = [randint(1,10),randint(1,10),randint(1,10)]
    d1.sort()
    d2.sort()
    d3.sort()
    d4.sort()
    d5.sort()
    d6.sort()
    d7.sort()
    roll = [
        d1,
        d2,
        d3,
        d4,
        d5,
        d6,
        d7
    ]
    return jsonify(roll)

from personagem import att_atributo

@app.route('/atrib_pers', methods=['POST'])
def atrib_pers():
    atributo = request.values['atrib']
    valor_sort = int(request.values['value'])
    mod_racial = int(request.values['mod_racial'])
    efeitos = request.values['efeitos']
    return jsonify(att_atributo(atributo, mod_racial, valor_sort, efeitos))

if __name__ == "__main__":
    #app.run(debug=True, host="0.0.0.0", port=5000)
    init_gui(app, width=1500, height=900, window_title="Ficha Tagmar", icon="static/assets/favicon.ico")