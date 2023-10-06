from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from products.models import Product

# Create your views here.
def products(offset = 0, length = 10):
    response = Product.getProducts(offset, length)
    return JsonResponse({'products': response})

def product_details(id):
    return HttpResponse('')