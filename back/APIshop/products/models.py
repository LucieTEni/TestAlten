from django.db import models
import json

# Create your models here.

class Product(models.Model):
    
    id = models.Field(primary_key=True)
    name = models.CharField(max_length=30)
    code = models.CharField(max_length=30, unique=True)
    description = models.CharField(max_length=600)
    
    def getProducts(offset: int, length: int):
        json_data = open('products/static/products.json')
        dataload = json.load(json_data)
        json_data.close()
        for key, value in dataload.items():
            products = value
        return products