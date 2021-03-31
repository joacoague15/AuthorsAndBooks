from django.contrib import admin
from .models import BookPost

class BookPostAdmin(admin.ModelAdmin):
    exclude = ('slug', ) #We do not need the slug in the admin panel
    list_display = ('id', 'title', 'genres', 'date_published')
    list_display_links = ('id', 'title') #To click on It
    search_fields = ('title', )
    list_per_page = 25

admin.site.register(BookPost, BookPostAdmin)