from django.shortcuts import render, HttpResponse, redirect
from .models import *
from django.contrib import messages
import bcrypt



def index(request):
    return render(request, "my_apps/index.html")


def reg_in_data(request):
  errors = User.objects.basic_validator(request.POST)
  if len(errors) > 0:
    for key, value in errors.items():
      # messages.error(request, value)
      messages.add_message(request, messages.ERROR, value, extra_tags="register")
    return redirect('/')
  else:
    name = request.POST['name']
    alias = request.POST['alias']
    email = request.POST['email']
    password = request.POST['password']
    re_password = request.POST['re_password']
    pw_hash = bcrypt.hashpw(password.encode(),bcrypt.gensalt())
    new_user = User.objects.create(name=name,alias=alias,email=email,password=pw_hash)
    id = new_user.id
    request.session['user_id'] = id

    return redirect("/books")

def log_in_data(request):
  user = User.objects.filter(email=request.POST['email'])
  if user:
    logged_user = user[0]
    if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
      request.session['user_id'] = id
      return redirect("/books")
    else:
      messages.add_message(request, messages.ERROR, "Invalid information", extra_tags='login')
  return redirect('/')


def books(request):
  if not "user_id" in request.session:
    return redirect("/")
  else:
    context= {
    "user": User.objects.get(id=request.session['user_id']),
    "all_books": Book.objects.all(),
    "review": Review.objects.all().order_by("-created_at")
    }


  return render(request, "my_apps/books.html", context)

def add_book(request):
  context = {
    "all_authors": Author.objects.all()
  }
  return render(request, "my_apps/add_book.html",context)

def add_book_process(request):
  book_title = request.POST['title']
  
  chosen_old_author = request.POST['chosen_old_author']
  chosen_new_author = request.POST['chosen_new_author']
  review_text = request.POST['review_text']
  chosen_rating = request.POST['chosen_rating']
  print("chosen_old_author", chosen_old_author)
  if int(chosen_old_author) == 0:
    new_author = Author.objects.create(first_name=chosen_new_author,last_name="")
    new_book = Book.objects.create(title=book_title,author=new_author)
    new_review = Review.objects.create(text=review_text,rating=chosen_rating,book=new_book,user=User.objects.get(id=request.session['user_id']))
    print("what is going on ?")
  else:
    new_author = Author.objects.get(id=int(chosen_old_author))
    new_book = Book.objects.create(title=book_title,author=new_author)
    new_review = Review.objects.create(text=review_text,rating=chosen_rating,book=new_book,user=User.objects.get(id=request.session['user_id']))

    
  return redirect('/books_placeholder')


def books_placeholder(request):

  return render(request, "my_apps/books_placeholder.html")