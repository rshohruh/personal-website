from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='projects/')
    alt = models.CharField(max_length=200)
    link = models.URLField()

    def __str__(self):
        return self.title

class Certificate(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='certificates/')
    link = models.URLField()

    def __str__(self):
        return self.title

class Blog(models.Model):
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='blogs/')
    alt = models.CharField(max_length=200)
    date = models.DateField()
    text = models.CharField(max_length=200)  
    link = models.URLField()

    def __str__(self):
        return self.title