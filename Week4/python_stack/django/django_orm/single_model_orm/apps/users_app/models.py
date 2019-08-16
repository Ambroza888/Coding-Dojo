from django.db import models


class Users(models.Model):
  first_name = models.CharField(max_length =45)
  last_name = models.CharField(max_length =45)
  email_adress = models.CharField(max_length =45)
  age = models.IntegerField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __repr__(self):
    return f"{self.first_name},{self.last_name},{self.email_adress},{self.age}"