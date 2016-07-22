from rest_framework import serializers
from ebook.models import Livro, Ebook


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
