# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-07-24 14:54
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ebook', '0002_auto_20160722_1440'),
    ]

    operations = [
        migrations.CreateModel(
            name='Language',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='Português', max_length=256)),
                ('language_code', models.CharField(default='pt-BR', max_length=5)),
            ],
        ),
        migrations.AddField(
            model_name='autor',
            name='name',
            field=models.CharField(default='Autor Desconhecido', max_length=256),
        ),
        migrations.AddField(
            model_name='livro',
            name='book_writer',
            field=models.ManyToManyField(to='ebook.Autor'),
        ),
        migrations.AddField(
            model_name='ebook',
            name='language',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='ebook.Language'),
            preserve_default=False,
        ),
    ]
