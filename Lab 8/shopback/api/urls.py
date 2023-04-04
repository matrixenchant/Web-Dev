from django.urls import path

from . import views

urlpatterns = [
    path('products/', views.products, name='products'),
    path('products/<int:id>/', views.productsItem, name='products-item'),

    path('categories/', views.categories, name='categories'),
    path('categories/<int:id>/', views.categoriesItem, name='categories-item'),
    path('categories/<int:id>/products', views.categoriesItemWithProducts, name='categories-item-with-products'),
]