from django.contrib import admin
from django.urls import path,include
from home import views


app_name = 'home'


urlpatterns = [

#react app

path("",views.reactapp,name='home'),

path("about/",views.reactapp,name='about_d'),
path("services/",views.reactapp,name='servcies_d'),
path("products/",views.reactapp,name='products_d'),

path('bibhuprasad-mahakud/',views.testprofile, name="bibhu"),
path('ipsit-panda/',views.testprofile, name="ipsit"),
path('ateeb-ashfaque/',views.testprofile, name="ateeb"),
path('sagar-patra/',views.testprofile, name="sagar-patra"),
path('debansh-das-sharma/',views.testprofile, name="debansh"),
path('rachuti-reshwanth/',views.testprofile, name="reshwanth"),


path('plcdatalive/',views.reactapp, name="plcdatalive"),


path("createaccount/",views.reactapp,name="create_account"),
path("app/home/tools/",views.reactapp,name="bylaws_login"),
path("app/home/slots/",views.reactapp,name="user_slots"),

path("app/account/userprofile/", views.reactapp,name="userprofile"),

path("topperprofile/<int:userid>/",views.reacttopperprofile, name="topperprofile"),

path("findtoppers/", views.reactapp,name="findtoppers"),

path("successstory/",views.reactapp, name="success stroy"),

path("servicesDetails/1", views.reactapp, name="servicesDetails/1"),

path("servicesDetails/2", views.reactapp, name="servicesDetails/2"),

path("servicesDetails/3", views.reactapp, name="servicesDetails/3"),

path("servicesDetails/4", views.reactapp, name="servicesDetails/4"),

path("servicesDetails/5", views.reactapp, name="servicesDetails/5"),

path("servicesDetails/6", views.reactapp, name="servicesDetails/6"),

path("successstory/1", views.reactapp, name="successstory/1"),

path("successstory/2", views.reactapp, name="successstory/2"),

path("successstory/3", views.reactapp, name="successstory/3"),

path("successstory/4", views.reactapp, name="successstory/4"),

path("successstory/5", views.reactapp, name="successstory/5"),

path("successstory/6", views.reactapp, name="successstory/6"),

path("successstory/7", views.reactapp, name="successstory/7"),

path("successstory/8", views.reactapp, name="successstory/8"),



path("joinastopper/", views.reactapp,name="find_joinas topper"),

path("news/", views.reactapp,name="success_story"),

path("contactus/", views.reactapp,name="contactus_story"),

path("registerasstudent/", views.reactapp,name="registerasstudent_hellotoppers"),

path("registerastopper/",views.reactapp,name="registerastopper_hellotoppers"),

path("AboutUs/", views.reactapp,name="AboutUs"),

path("HelpCenter/", views.reactapp,name="HelpCenter"),

path("Privacypolicy/", views.reactapp,name="Privacypolicy"),

path("TermsofUse/", views.reactapp,name="TermsofUse"),

path("CookiesPolicy/", views.reactapp,name="CookiesPolicy"),

#path("/", views.reactapp,name=""),


path("video/<str:meetingroomstring>/",views.reactappvideomeet, name='redirect_videoApp'),
path("account/userprofile/",views.reactapp,name='redirect5'),
path("account/settings/",views.reactapp,name='redirect6'),
path("account/courses/",views.reactapp,name='redirect7'),









#home app
#path("privacypolicy",views.privacypolicy,name='privacypolicy'),
#path("joinus",views.joinus,name='joinus'),
#path("joinusscienceanalystI",views.joinusscienceanalystI,name='joinusscienceanalystI'),
#path("joinusscienceanalystII",views.joinusscienceanalystII,name='joinusscienceanalystII'),
#path("contactinfo",views.contactinfo,name='contactinfo'),








]






