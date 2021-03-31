from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView, DestroyAPIView, UpdateAPIView, CreateAPIView
from api.models import BookPost
from api.serializers import BookPostSerializer

from rest_framework import status
from rest_framework.decorators import api_view

#all instances of the model, ordered by published date
class BookPostListView(ListAPIView):
    queryset = BookPost.objects.order_by('-date_published')
    serializer_class = BookPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )
    
#detail of an instance of the model    
class BookPostDetailView(RetrieveAPIView):
    queryset = BookPost.objects.order_by('-date_published')
    serializer_class = BookPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

#all instances of the model that are featured
class BookPostFeaturedView(ListAPIView):
    queryset = BookPost.objects.all().filter(featured=True)
    serializer_class = BookPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

#all instances which has the selected genre
class BookPostGenresView(APIView):
    serializer_class = BookPostSerializer
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        genres = data['genre']
        queryset = BookPost.objects.order_by('-date_published').filter(genres__iexact=genres)

        serializer = BookPostSerializer(queryset, many=True)

        return Response(serializer.data)

#a view to destroy a selected instance of the model
class BookPostDestroyView(DestroyAPIView):
    queryset = BookPost.objects.order_by('-date_published')
    serializer_class = BookPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

#a view to update a selected instance of the model
class BookPostUpdateView(UpdateAPIView):
    queryset = BookPost.objects.order_by('-date_published')
    serializer_class = BookPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

#a view to create a new instance of the model
class BookPostCreateView(CreateAPIView):
    serializer_class = BookPostSerializer
    permission_classes = (permissions.AllowAny, )
