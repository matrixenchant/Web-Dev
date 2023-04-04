from django.core import serializers
from django.forms.models import model_to_dict
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404

from api.models import Category, Product


def render_products(products, category = None):
    html = '<h1>Products</h1>'

    if (category): html += f'<h3><i>{category.name}</i></h3>'

    for product in list(products):
        html += f'''
        <ul style="margin: 10px 0;">
            {render_product(product)}
        </ul>''' 

    return html

def render_product(product):
    return f'''
        <ul style="margin: 10px 0;">
            <a href="/api/products/{product.pk}"><h4>{product.name} [{product.pk}]</h4></a>
            <li><em>Category:</em> {product.category.name}</li>
            <li><em>Price:</em> {product.price}</li>
            <li><em>Description:</em> {product.description}</li>
            <li><em>Count:</em> {product.count}</li>
            <li><em>IsActive:</em> {product.is_active}</li>
        </ul>'''

def render_categories(categories):
    html = '<h1>Categories</h1>'

    for cat in list(categories):
        html += f'''
        <ul style="margin: 10px 0;">
            <a href="./{cat.id}"><h4>{cat.name}</h4></a>
        </ul>''' 

    return html

def render_category(cat):
    return f'''
        <ul style="margin: 10px 0;">
            <a href="/api/categories/{cat.id}/products"><h4>{cat.name} Products</h4></a>
        </ul>'''

# Create your views here.
def products(req):
    products = Product.objects.all()
    return HttpResponse(render_products(products))


def productsItem(req, id):
    product = get_object_or_404(Product, id=id)
    return HttpResponse(render_product(product))


def categories(req):
    categories = Category.objects.all()
    return HttpResponse(render_categories(categories))

def categoriesItem(req, id):
    category = get_object_or_404(Category, id=id)
    return HttpResponse(render_category(category))

def categoriesItemWithProducts(req, id):
    category = get_object_or_404(Category, id=id)
    products = Product.objects.filter(category__id = id)
    return HttpResponse(render_products(products, category))