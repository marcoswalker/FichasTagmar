import json
from folders import pastas

class Items ():
    def __init__(self, items):
        self.items = items
        self.combates = []
        self.magias = []
        self.tecnicas = []
        self.habilidades = []
        self.defesas = []
        self.transportes = []
        self.pertences = []
        self.profissoes = []
        self.racas = []
        self.efeitos = []

        self.magias_folders = []
        self.defesas_folders = []
        self.tecnicas_folders = []
        self.pertences_folders = []


        self.separaItems()
        self.magiasFolder()
        self.defesasFolders()
        self.tecnicasFolders()
        self.pertencesFolder()
        #print(self.defesas)
        #print(len(self.defesas_folders))
        #print(self.magias_folders)

    def tecnicasFolders(self):
        folders = []
        master_folders = []
        pastas_princ = []
        for tecnica in self.tecnicas:
            if tecnica['folder'] not in folders:
                folders.append(tecnica['folder'])
        for folder in folders:
            for pasta in pastas:
                if folder == pasta.get('id'):
                    #print(pasta.get('name'))
                    #print(pasta.get('parent_name'))
                    #print("-----")
                    if 'parent_name' in pasta:
                        if not pasta['parent_name'] in pastas_princ:
                            pastas_princ.append(pasta['parent_name'])
                        #print(pasta['parent_name'])
                    master_folders.append(pasta)
        #print(pastas_princ)
        self.tecnicas_folders = sorted(master_folders, key=lambda k: k['name'])

    def defesasFolders(self):
        folders = []
        master_folders = []
        pastas_princ = []
        for defesa in self.defesas:
            if defesa['folder'] not in folders:
                folders.append(defesa['folder'])
        for folder in folders:
            for pasta in pastas:
                if folder == pasta.get('id'):
                    #print(pasta.get('name'))
                    #print(pasta.get('parent_name'))
                    #print("-----")
                    if 'parent_name' in pasta:
                        if not pasta['parent_name'] in pastas_princ:
                            pastas_princ.append(pasta['parent_name'])
                        #print(pasta['parent_name'])
                    master_folders.append(pasta)
        #print(pastas_princ)
        self.defesas_folders = sorted(master_folders, key=lambda k: k['name'])

    def pertencesFolder(self):
        folders = []
        master_folders = []
        pastas_princ = []
        for pertence in self.pertences:
            if pertence['folder'] not in folders:
                folders.append(pertence['folder'])
        for folder in folders:
            for pasta in pastas:
                if folder == pasta.get('id'):
                    #print(pasta.get('name'))
                    #print(pasta.get('parent_name'))
                    #print("-----")
                    if 'parent_name' in pasta:
                        if not pasta['parent_name'] in pastas_princ:
                            pastas_princ.append(pasta['parent_name'])
                        #print(pasta['parent_name'])
                    master_folders.append(pasta)
        #print(pastas_princ)
        self.pertences_folders = sorted(master_folders, key=lambda k: k['name'])

    def magiasFolder(self):
        folders = []
        master_folders = []
        pastas_princ = []
        for magia in self.magias:
            if magia['folder'] not in folders:
                folders.append(magia['folder'])
        for folder in folders:
            for pasta in pastas:
                if folder == pasta.get('id'):
                    #print(pasta.get('name'))
                    #print(pasta.get('parent_name'))
                    #print("-----")
                    if 'parent_name' in pasta:
                        if not pasta['parent_name'] in pastas_princ:
                            pastas_princ.append(pasta['parent_name'])
                        #print(pasta['parent_name'])
                    master_folders.append(pasta)
        #print(pastas_princ)
        self.magias_folders = sorted(master_folders, key=lambda k: k['name'])

    def separaItems(self):
        for item in self.items:
            if item['type'] == "Combate":
                self.combates.append(item)
            elif item['type'] == "Magia":
                self.magias.append(item)
            elif item['type'] == "TecnicasCombate":
                self.tecnicas.append(item)
            elif item['type'] == "Habilidade":
                self.habilidades.append(item)
            elif item['type'] == "Defesa":
                self.defesas.append(item)
            elif item['type'] == "Transporte":
                self.transportes.append(item)
            elif item['type'] == "Pertence": 
                self.pertences.append(item)
            elif item['type'] == "Profissao":
                self.profissoes.append(item)
            elif item['type'] == "Raca":
                self.racas.append(item)
            elif item['type'] == "Efeito":
                self.efeitos.append(item)
        self.combates = sorted(self.combates, key=lambda k: k['name'])
        self.habilidades = sorted(self.habilidades, key=lambda k: k['name'])
        self.racas = sorted(self.racas, key=lambda k: k['name'])
        self.profissoes = sorted(self.profissoes, key=lambda k: k['name'])
        self.defesas = sorted(self.defesas, key=lambda k: k['name'])
        self.magias = sorted(self.magias, key=lambda k: k['name'])
        self.tecnicas = sorted(self.tecnicas, key=lambda k: k['name'])
        self.pertences = sorted(self.pertences, key=lambda k: k['name'])
        self.transportes = sorted(self.transportes, key=lambda k: k['name'])
        self.efeitos = sorted(self.efeitos, key=lambda k: k['name'])
        #self.tecnicas = sorted(self.tecnicas, key=lambda k: k['data']['categoria'])
        #self.defesas = sorted(self.defesas, key=lambda k: k['data']['defesa_base']['tipo'])

items = []

arquivo = open('items.db', encoding='utf8')
while arquivo:
    line = arquivo.readline()
    try:
        items.append(json.loads(line))
    except:
        print(line)
    if (line == ""):
        break

items_master = Items(items)

