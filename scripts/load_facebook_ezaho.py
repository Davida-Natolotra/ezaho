from datetime import datetime
import csv
from facebook.models import FacebookLikes, FacebookVisit, FacebookReach


def run():
    with open('facebook/data/Ezaho/Facebook - Likes - Juillet - Septembre.csv') as file:
        reader = csv.reader(file)
        next(reader)

        for row in reader:
            print(row)

            fblikes = FacebookLikes(
                date=datetime.strptime(row[0], '%Y-%m-%dT%H:%M:%S'),
                number=row[1],
                programme='E-zaho'
            )
            fblikes.save()

    # Visit
    with open('facebook/data/Ezaho/Facebook visite - Juillet - Septembre.csv') as file:
        reader = csv.reader(file)
        next(reader)

        for row in reader:
            print(row)

            fbVisit = FacebookVisit(
                date=datetime.strptime(row[0], '%Y-%m-%dT%H:%M:%S'),
                number=row[1],
                programme='E-zaho'
            )
            fbVisit.save()

    # Couverture
    with open('facebook/data/Ezaho/Facebook reach - Juillet - Septembre.csv') as file:
        reader = csv.reader(file)
        next(reader)

        for row in reader:
            print(row)

            fbCouv = FacebookReach(
                date=datetime.strptime(row[0], '%Y-%m-%dT%H:%M:%S'),
                number=row[1],
                programme='E-zaho'
            )
            fbCouv.save()
