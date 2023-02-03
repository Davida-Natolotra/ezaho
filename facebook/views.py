from . import handle_uploaded_file
from .forms import UploadFileForm
from django.shortcuts import render
from django.http import HttpResponseRedirect
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
import calendar
import csv
from datetime import datetime as dt, timedelta
from .models import FacebookReach, FacebookLikes, FacebookVisit
from .serializers import FacebookLikesFileSerializer, FileUploadSerializer
import pandas as pd
from datetime import datetime
# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def likes_VIH_two_months(request):
    dateMensuel = request.GET.get("month", None)
    year = request.GET.get("year", None)
    month = dateMensuel
    date_string = year+"/"+month
    today = dt.strptime(date_string, "%Y/%m")
    month_prev = str(int(month) - 1)
    date_string_prev = year+"/"+month_prev
    today_prev = dt.strptime(date_string_prev, "%Y/%m")
    data_current_month = {}
    data_prev_month = {}
    for i in range(31):
        daty_feno = today.date()-timedelta(today.date().day-1)+timedelta(i)
        try:
            data_current_month[daty_feno] = (
                FacebookLikes.objects.filter(date=daty_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_current_month[daty_feno] = 0

        daty_prev_feno = today_prev.date()-timedelta(today_prev.date().day-1)+timedelta(i)

        try:
            data_prev_month[daty_feno] = (
                FacebookLikes.objects.filter(date=daty_prev_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_prev_month[daty_feno] = 0
    return Response({'date_current': data_current_month.keys(), 'val_current': data_current_month.values(), 'val_prev': data_prev_month.values()})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def likes_VIH_two_months_PSI(request):
    month = request.GET.get("month", None)
    year = request.GET.get("year", None)
    date_string = year+"/"+month
    today = dt.strptime(date_string, "%Y/%m")
    month_prev = str(int(month) - 1)
    month_prev_prev = str(int(month) - 2)
    date_string_prev = year+"/"+month_prev
    date_string_prev_prev = year+"/"+month_prev_prev
    today_prev = dt.strptime(date_string_prev, "%Y/%m")
    today_prev_prev = dt.strptime(date_string_prev_prev, "%Y/%m")
    data_current_month = {}
    data_prev_month = {}

    for i in range(20, 32):
        daty_feno = today_prev.date()-timedelta(today_prev.date().day-1)+timedelta(i)
        try:
            data_current_month[daty_feno] = (
                FacebookLikes.objects.filter(date=daty_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_current_month[daty_feno] = 0

        daty_prev_feno = today_prev_prev.date()-timedelta(today_prev_prev.date().day-1) + \
            timedelta(i)

        try:
            data_prev_month[daty_feno] = (
                FacebookLikes.objects.filter(date=daty_prev_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_prev_month[daty_feno] = 0

    for i in range(1, 20):
        daty_feno = today.date()-timedelta(today.date().day-1)+timedelta(i)
        try:
            data_current_month[daty_feno] = (
                FacebookLikes.objects.filter(date=daty_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_current_month[daty_feno] = 0

        daty_prev_feno = today_prev.date()-timedelta(today_prev.date().day-1)+timedelta(i)

        try:
            data_prev_month[daty_feno] = (
                FacebookLikes.objects.filter(date=daty_prev_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_prev_month[daty_feno] = 0

    return Response({'date_current': data_current_month.keys(), 'val_current': data_current_month.values(), 'val_prev': data_prev_month.values()})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def reach_VIH_two_months(request):
    dateMensuel = request.GET.get("month", None)
    year = request.GET.get("year", None)
    month = dateMensuel
    date_string = year+"/"+month
    today = dt.strptime(date_string, "%Y/%m")
    data_current_month = {}
    month_prev = str(int(month) - 1)
    date_string_prev = year+"/"+month_prev
    today_prev = dt.strptime(date_string_prev, "%Y/%m")
    data_current_month = {}
    data_prev_month = {}
    for i in range(31):
        daty_feno = today.date()-timedelta(today.date().day-1)+timedelta(i)
        try:
            data_current_month[daty_feno] = (
                FacebookReach.objects.filter(date=daty_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_current_month[daty_feno] = 0

        daty_prev_feno = today_prev.date()-timedelta(today_prev.date().day-1)+timedelta(i)

        try:
            data_prev_month[daty_feno] = (
                FacebookReach.objects.filter(date=daty_prev_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_prev_month[daty_feno] = 0
    return Response({'date_current': data_current_month.keys(), 'val_current': data_current_month.values(), 'val_prev': data_prev_month.values()})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def reach_VIH_two_months_PSI(request):
    month = request.GET.get("month", None)
    year = request.GET.get("year", None)
    date_string = year+"/"+month
    today = dt.strptime(date_string, "%Y/%m")
    month_prev = str(int(month) - 1)
    month_prev_prev = str(int(month) - 2)
    date_string_prev = year+"/"+month_prev
    date_string_prev_prev = year+"/"+month_prev_prev
    today_prev = dt.strptime(date_string_prev, "%Y/%m")
    today_prev_prev = dt.strptime(date_string_prev_prev, "%Y/%m")
    data_current_month = {}
    data_prev_month = {}

    for i in range(20, 32):
        daty_feno = today_prev.date()-timedelta(today_prev.date().day-1)+timedelta(i)
        try:
            data_current_month[daty_feno] = (
                FacebookReach.objects.filter(date=daty_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_current_month[daty_feno] = 0

        daty_prev_feno = today_prev_prev.date()-timedelta(today_prev_prev.date().day-1) + \
            timedelta(i)

        try:
            data_prev_month[daty_feno] = (
                FacebookReach.objects.filter(date=daty_prev_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_prev_month[daty_feno] = 0

    for i in range(1, 20):
        daty_feno = today.date()-timedelta(today.date().day-1)+timedelta(i)
        try:
            data_current_month[daty_feno] = (
                FacebookReach.objects.filter(date=daty_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_current_month[daty_feno] = 0

        daty_prev_feno = today_prev.date()-timedelta(today_prev.date().day-1)+timedelta(i)

        try:
            data_prev_month[daty_feno] = (
                FacebookReach.objects.filter(date=daty_prev_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_prev_month[daty_feno] = 0
    return Response({'date_current': data_current_month.keys(), 'val_current': data_current_month.values(), 'val_prev': data_prev_month.values()})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def visit_VIH_two_months(request):
    dateMensuel = request.GET.get("month", None)
    year = request.GET.get("year", None)
    month = dateMensuel
    date_string = year+"/"+month
    today = dt.strptime(date_string, "%Y/%m")
    data_current_month = {}
    month_prev = str(int(month) - 1)
    date_string_prev = year+"/"+month_prev
    today_prev = dt.strptime(date_string_prev, "%Y/%m")
    data_current_month = {}
    data_prev_month = {}
    for i in range(31):
        daty_feno = today.date()-timedelta(today.date().day-1)+timedelta(i)
        try:
            data_current_month[daty_feno] = (
                FacebookVisit.objects.filter(date=daty_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_current_month[daty_feno] = 0

        daty_prev_feno = today_prev.date()-timedelta(today_prev.date().day-1)+timedelta(i)

        try:
            data_prev_month[daty_feno] = (
                FacebookVisit.objects.filter(date=daty_prev_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_prev_month[daty_feno] = 0
    return Response({'date_current': data_current_month.keys(), 'val_current': data_current_month.values(), 'val_prev': data_prev_month.values()})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def visit_VIH_two_months_PSI(request):
    month = request.GET.get("month", None)
    year = request.GET.get("year", None)
    date_string = year+"/"+month
    today = dt.strptime(date_string, "%Y/%m")
    month_prev = str(int(month) - 1)
    month_prev_prev = str(int(month) - 2)
    date_string_prev = year+"/"+month_prev
    date_string_prev_prev = year+"/"+month_prev_prev
    today_prev = dt.strptime(date_string_prev, "%Y/%m")
    today_prev_prev = dt.strptime(date_string_prev_prev, "%Y/%m")
    data_current_month = {}
    data_prev_month = {}

    for i in range(20, 32):
        daty_feno = today_prev.date()-timedelta(today_prev.date().day-1)+timedelta(i)
        try:
            data_current_month[daty_feno] = (
                FacebookVisit.objects.filter(date=daty_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_current_month[daty_feno] = 0

        daty_prev_feno = today_prev_prev.date()-timedelta(today_prev_prev.date().day-1) + \
            timedelta(i)

        try:
            data_prev_month[daty_feno] = (
                FacebookVisit.objects.filter(date=daty_prev_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_prev_month[daty_feno] = 0

    for i in range(1, 20):
        daty_feno = today.date()-timedelta(today.date().day-1)+timedelta(i)
        try:
            data_current_month[daty_feno] = (
                FacebookVisit.objects.filter(date=daty_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_current_month[daty_feno] = 0

        daty_prev_feno = today_prev.date()-timedelta(today_prev.date().day-1)+timedelta(i)

        try:
            data_prev_month[daty_feno] = (
                FacebookVisit.objects.filter(date=daty_prev_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_prev_month[daty_feno] = 0
    return Response({'date_current': data_current_month.keys(), 'val_current': data_current_month.values(), 'val_prev': data_prev_month.values()})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def likes_Ezaho_two_months(request):
    dateMensuel = request.GET.get("month", None)
    year = request.GET.get("year", None)
    month = dateMensuel
    date_string = year+"/"+month
    today = dt.strptime(date_string, "%Y/%m")
    data_current_month = {}
    month_prev = str(int(month) - 1)
    date_string_prev = year+"/"+month_prev
    today_prev = dt.strptime(date_string_prev, "%Y/%m")
    data_current_month = {}
    data_prev_month = {}
    for i in range(31):
        daty_feno = today.date()-timedelta(today.date().day-1)+timedelta(i)
        try:
            data_current_month[daty_feno] = (
                FacebookLikes.objects.filter(date=daty_feno).filter(programme='E-zaho').values()[0]['number'])
        except:
            data_current_month[daty_feno] = 0

        daty_prev_feno = today_prev.date()-timedelta(today_prev.date().day-1)+timedelta(i)

        try:
            data_prev_month[daty_feno] = (
                FacebookLikes.objects.filter(date=daty_prev_feno).filter(programme='E-zaho').values()[0]['number'])
        except:
            data_prev_month[daty_feno] = 0
    return Response({'date_current': data_current_month.keys(), 'val_current': data_current_month.values(), 'val_prev': data_prev_month.values()})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def likes_Ezaho_two_months_PSI(request):
    month = request.GET.get("month", None)
    year = request.GET.get("year", None)
    date_string = year+"/"+month
    today = dt.strptime(date_string, "%Y/%m")
    month_prev = str(int(month) - 1)
    month_prev_prev = str(int(month) - 2)
    date_string_prev = year+"/"+month_prev
    date_string_prev_prev = year+"/"+month_prev_prev
    today_prev = dt.strptime(date_string_prev, "%Y/%m")
    today_prev_prev = dt.strptime(date_string_prev_prev, "%Y/%m")
    data_current_month = {}
    data_prev_month = {}

    for i in range(20, 32):
        daty_feno = today_prev.date()-timedelta(today_prev.date().day-1)+timedelta(i)
        try:
            data_current_month[daty_feno] = (
                FacebookLikes.objects.filter(date=daty_feno).filter(programme='E-zaho').values()[0]['number'])
        except:
            data_current_month[daty_feno] = 0

        daty_prev_feno = today_prev_prev.date()-timedelta(today_prev_prev.date().day-1) + \
            timedelta(i)

        try:
            data_prev_month[daty_feno] = (
                FacebookLikes.objects.filter(date=daty_prev_feno).filter(programme='E-zaho').values()[0]['number'])
        except:
            data_prev_month[daty_feno] = 0

    for i in range(1, 20):
        daty_feno = today.date()-timedelta(today.date().day-1)+timedelta(i)
        try:
            data_current_month[daty_feno] = (
                FacebookLikes.objects.filter(date=daty_feno).filter(programme='E-zaho').values()[0]['number'])
        except:
            data_current_month[daty_feno] = 0

        daty_prev_feno = today_prev.date()-timedelta(today_prev.date().day-1)+timedelta(i)

        try:
            data_prev_month[daty_feno] = (
                FacebookLikes.objects.filter(date=daty_prev_feno).filter(programme='E-zaho').values()[0]['number'])
        except:
            data_prev_month[daty_feno] = 0
    return Response({'date_current': data_current_month.keys(), 'val_current': data_current_month.values(), 'val_prev': data_prev_month.values()})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def reach_Ezaho_two_months(request):
    dateMensuel = request.GET.get("month", None)
    year = request.GET.get("year", None)
    month = dateMensuel
    date_string = year+"/"+month
    today = dt.strptime(date_string, "%Y/%m")
    data_current_month = {}
    month_prev = str(int(month) - 1)
    date_string_prev = year+"/"+month_prev
    today_prev = dt.strptime(date_string_prev, "%Y/%m")
    data_current_month = {}
    data_prev_month = {}
    for i in range(31):
        daty_feno = today.date()-timedelta(today.date().day-1)+timedelta(i)
        try:
            data_current_month[daty_feno] = (
                FacebookReach.objects.filter(date=daty_feno).filter(programme='E-zaho').values()[0]['number'])
        except:
            data_current_month[daty_feno] = 0

        daty_prev_feno = today_prev.date()-timedelta(today_prev.date().day-1)+timedelta(i)

        try:
            data_prev_month[daty_feno] = (
                FacebookReach.objects.filter(date=daty_prev_feno).filter(programme='E-zaho').values()[0]['number'])
        except:
            data_prev_month[daty_feno] = 0
    return Response({'date_current': data_current_month.keys(), 'val_current': data_current_month.values(), 'val_prev': data_prev_month.values()})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def reach_Ezaho_two_months_PSI(request):
    month = request.GET.get("month", None)
    year = request.GET.get("year", None)
    date_string = year+"/"+month
    today = dt.strptime(date_string, "%Y/%m")
    month_prev = str(int(month) - 1)
    month_prev_prev = str(int(month) - 2)
    date_string_prev = year+"/"+month_prev
    date_string_prev_prev = year+"/"+month_prev_prev
    today_prev = dt.strptime(date_string_prev, "%Y/%m")
    today_prev_prev = dt.strptime(date_string_prev_prev, "%Y/%m")
    data_current_month = {}
    data_prev_month = {}

    for i in range(20, 32):
        daty_feno = today_prev.date()-timedelta(today_prev.date().day-1)+timedelta(i)
        try:
            data_current_month[daty_feno] = (
                FacebookReach.objects.filter(date=daty_feno).filter(programme='E-zaho').values()[0]['number'])
        except:
            data_current_month[daty_feno] = 0

        daty_prev_feno = today_prev_prev.date()-timedelta(today_prev_prev.date().day-1) + \
            timedelta(i)

        try:
            data_prev_month[daty_feno] = (
                FacebookReach.objects.filter(date=daty_prev_feno).filter(programme='E-zaho').values()[0]['number'])
        except:
            data_prev_month[daty_feno] = 0

    for i in range(1, 20):
        daty_feno = today.date()-timedelta(today.date().day-1)+timedelta(i)
        try:
            data_current_month[daty_feno] = (
                FacebookReach.objects.filter(date=daty_feno).filter(programme='E-zaho').values()[0]['number'])
        except:
            data_current_month[daty_feno] = 0

        daty_prev_feno = today_prev.date()-timedelta(today_prev.date().day-1)+timedelta(i)

        try:
            data_prev_month[daty_feno] = (
                FacebookReach.objects.filter(date=daty_prev_feno).filter(programme='E-zaho').values()[0]['number'])
        except:
            data_prev_month[daty_feno] = 0
    return Response({'date_current': data_current_month.keys(), 'val_current': data_current_month.values(), 'val_prev': data_prev_month.values()})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def visit_Ezaho_two_months(request):
    dateMensuel = request.GET.get("month", None)
    year = request.GET.get("year", None)
    month = dateMensuel
    date_string = year+"/"+month
    today = dt.strptime(date_string, "%Y/%m")
    data_current_month = {}
    month_prev = str(int(month) - 1)
    date_string_prev = year+"/"+month_prev
    today_prev = dt.strptime(date_string_prev, "%Y/%m")
    data_prev_month = {}
    for i in range(31):
        daty_feno = today.date()-timedelta(today.date().day-1)+timedelta(i)
        try:
            data_current_month[daty_feno] = (
                FacebookVisit.objects.filter(date=daty_feno).filter(programme='E-zaho').values()[0]['number'])
        except:
            data_current_month[daty_feno] = 0

        daty_prev_feno = today_prev.date()-timedelta(today_prev.date().day-1)+timedelta(i)

        try:
            data_prev_month[daty_feno] = (
                FacebookVisit.objects.filter(date=daty_prev_feno).filter(programme='E-zaho').values()[0]['number'])
        except:
            data_prev_month[daty_feno] = 0
    return Response({'date_current': data_current_month.keys(), 'val_current': data_current_month.values(), 'val_prev': data_prev_month.values()})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def visit_Ezaho_two_months_PSI(request):
    month = request.GET.get("month", None)
    year = request.GET.get("year", None)
    date_string = year+"/"+month
    today = dt.strptime(date_string, "%Y/%m")
    month_prev = str(int(month) - 1)
    month_prev_prev = str(int(month) - 2)
    date_string_prev = year+"/"+month_prev
    date_string_prev_prev = year+"/"+month_prev_prev
    today_prev = dt.strptime(date_string_prev, "%Y/%m")
    today_prev_prev = dt.strptime(date_string_prev_prev, "%Y/%m")
    data_current_month = {}
    data_prev_month = {}

    for i in range(20, 32):
        daty_feno = today_prev.date()-timedelta(today_prev.date().day-1)+timedelta(i)
        try:
            data_current_month[daty_feno] = (
                FacebookVisit.objects.filter(date=daty_feno).filter(programme='E-zaho').values()[0]['number'])
        except:
            data_current_month[daty_feno] = 0

        daty_prev_feno = today_prev_prev.date()-timedelta(today_prev_prev.date().day-1) + \
            timedelta(i)

        try:
            data_prev_month[daty_feno] = (
                FacebookVisit.objects.filter(date=daty_prev_feno).filter(programme='E-zaho').values()[0]['number'])
        except:
            data_prev_month[daty_feno] = 0

    for i in range(1, 20):
        daty_feno = today.date()-timedelta(today.date().day-1)+timedelta(i)
        try:
            data_current_month[daty_feno] = (
                FacebookVisit.objects.filter(date=daty_feno).filter(programme='E-zaho').values()[0]['number'])
        except:
            data_current_month[daty_feno] = 0

        daty_prev_feno = today_prev.date()-timedelta(today_prev.date().day-1)+timedelta(i)

        try:
            data_prev_month[daty_feno] = (
                FacebookVisit.objects.filter(date=daty_prev_feno).filter(programme='E-zaho').values()[0]['number'])
        except:
            data_prev_month[daty_feno] = 0
    return Response({'date_current': data_current_month.keys(), 'val_current': data_current_month.values(), 'val_prev': data_prev_month.values()})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def reach_compare_all(request):
    month = request.GET.get("month", None)
    year = request.GET.get("year", None)
    date_string = year+"/"+month
    today = dt.strptime(date_string, "%Y/%m")
    month_prev = str(int(month) - 1)
    date_string_prev = year+"/"+month_prev
    today_prev = dt.strptime(date_string_prev, "%Y/%m")
    data_current_month_VIH = {}
    data_current_month_WHP = {}
    data_current_month_PF = {}
    data_current_month_PALU = {}

    for i in range(20, 32):
        daty_feno = today_prev.date()-timedelta(today_prev.date().day-1)+timedelta(i)
        try:
            data_current_month_VIH[daty_feno] = (
                FacebookReach.objects.filter(date=daty_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_current_month_VIH[daty_feno] = 0
        try:     
            data_current_month_WHP[daty_feno] = (
                FacebookReach.objects.filter(date=daty_feno).filter(programme='WHP').values()[0]['number'])
        except:
            data_current_month_WHP[daty_feno] = 0
        try:
            data_current_month_PF[daty_feno] = (
                FacebookReach.objects.filter(date=daty_feno).filter(programme='PF').values()[0]['number'])
        except:
            data_current_month_PF[daty_feno] = 0
        try:
            data_current_month_PALU[daty_feno] = (
                FacebookReach.objects.filter(date=daty_feno).filter(programme='PALU').values()[0]['number'])
        except:
            data_current_month_PALU[daty_feno] = 0

    for i in range(1, 20):
        daty_feno = today.date()-timedelta(today.date().day-1)+timedelta(i)
        try:
            data_current_month_VIH[daty_feno] = (
                FacebookReach.objects.filter(date=daty_feno).filter(programme='VIH').values()[0]['number'])
        except:
            data_current_month_VIH[daty_feno] = 0
        try:
            data_current_month_WHP[daty_feno] = (
                FacebookReach.objects.filter(date=daty_feno).filter(programme='WHP').values()[0]['number'])
        except:
            data_current_month_WHP[daty_feno] = 0
        try:
            data_current_month_PF[daty_feno] = (
                FacebookReach.objects.filter(date=daty_feno).filter(programme='PF').values()[0]['number'])
        except:
            data_current_month_PF[daty_feno] = 0
        try:
            data_current_month_PALU[daty_feno] = (
                FacebookReach.objects.filter(date=daty_feno).filter(programme='PALU').values()[0]['number'])
        except:
            data_current_month_PALU[daty_feno] = 0
    return Response({'date_current': data_current_month_VIH.keys(), 'val_current_VIH': data_current_month_VIH.values(), 'val_current_WHP': data_current_month_WHP.values(), 'val_current_PF': data_current_month_PF.values(), 'val_current_PALU': data_current_month_PALU.values()})


# Imaginary function to handle an uploaded file.


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def upload_file(request):
    form = UploadFileForm(request.POST, request.FILES)
    model = request.POST.get("model", None)
    programme = request.POST.get("programme", None)
    data = request.data
    print("Uploading", data)
    with data['file'] as file:
        reader = csv.reader(file)
        next(reader)
        for row in reader:
            print(row)
    if form.is_valid():
        handle_uploaded_file(request.FILES['file'], model, programme)
        return Response(status=200)
    return Response(status=200)


def hello(request):
    return render(request, 'facebook/upload.html')


class UploadFileView(generics.CreateAPIView):
    serializer_class = FileUploadSerializer

    def post(self, request, programme, type, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        file = serializer.validated_data['file']
        reader = pd.read_csv(file)
        if type == "likes":
            FacebookLikes.objects.filter(programme=programme).delete()
        elif type == "reach":
            FacebookReach.objects.filter(programme=programme).delete()
        elif type == "visit":
            FacebookVisit.objects.filter(programme=programme).delete()

        for _, row in reader.iterrows():
            print(row[0])
            if type == "likes":
                fblikes = FacebookLikes(
                    date=datetime.strptime(row[0], '%Y-%m-%dT%H:%M:%S'),
                    number=row[1],
                    programme=programme
                )
                fblikes.save()

            elif type == 'reach':
                fbreach = FacebookReach(
                    date=datetime.strptime(row[0], '%Y-%m-%dT%H:%M:%S'),
                    number=row[1],
                    programme=programme
                )
                fbreach.save()
            elif type == 'visit':
                fbvisit = FacebookVisit(
                    date=datetime.strptime(row[0], '%Y-%m-%dT%H:%M:%S'),
                    number=row[1],
                    programme=programme
                )
                fbvisit.save()
        return Response({"status": "success"})
