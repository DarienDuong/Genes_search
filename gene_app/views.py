from django.shortcuts import render
from gene_app.models import Gene
# Response can delete if not using
from django.http import HttpResponse

# Create your views here.
def home(request):
	return HttpResponse('Hello World!')