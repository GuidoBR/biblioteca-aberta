from rest_framework import authentication, viewsets
from livros.ebook.models import Livro, Ebook, Autor, Idioma
from livros.ebook.serializers import (LivroSerializer,
                                      EbookSerializer,
                                      AutorSerializer,
                                      IdiomaSerializer)


class DefaultsMixin(object):
    """ Configurações default para autenticação, permissões, filtragem e
    paginação da view"""
    authenticaton_classes = (
        authentication.BasicAuthentication,
        authentication.TokenAuthentication,
    )

    # permission_classes = (
    #    permissions.IsAuthenticated,
    # )

    paginate_by = 25
    paginate_by_param = 'page_size'
    max_paginate_by = 100


class LivroViewSet(DefaultsMixin, viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Livro objects """
    queryset = Livro.objects.all()
    serializer_class = LivroSerializer


class EbookViewSet(DefaultsMixin, viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Ebook objects """
    queryset = Ebook.objects.all()
    serializer_class = EbookSerializer


class AutorViewSet(DefaultsMixin, viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Ebook objects """
    queryset = Autor.objects.all()
    serializer_class = AutorSerializer


class IdiomaViewSet(DefaultsMixin, viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Ebook objects """
    queryset = Idioma.objects.all()
    serializer_class = IdiomaSerializer
