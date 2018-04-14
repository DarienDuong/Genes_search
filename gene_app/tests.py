# python manage.py test

from django.test import TestCase

from .models import Gene

class GeneModelTestCase(TestCase):

    def test_basic_model(self):
        gene = Gene(gene="ABC")
        self.assertEqual(str(gene), "ABC")

class GeneAPITestCase(TestCase):

    def setUp(self):
        self.new_gene = Gene(gene="ABC")
        self.new_gene.save()

    def test_gene_list(self):
        result = self.client.get('/api')

        # no real reason to compare direct to string
        self.assertEqual(result.content, b'{"genes": [{"gene": "ABC"}]}')

        # better to use .json()
        # json = result.json()
        # self.assertEqual(json.keys(), ["genes"])
        self.assertEqual(result.json(), {"genes": [{"gene": "ABC"}]})

