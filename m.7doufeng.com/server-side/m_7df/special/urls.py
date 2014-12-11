from django.conf.urls import patterns, url

from special import views

urlpatterns = patterns('',
    url(r'^(?P<name>[A-Za-z0-9\-]*)$',views.show)
)
