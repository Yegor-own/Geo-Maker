from django.shortcuts import render, redirect
# from .models import Task
# from .forms import TaskForm


def index(request):
    # tasks = Task.objects.order_by('-id')
    return render(request, 'main/index.html')
