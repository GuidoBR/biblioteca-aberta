from django.db import models
from django.utils import timezone


class Livro(models.Model):
    """ Classe com as informações do livro """
    name = models.CharField(max_length=256)
    description = models.CharField(max_length=1024)
    isbn = models.CharField(max_length=13)
    publication_date = models.DateTimeField(default=timezone.now)


class Autor(models.Model):
    """ Classe com as informações do Autor.
    - Um autor pode ser autor de n livros. Um livro pode ter n autores."""
    pass


class Ebook(models.Model):
    """ Classe com as informações do ebook.
    - Cada ebook pertence a um livro """
    book = models.ForeignKey(Livro)
    name = models.CharField(max_length=256)
    file_format = models.CharField(max_length=16)
    file_size = models.IntegerField(default=0)
    base_url = models.URLField(max_length=1024)
    url = models.URLField(max_length=1024)
    image_url = models.URLField(max_length=1024)
