from datetime import datetime
import csv
from facebook.models import FacebookLikes, FacebookVisit, FacebookReach


def run():
    with open('facebook/data/WHP/Facebook New Likes WHP.csv') as file:
        reader = csv.reader(file)
        next(reader)

        for row in reader:
            print(row)

            fblikes = FacebookLikes(
                date=datetime.strptime(row[0], '%Y-%m-%dT%H:%M:%S'),
                number=row[1],
                programme='WHP'

            )
            fblikes.save()

    # Visit
    with open('facebook/data/WHP/Facebook Visite WHP.csv') as file:
        reader = csv.reader(file)
        next(reader)

        for row in reader:
            print(row)

            fbVisit = FacebookVisit(
                date=datetime.strptime(row[0], '%Y-%m-%dT%H:%M:%S'),
                number=row[1],
                programme='WHP'
            )
            fbVisit.save()

    # Couverture
    with open('facebook/data/WHP/Facebook reach WHP.csv') as file:
        reader = csv.reader(file)
        next(reader)

        for row in reader:
            print(row)

            fbCouv = FacebookReach(
                date=datetime.strptime(row[0], '%Y-%m-%dT%H:%M:%S'),
                number=row[1],
                programme='WHP'
            )
            fbCouv.save()
