from rest_framework import serializers
from .models import BookPost

# Serializers define the API representation.
class BookPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookPost
        fields = '__all__'
        look_field = 'slug' #It is used to performing object lookup of individual model instances.