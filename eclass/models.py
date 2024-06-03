from django.db import models
import datetime
from django.utils import timezone
from django.contrib.auth import get_user_model
User = get_user_model()



class LinkObject(models.Model):
      name = models.CharField(max_length=200, null=True,blank=True)
      link = models.CharField(max_length=1000, null=True,blank=True)
      description = models.CharField(max_length=500, null=True,blank=True)
      creationDate = models.DateField(default=datetime.date.today, null=True,blank=True)
      creationTime = models.TimeField(default=timezone.now, null=True, blank=True);
      def __str__(self):
        return self.name
      class Meta:
        ordering = ('creationDate',)


class FileObject(models.Model):
      displayname = models.CharField(max_length=200, null=True,blank=True)
      fileaddress = models.FileField(max_length=1055, upload_to='images/', null=True, blank=True);
      description = models.CharField(max_length=500, null=True,blank=True)
      creationDate = models.DateField(default=datetime.date.today, null=True,blank=True)
      creationTime = models.TimeField(default=timezone.now, null=True, blank=True);
      def __str__(self):
        return self.displayname
      class Meta:
        ordering = ('creationDate',)


class VideoObject(models.Model):
      name = models.CharField(max_length=200, null=True,blank=True)
      link = models.CharField(max_length=1000, null=True,blank=True)
      description = models.CharField(max_length=500, null=True,blank=True)
      creationDate = models.DateField(default=datetime.date.today, null=True,blank=True)
      creationTime = models.TimeField(default=timezone.now, null=True, blank=True);
      def __str__(self):
        return self.name
      class Meta:
        ordering = ('creationDate',)

class Class(models.Model):
    statusOptions = (('scheduled','SCHEDULED'),('ongoing','ONGOING'),('completed','COMPLETED'),('postponed','POSTPONED'),('cancelled','CANCELLED'))
    serialNo = models.IntegerField(blank=True, null=True);
    status  = models.CharField(max_length=10, choices=statusOptions, default='scheduled');
    datetime = models.DateTimeField(default=timezone.now);
    duration = models.IntegerField(blank=True, null=True);    
    meetingLink = models.CharField(max_length=1000, blank=True, null=True);    
    address = models.CharField(max_length=250, blank=True,null=True);
    about = models.TextField(max_length=5000, null=True,blank=True);
    videos = models.ManyToManyField(VideoObject, blank=True,related_name='video_objects_class');
    links = models.ManyToManyField(LinkObject, blank=True,related_name='link_objects_class');
    files = models.ManyToManyField(FileObject, blank=True,related_name='course_file_objects_class');
    hostid = models.IntegerField(blank=True, null=True);
     

    class Meta:
        ordering = ('datetime',);

    #def save(self, *args, **kwargs):
    #    if  self.datetime:
    #       self.serialNo = self.()
    #    super(Class, self).save(*args, **kwargs)

