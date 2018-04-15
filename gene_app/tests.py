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
        self.new_gene2 = Gene(gene="ABCD", alias="a", last_evaluated="2004-03-24", last_updated="2004-03-24", nucleotide_change="d", protein_change="e", region="f", reported_classification="g", source="h", url="i")
        self.new_gene.save()
        self.new_gene2.save()

    def test_gene_list(self):
        result = self.client.get('/api')

        # no real reason to compare direct to string
        self.assertEqual(result.content, b'{"genes": [{"gene": "ABC"}, {"gene": "ABCD"}]}')

        # better to use .json()
        # json = result.json()
        # self.assertEqual(json.keys(), ["genes"])
        self.assertEqual(result.json(), {"genes": [{"gene": "ABC"}, {"gene": "ABCD"}]})

    def test_gene_empty_fields(self):
        result = self.client.get('/api/abc')

        expectation = {"variants": [{
            "gene": "ABC",
            "alias": None,
            "last_evaluated": None,
            "last_updated": None,
            "nucleotide_change": None,
            "protein_change": None,
            "region": None,
            "reported_classification": None,
            "source": None,
            "url": ""
        }]}

        self.assertEqual(result.json(), expectation)

    def test_gene_with_fields(self):
        result = self.client.get('/api/abcd')

        expectation2 = {"variants": [{
            "gene": "ABCD",
            "alias": "a",
            "last_evaluated": "2004-03-24",
            "last_updated": "2004-03-24",
            "nucleotide_change": "d",
            "protein_change": "e",
            "region": "f",
            "reported_classification": "g",
            "source": "h",
            "url": "i"
        }]}

        self.assertEqual(result.json(), expectation2)

