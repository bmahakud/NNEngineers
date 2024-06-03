from django.urls import path,re_path

from .views import ClassView, ClassMultiCreateView, AddYoutubeVideoToClassView, AddFileToClassView, AddLinkToClassView, EditClassDetailView

from .views import GetAllUserClassView, GetAllUserClassViewbyId,  GetDayClassesView, DeleteClassView, GetWeekClassesView, GetOneClassDetailView

from .views import BookSlotClassView, GetDayClassesViewById

urlpatterns = [

  path('all/', ClassView.as_view(),name='class_view'),
  path('multicreate/', ClassMultiCreateView.as_view(),name='classmulti_view'),
  path('getalluserclasses/', GetAllUserClassView.as_view(),name='getall_classes_view'),
  path('getalluserclasses/<int:topperId>/', GetAllUserClassViewbyId.as_view(),name="get_topper_slots"),


  #path('getdayclasses/<str:datestring>/<str:timezone>/', GetDayClassesView.as_view(),name="get_day_classes"),
  re_path(r'^getdayclasses/(?P<datestring>[\w-]+)/(?P<timezone>[\w/]+)/$', GetDayClassesViewById.as_view(), name="get_day_classes"),
  re_path(r'^getweekclasses/(?P<startDate>[\w-]+)/(?P<timezone>[\w/]+)/$',GetWeekClassesView.as_view(),name="get_week_classes"),
  #re_path(r'^getweekclasses/(?P<startDate>[\w-]+)/(?P<endDate>[\w-]+)/(?P<timezone>[\w/]+)/$',GetWeekClassesView.as_view(),name="get_week_classes"),
  path('deleteclass/<int:classid>/', DeleteClassView.as_view(),name="as_view"),
  re_path(r'^getclassdetailsbyid/(?P<classId>\d+)/(?P<timezone>[\w/]+)/$', GetOneClassDetailView.as_view(),name="get_one_class_detail"), 
  path('editclassdetailsbyId/<int:classId>/', EditClassDetailView.as_view(),name="edit_class_detail_view"),
  path('addyoutubevideotoclass/<int:classId>/',AddYoutubeVideoToClassView.as_view(),name="add_youtube_video_to_class"),
  path('addfiletoclass/<int:classId>/',AddFileToClassView.as_view(),name="add_file_to_class"),
  path('addlinktoclass/<int:classId>/', AddLinkToClassView.as_view(),name="add_link_to_class"),
  #path('addlinktoclass/<int:classId>/')

  #path('getclassdetailsbyid/<int:classId>/<str:timezone>/', GetOneClassDetailView.as_view(),name="get_one_class_detail"),  

  path('bookslot/<int:slotId>/', BookSlotClassView.as_view(), name="book_slot_view"),
]
