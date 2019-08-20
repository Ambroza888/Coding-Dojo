from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^shows$', views.index),
    url(r'^shows/new$', views.add_new_show),
    url(r'^shows/(?P<my_val>\d+)$', views.display_show_info),
    url(r'^taking_show_info$', views.taking_show_info),
    url(r'^shows/(?P<my_val>\d+)/delete$', views.delete),
    url(r'^shows/(?P<my_val>\d+)/edit$', views.edit),
    url(r'^shows/(?P<my_val>\d+)/update$', views.update),
]