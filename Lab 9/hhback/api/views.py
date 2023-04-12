from django.core import serializers
from django.forms.models import model_to_dict
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404

from api.models import Company, Vacancy

def companies(req):
    data = Company.objects.all()
    companies = []
    for row in list(data):
        companies.append({
            'id': row.id,
            'name': row.name,
            'description': row.description,
            'city': row.city,
        })
    return JsonResponse(companies, safe=False)


def companies_id(req, id):
    data = get_object_or_404(Company, id=id)
    company = {
            'id': data.id,
            'name': data.name,
            'description': data.description,
            'city': data.city,
        }
    return JsonResponse(company)



def vacancies(req):
    data = Vacancy.objects.all()
    vacancies = []
    for row in list(data):
        vacancies.append({
            'id': row.id,
            'name': row.name,
            'description': row.description,
            'salary': row.salary,
            'company': row.company.name,
        })
    return JsonResponse(vacancies, safe=False)


def vacancies_id(req, id):
    data = get_object_or_404(Vacancy, id=id)
    vacancy = {
            'id': data.id,
            'name': data.name,
            'description': data.description,
            'salary': data.salary,
            'company': data.company.name,
        }
    return JsonResponse(vacancy)

def vacancies_top_ten(req):
    data = Vacancy.objects.order_by('-salary')[:10]
    vacancies = []
    for row in list(data):
        vacancies.append({
            'id': row.id,
            'name': row.name,
            'description': row.description,
            'salary': row.salary,
            'company': row.company.name,
        })

    return JsonResponse(vacancies, safe=False)

