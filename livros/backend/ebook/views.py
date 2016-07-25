from rest_framework import viewsets
from ebook.models import Livro, Ebook, Autor
from ebook.serializers import LivroSerializer, EbookSerializer, AutorSerializer


class LivroViewSet(viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Livro objects """
    queryset = Livro.objects.all()
    serializer_class = LivroSerializer


class EbookViewSet(viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Ebook objects """
    queryset = Ebook.objects.all()
    serializer_class = EbookSerializer


class AutorViewSet(viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Ebook objects """
    queryset = Autor.objects.all()
    serializer_class = AutorSerializer
