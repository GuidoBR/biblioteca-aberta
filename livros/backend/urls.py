from rest_framework.routers import DefaultRouter
from ebook.views import LivroViewSet, EbookViewSet, AutorViewSet, IdiomaViewSet

from django.views.generic import TemplateView
from django.conf.urls import url, include

router = DefaultRouter()
router.register(prefix='livros', viewset=LivroViewSet)
router.register(prefix='ebooks', viewset=EbookViewSet)
router.register(prefix='autores', viewset=AutorViewSet)
router.register(prefix='idiomas', viewset=IdiomaViewSet)

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^api/', include(router.urls)),
]
