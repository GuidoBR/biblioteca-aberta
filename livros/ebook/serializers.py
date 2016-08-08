# -*- coding: UTF-8 -*-
from rest_framework import serializers
from rest_framework.reverse import reverse
from livros.ebook.models import Livro, Ebook, Autor, Idioma


class LivroSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Livro model """
    links = serializers.SerializerMethodField()
    view_name = 'livro-detail'

    class Meta:
        model = Livro
        fields = '__all__'

    def get_links(self, obj):
        req = self.context['request']
        links = {
            'self': reverse(
                'livro-detail',
                kwargs={'pk': obj.pk},
                request=req
            ),
        }
        return links


class EbookSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Ebook model """
    links = serializers.SerializerMethodField()
    view_name = 'ebook-detail'

    class Meta:
        model = Ebook
        fields = '__all__'

    def get_links(self, obj):
        request = self.context['request']
        return {
            'self': reverse(
                'ebook-detail',
                kwargs={'pk': obj.pk},
                request=request
            )
        }


class AutorSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Autor model """
    links = serializers.SerializerMethodField()
    view_name = 'autor-detail'

    class Meta:
        model = Autor
        fields = '__all__'

    def get_links(self, obj):
        request = self.context['request']
        return {
            'self': reverse(
                'autor-detail',
                kwargs={'pk': obj.pk},
                request=request
            )
        }


class IdiomaSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Idioma model """
    links = serializers.SerializerMethodField()
    view_name = 'idioma-detail'

    class Meta:
        model = Idioma
        fields = '__all__'

    def get_links(self, obj):
        request = self.context['request']
        return {
            'self': reverse(
                'idioma-detail',
                kwargs={'pk': obj.pk},
                request=request
            )
        }
