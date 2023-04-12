from django.db import models


class Company(models.Model):
    CITIES = [
        ('almaty', 'Алматы'),
        ('shymkent', 'Шымкент'),
        ('aktobe', 'Актобе'),
        ('astana', 'Астана'),
    ]

    name = models.CharField(max_length=200)
    description = models.TextField()
    city = models.CharField(max_length=100, choices=CITIES)
    address = models.CharField(max_length=100)

    def __str__(self) -> str:
        return f'Company {self.name}'


class Vacancy(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f'Vacancy {self.pk}'
