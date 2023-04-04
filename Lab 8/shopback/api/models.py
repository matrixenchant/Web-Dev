from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self) -> str:
        return f'Category {self.name}'

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    is_active = models.BooleanField()

    def __str__(self) -> str:
        return f'Product {self.name}'

    class Meta:
        ordering = ['-price']
