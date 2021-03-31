from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User #model already set by Django

class Genres(models.TextChoices):
    AUTOBIOGRAPTHY = 'autobiography'
    FICTION = 'fiction'
    COMEDY = 'comedy'
    CRIME = 'crime'
    DRAMA = 'drama'
    HORROR = 'horror'
    PHILOSOPHY = 'philosophy'
    HISTORY = 'history'



class BookPost (models.Model):
    title = models.CharField(max_length=70)
    author = models.ForeignKey(User, related_name="BookPosts", on_delete=models.CASCADE, null=True)
    slug = models.SlugField() #slug is to create url base in the name that inherit Itself
    genres = models.CharField(max_length=70, choices=Genres.choices, default=Genres.CRIME)
    #coverpage = models.ImageField(upload_to='photos/%Y/%m/%d/')
    abstract = models.CharField(max_length=200)
    month = models.CharField(max_length=3) #Example JAN OCT OR FEB
    day = models.CharField(max_length=2)
    content = models.TextField() #extra configuration in admin.py
    featured = models.BooleanField(default=False, blank=True)
    date_published = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title) #So slug will fill automatically with the title
        queryset = BookPost.objects.all().filter(slug__iexact=original_slug).count() #Check how many books have the same title

        count = 1
        slug = original_slug
        while(queryset): #While It finds titles with the same name, do this
            slug = original_slug + '-' + str(count)
            count += 1
            queryset = BookPost.objects.all().filter(slug__iexact=slug).count()

        self.slug = slug
            #Little explanation:
                #We have our new supposedly original title 'Don Quijote de la Mancha' and we add the default -1 at the end.
                #But it seems that there was already another title before it was listed, so we count += 1 to have "Don Quijote de la Mancha-2 and 
                #leaving 'Don Quijote de la Mancha-1' as It was.
        if self.featured:
            try:
                temp = BookPost.objects.get(featured=True)
                if self != temp:
                    temp.featured = False #Automatically change the featured new book
                    temp.save()
            except BookPost.DoesNotExist:
                pass

        super(BookPost, self).save(*args, **kwargs)
    
    def __str__(self):
        return self.title