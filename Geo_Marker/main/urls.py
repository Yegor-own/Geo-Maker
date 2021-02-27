from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='home'),
    # path('rect', views.rect),
    # path('map', views.map),
    # path('route', views.route),
    # path('rect', views.rect),
    # path('about', views.about, name='about'),
    # path('create', views.create, name='create')
]