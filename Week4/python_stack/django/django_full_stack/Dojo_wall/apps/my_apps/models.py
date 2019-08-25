from django.db import models



class User(models.Model):
  first_name = models.CharField(max_length=255)
  last_name = models.CharField(max_length=255)
  email = models.CharField(max_length=255)
  password = models.CharField(max_length=255)
  created_at= models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

class Message(models.Model):
  messege = models.TextField()
  user = models.ForeignKey(User, related_name="messege")
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
  message = models.ForeignKey(Message, related_name="comment")
  user = models.ForeignKey(User, related_name="comment")
  comment = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
