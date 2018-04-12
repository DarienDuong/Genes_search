from rest_framework import serializers

from gene_app.models import Gene 

class GeneSerializer(serializers.ModelSerializer):
	class Meta:
		model = Gene
		fields = ["gene"]

class GeneSearchSerializer(serializers.ModelSerializer):
	class Meta:
		model = Gene
		fields = ["gene"]