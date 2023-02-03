import csv
from datetime import datetime


def handle_uploaded_file(f, model, programme):
    for chunk in f.chunks():
        reader = csv.reader(chunk)
        for row in reader:
            print('row:', row)

            fb = model(
                date=datetime.strptime(row[0], '%Y-%m-%dT%H:%M:%S'),
                number=row[1],
                programme=programme
            )
            fb.save()
