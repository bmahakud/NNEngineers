from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser,IsAuthenticatedOrReadOnly, DjangoModelPermissions, AllowAny
from rest_framework.parsers import MultiPartParser, FormParser


from .models import Meeting, Presentation, Talkfile
from .serializers import MeetingSerializer, MeetingMultiCreateSerializer, EditMeetingSerializer, MeetingSerializerGET,PresentationSerializerCREATE,TalkFileUploadSerializer, PresentationSerializerGET, PresentationSerializerPUT, DashboardMeetingSerializer, MeetingMultiCreatePersonalSerializer



from .serializers import CreateOneMeetingSerializer



class CreateOneMeetingView(APIView):

      def post(self, request, format=None):
        serializer = CreateOneMeetingSerializer(data=request.data, context={"request":request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)






class PresentationCreateView(generics.ListCreateAPIView):
      queryset = Presentation.objects.all()
      serializer_class = PresentationSerializerCREATE


class MeetingView(generics.ListCreateAPIView):
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer


class DashboardMeetingView(generics.ListCreateAPIView):
      queryset = Meeting.objects.all()
      serializer_class = DashboardMeetingSerializer






class EditMeetingView(APIView):
      def get_object(self, pk):
        try:
            return Meeting.objects.get(pk=pk)
        except Meeting.DoesNotExist:
            raise Http404
      def get(self, request, pk, format=None):
        Object = self.get_object(pk)
        serializer = EditMeetingSerializer(Object)
        return Response(serializer.data)

      def put(self, request, pk, format=None):
        Object = self.get_object(pk)
        serializer = EditMeetingSerializer(Object, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)







#TalkFileUploadSerializer

class TalkUploadAPIView(APIView):
      permission_classes = [IsAuthenticated]
      parser_classes = [MultiPartParser, FormParser]
      def post(self, request, format=None):
          #print ("ha ha ha::::::::", request.data['talkId'])

          serializer = TalkFileUploadSerializer( data=request.data)
          #print ("valid serializer: ", serializer)
          if serializer.is_valid():
              serializer.save()
              return Response(serializer.data, status = status.HTTP_200_OK)
          else:
              return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

      def get(self, request, format=None):
        Objects = Talkfile.objects.all()
        serializer = TalkFileUploadSerializer(Objects)
        return Response(serializer.data)













class MeetingMultiCreateView(generics.ListCreateAPIView):
    queryset = Meeting.objects.all()
    serializer_class = MeetingMultiCreateSerializer



class MeetingMultiCreatePersonalView(generics.ListCreateAPIView):
    queryset = Meeting.objects.all()
    serializer_class = MeetingMultiCreateSerializer




class MeetingViewPk(APIView):
    #permission_classes = [IsAuthenticated]    
    def get_object(self, pk):
        try:
            return Meeting.objects.get(pk=pk)
        except Meeting.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        Object = self.get_object(pk)
        serializer = MeetingSerializerGET(Object)
        return Response(serializer.data)

    def delete(self, request, pk, format=None):
        Object = self.get_object(pk)
        Object.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 







class PresentationViewPk(APIView):
    #permission_classes = [IsAuthenticated]    
    def get_object(self, pk):
        try:
            return Presentation.objects.get(pk=pk)
        except Presentation.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        Object = self.get_object(pk)
        serializer = PresentationSerializerGET(Object)
        return Response(serializer.data)

    def delete(self, request, pk, format=None):
        Object = self.get_object(pk)
        Object.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class PresentationPUTViewPk(APIView):
    #permission_classes = [IsAuthenticated]    
    def get_object(self, pk):
        try:
            return Presentation.objects.get(pk=pk)
        except Presentation.DoesNotExist:
            raise Http404

    def put(self, request, pk, format=None):
        Object = self.get_object(pk)
        serializer = PresentationSerializerPUT(Object, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)










