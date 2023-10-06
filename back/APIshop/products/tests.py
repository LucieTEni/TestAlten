from django.test import TestCase
from products.models import Product

# Create your tests here.
class ProductTest(TestCase):
    def setUp(self) -> None:
        return super().setUp()
    
    def test_can_get_products(self):
        products = Product.getProducts(0, 10)
        self.assertNotEqual(31, len(products))