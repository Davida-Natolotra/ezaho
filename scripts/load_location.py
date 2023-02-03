from location.models import Region
import csv


def run():
    with open('location/data/organisation-unit-niveau-2.csv') as file:
        reader = csv.reader(file)
        next(reader)

        Region.objects.all().delete()

        for row in reader:
            print(row)

            region = Region(
                organisationunitid=row[0],
                uid=row[1],
                code=row[2],
                created=row[3],
                lastupdated=row[4],
                name=row[5],
                shortname=row[6],
                parentid=row[7],
                description=row[8],
                openingdate=row[9],
                closeddate=row[10],
                comment=row[11],
                featuretype=row[12],
                coordinates=row[13],
                url=row[14],
                contactperson=row[15],
                address=row[16],
                email=row[17],
                phonenumber=row[18],
                userid=row[19],
                path=row[20],
                hierarchylevel=row[21],
                lastupdatedby=row[22],

            )
            region.save()
