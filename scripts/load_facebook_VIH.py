from datetime import datetime
import csv
from facebook.models import FacebookLikes, FacebookVisit, FacebookReach


def run():
    with open('facebook/data/VIH/Ezaho-VIH - Nouvelles mentions Jaime de la Page Facebook.csv') as file:
        reader = csv.reader(file)
        next(reader)

        for row in reader:
            print(row)

            fblikes = FacebookLikes(
                date=datetime.strptime(row[0], '%Y-%m-%dT%H:%M:%S'),
                number=row[1],
                programme='VIH'

            )
            fblikes.save()

    # Visit
    with open('facebook/data/VIH/Ezaho-VIH - Visites sur la Page Facebook.csv') as file:
        reader = csv.reader(file)
        next(reader)

        for row in reader:
            print(row)

            fbVisit = FacebookVisit(
                date=datetime.strptime(row[0], '%Y-%m-%dT%H:%M:%S'),
                number=row[1],
                programme='VIH'
            )
            fbVisit.save()

    # Couverture
    with open('facebook/data/VIH/Ezaho-VIH - Couverture de la Page Facebook.csv') as file:
        reader = csv.reader(file)
        next(reader)

        for row in reader:
            print(row)

            fbCouv = FacebookReach(
                date=datetime.strptime(row[0], '%Y-%m-%dT%H:%M:%S'),
                number=row[1],
                programme='VIH'
            )
            fbCouv.save()
