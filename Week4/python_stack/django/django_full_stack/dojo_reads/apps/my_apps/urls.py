from django.conf.urls import url
from . import views
                    


urlpatterns = [
    url(r'^$', views.index),
    url(r'^reg_in_data$', views.reg_in_data),
    url(r'^books$', views.books),
    url(r'^log_in_data$', views.log_in_data),
    url(r'^add$', views.add_book),
    url(r'^add_book_process$', views.add_book_process),
    url(r'^books_placeholder$', views.books_placeholder)
]