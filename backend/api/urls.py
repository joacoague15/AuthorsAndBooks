from django.urls import path
from .views import BookPostListView, BookPostDetailView, BookPostFeaturedView, BookPostGenresView, BookPostDestroyView, BookPostUpdateView, BookPostCreateView

urlpatterns = [
    path('', BookPostListView.as_view()),
    path('featured', BookPostFeaturedView.as_view()),
    path('genres', BookPostGenresView.as_view()),
    path('<slug>', BookPostDetailView.as_view()),
    path('destroy/<slug>', BookPostDestroyView.as_view()),
    path('update/<slug>', BookPostUpdateView.as_view()),
    path('create/createBook', BookPostCreateView.as_view()),
]