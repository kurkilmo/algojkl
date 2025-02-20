from rest_framework import viewsets
from .models import PageContent
from .serializers import PageContentSerializer

class PageContentViewSet(viewsets.ModelViewSet):
    queryset = PageContent.objects.all()
    serializer_class = PageContentSerializer
