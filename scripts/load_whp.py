from location.models import Region, District, Commune
from WHP.models import CPF
import csv
from dhis2 import Api
import json


def run():
    CPF.objects.all().delete()

    with open('WHP/data/CPF_DIEGO.json') as f:
        data = json.load(f)
        for el in data:
            try:
                cpf = CPF(
                    region=Region.objects.get(code=21),
                    name=el['name'],
                    uid=el['id'],
                    parentid=el['parent']['id'],
                    hierarchylevel=el['level'],
                    phone=el['phone']
                )
                cpf.save()
            except:
                print("error diego loading")

    with open('WHP/data/CPF_TAMATAVE.json') as f:
        data = json.load(f)
        for el in data:
            try:
                cpf = CPF(
                    region=Region.objects.get(code=53),
                    name=el['name'],
                    uid=el['id'],
                    parentid=el['parent']['id'],
                    hierarchylevel=el['level'],
                    phone=el['phone']
                )
                cpf.save()
            except:
                print("error tamatave loading")

    with open('WHP/data/CPF_TANA.json') as f:
        data = json.load(f)
        for el in data:
            try:
                cpf = CPF(
                    region=Region.objects.get(code=11),
                    name=el['name'],
                    uid=el['id'],
                    parentid=el['parent']['id'],
                    hierarchylevel=el['level'],
                    phone=el['phone']
                )
                cpf.save()
            except:
                print("error tana loading")
