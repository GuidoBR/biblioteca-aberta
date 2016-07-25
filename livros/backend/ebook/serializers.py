from rest_framework import serializers
from ebook.models import Livro, Ebook, Autor, Idioma


class LivroSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Livro model """
    class Meta:
        model = Livro
        fields = ('name', 'isbn', 'description', 'publication_date')


class EbookSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Ebook model """
    class Meta:
        model = Ebook
        fields = ('book', 'name', 'file_format', 'file_size',
                  'base_url', 'url', 'image_url')


class AutorSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Autor model """
    class Meta:
        model = Autor
        fields = ('name')


class IdiomaSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Idioma model """
    class Meta:
        model = Idioma
        fields = ('name', 'code')
