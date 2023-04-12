from django.urls import path

from . import views

urlpatterns = [
    path('companies/', views.companies),
    path('companies/<int:id>/', views.companies_id),

    path('vacancies/', views.vacancies),
    path('vacancies/<int:id>/', views.vacancies_id),
    path('vacancies/top_ten/', views.vacancies_top_ten),
]