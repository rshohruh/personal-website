from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
import requests
from django.conf import settings

from .models import Project, Certificate, Blog
from .serializers import ProjectSerializer, CertificateSerializer, BlogSerializer

# Existing API views
class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class CertificateListView(generics.ListAPIView):
    queryset = Certificate.objects.all()
    serializer_class = CertificateSerializer

class BlogListView(generics.ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

# Existing index view
def index_view(request):
    return render(request, 'index.html')

# New contact view
@csrf_exempt  # Temporary for simplicity; will secure with CSRF token in JS
def contact_view(request):
    if request.method == 'POST':
        fullname = request.POST.get('fullname')
        email = request.POST.get('email')
        message = request.POST.get('message')

        telegram_message = (
            f"New Contact Message\n"
            f"Full Name: {fullname}\n"
            f"Email: {email}\n"
            f"Message:\n{message}"
        )

        url = (
            f"https://api.telegram.org/bot{settings.TELEGRAM_BOT_TOKEN}/sendMessage"
            f"?chat_id={settings.TELEGRAM_CHAT_ID}&text={telegram_message}"
        )
        
        response = requests.get(url)
        return JsonResponse({'message': f'Status code: {response}'}, status=200)
        
    return JsonResponse({'error': 'Invalid request method'}, status=405)