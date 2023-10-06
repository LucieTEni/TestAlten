from django.urls import path
from django.views.generic.base import RedirectView
from products.views import products, product_details

from . import views

urlpatterns = [
    path('', RedirectView.as_view(url='products')),
    path('products', views.products, name='products'),
    path('<int:id>', views.product_details, name='product_details')
]