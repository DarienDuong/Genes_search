from django.db import models

# Create your models here.
class Gene(models.Model):
	gene = models.CharField(max_length = 265 )
	url = models.URLField()
	last_evaluated = models.DateField()


	def __str__(self):
		return self.gene