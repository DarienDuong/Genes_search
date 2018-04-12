from django.db import models

# python manage.py makemigrations

# Create your models here.
class Gene(models.Model):
	gene = models.CharField(max_length = 265, null=True)
	nucleotide_change = models.CharField(max_length = 265, null=True)
	protein_change = models.CharField(max_length = 265, null=True)
	other_mappings = models.CharField(max_length = 1500, null=True)
	alias = models.CharField(max_length = 265, null=True)
	transcripts = models.CharField(max_length = 1500, null=True)
	region = models.CharField(max_length = 265, null=True)
	reported_classification = models.CharField(max_length = 265, null=True)
	inferred_classification = models.CharField(max_length = 265, null=True)
	source = models.CharField(max_length = 265, null=True)
	last_evaluated = models.DateField(null=True)
	last_updated = models.DateField(null=True)
	url = models.URLField()
	submitter_comment = models.TextField(null=True)
	assembly = models.CharField(max_length = 265, null=True)
	char = models.CharField(max_length = 265, null=True)
	genomic_start = models.CharField(max_length = 265, null=True)
	genomic_stop = models.CharField(max_length = 265, null=True)
	ref = models.CharField(max_length = 265, null=True)
	alt = models.CharField(max_length = 265, null=True)
	accession = models.CharField(max_length = 265, null=True)
	reported_ref = models.CharField(max_length = 265, null=True)
	reported_alt = models.CharField(max_length = 265, null=True)

	def __str__(self):
		return self.gene
