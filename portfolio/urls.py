from django.urls import path
from .views import ProjectListView, CertificateListView, BlogListView, index_view, contact_view

urlpatterns = [
    path('api/projects/', ProjectListView.as_view(), name='project-list'),
    path('api/certificates/', CertificateListView.as_view(), name='certificate-list'),
    path('api/blogs/', BlogListView.as_view(), name='blog-list'),
    path('', index_view, name='index'),
    path('contact/', contact_view, name='contact'),  # New endpoint
]