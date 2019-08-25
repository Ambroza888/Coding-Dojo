from django.shortcuts import render, redirect
from .models import Order, Product

def index(request):
    context = {
        "all_products":Product.objects.all()
    }
    return render(request, "store/index.html", context)

def checkout(request):
    quantity_from_form = int(request.POST["quantity"])
    id = request.POST['id']
    the_chosen_product = Product.objects.get(id=id)
    price_from_form = the_chosen_product.price
    total_charge = quantity_from_form * price_from_form
    print("Charging credit card...")
    Order.objects.create(quantity_ordered=quantity_from_form, total_price=total_charge)
    return redirect('/amadon/checkout')

def display_checkout(request):
    context = {
        "specific_order": Order.objects.last(),
        "all_orders": Order.objects.all()
    }
    return render(request, "store/checkout.html", context)