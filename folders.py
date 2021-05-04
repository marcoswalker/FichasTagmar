import json


arquivo = open('folders.db', encoding='utf8')
folders = []

while arquivo:
    line = arquivo.readline()
    try:
        folders.append(json.loads(line))
    except:
        print(line)
    if (line == ""):
        break
pastas = []
#print(folders[1])
for folder in folders:
    pastas.append({
        "name": folder['name'],
        "id": folder['_id'],
        "parent": folder['parent']
    })

parents = []
for folder in folders:
    for pasta in pastas:
        if pasta['parent'] == folder['_id']:
            parents.append({
                'name': folder['name'],
                'id': folder['_id']
            })
set_of_jsons = {json.dumps(d, sort_keys=True) for d in parents}
master_parents = [json.loads(t) for t in set_of_jsons]
for pasta in pastas:
    for parent in master_parents:
        if pasta['parent'] == parent['id']:
            pasta['parent_name'] = parent['name']
#print(master_parents)
#print(pastas)