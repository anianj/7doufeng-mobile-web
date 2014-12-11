from django.shortcuts import render

# Create your views here.

def show(request,name):
    """
    """
    return render(request,'special/static/' + name + '.html',{})
