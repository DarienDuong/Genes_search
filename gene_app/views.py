from gene_app.models import Gene
from django.http import JsonResponse
from gene_app.serializers import GeneSerializer, GeneSearchSerializer
from django.db.models import Count

from django.http import HttpResponse

# Create your views here.
def home(request):
	# genes = Gene.objects.values('gene').annotate(number_genes=Count('gene'))
	# print(genes)
	query = Gene.objects.values('gene').annotate(number_genes=Count('gene')).order_by('gene')
	genes = GeneSerializer(query, many = True).data
	return JsonResponse({"genes": genes})

def gene_search(request, name):
	# consider using __iexact
	search_query = Gene.objects.values('gene').filter(gene__icontains=name).order_by('gene')
	variants = GeneSearchSerializer(search_query, many=True).data
	return JsonResponse({"variants": variants})