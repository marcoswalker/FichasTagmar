import json

def att_atributo(atributo, mod_racial, valor_sort, efeitos):
    valores = [0,-2,-2,-2,-1,-1,-1,-1,-1,0,0,0,0,1,1,1,2,2,3,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    carac_final = valor_sort + mod_racial
    somaAtrib = valores[carac_final]
    pers_items = json.loads(efeitos)
    for item in pers_items:
        if item['type'] == "Efeito":
            if item['data']['atributo'] == atributo and item['data']['ativo']:
                if item['data']['tipo'] == "+":
                    somaAtrib += item['data']['valor']
                elif item['data']['tipo'] == "-":
                    somaAtrib -= item['data']['valor']
                elif item['data']['tipo'] == "*":
                    somaAtrib = somaAtrib * item['data']['valor']
                elif item['data']['tipo'] == "/":
                    somaAtrib = somaAtrib / item['data']['valor']
    return {"carac_final": carac_final, "somaAtrib": somaAtrib}    