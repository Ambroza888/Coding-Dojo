from django.db import models
import re

class UserManager(models.Manager):
  def basic_validator(self, postData):
    errors = {}
    if len(postData['name']) < 2:
      errors['name'] = "The name needs to be more than 2 characters BRAAA"
    if len(postData['alias']) < 2:
      errors['alias'] = "Choose better nickname BRa"
    if postData['password'] != postData['re_password']:
      errors['password'] = "Your password is not matching put some glasses"
    if len(postData['password']) < 5:
      errors['password'] = "Your password need to be more than 5 characters"
    EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
    if not EMAIL_REGEX.match(postData['email']):
      errors['email'] = "Your email address is not in the right order don't cheat on my front end please !"
    return errors


class User(models.Model):
  name = models.CharField(max_length=255)
  alias = models.CharField(max_length=255)
  email = models.CharField(max_length=255)
  password = models.CharField(max_length=255)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  objects = UserManager()


class Author(models.Model):
  first_name = models.CharField(max_length=255)
  last_name = models.CharField(max_length=255)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

class Book(models.Model):
  title = models.CharField(max_length=255)
  author = models.ForeignKey(Author, related_name="books")
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

class Review(models.Model):
  text = models.TextField()
  rating = models.IntegerField()
  book = models.ForeignKey(Book, related_name="reviews")
  user = models.ForeignKey(User, related_name="reviews")
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)