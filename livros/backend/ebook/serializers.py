from rest_framework import serializers
from ebook.models import Livro, Ebook, Autor, Idioma


class LivroSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Livro model """
    class Meta:
        model = Livro
        fields = '__all__'


class EbookSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Ebook model """
    class Meta:
        model = Ebook
        fields = '__all__'


class AutorSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Autor model """
    class Meta:
        model = Autor
        fields = '__all__'


class IdiomaSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Idioma model """
    class Meta:
        model = Idioma
        fields = '__all__'
