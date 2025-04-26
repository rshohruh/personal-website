from django.contrib import admin
from .models import Project, Certificate, Blog

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'link')  # Columns to display
    search_fields = ('title', 'category')  # Enable search by title and category

@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ('title', 'link')
    search_fields = ('title',)

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'date')
    search_fields = ('title', 'category')
    list_filter = ('date', 'category')  # Add filters for date and category