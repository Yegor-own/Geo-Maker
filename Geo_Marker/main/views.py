from django.shortcuts import render
from django.views.generic import View
import cv2
import numpy as np
from django.http import JsonResponse


class AjaxHandlerView(View):
    def get(self, request):
        lat = request.GET.get('lat')
        lng = request.GET.get('lng')
        figure = request.GET.get('fig')
        if figure:
            src = "C:/Users/egor8/Geo-Marker-Server/Geo_Marker/main/img/" + figure + '.png'
            img = cv2.imread(src)
            gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            gray = np.float32(gray)

            corners = cv2.goodFeaturesToTrack(gray, 100, 0.0001, 10)
            corners = np.int0(corners)
            squeezed = corners.squeeze().tolist()

            def distance(P1, P2):
                return ((P1[0] - P2[0]) ** 2 + (P1[1] - P2[1]) ** 2) ** 0.5

            def optimized_path(coords, start=None):
                if start is None:
                    start = coords[0]
                pass_by = coords
                path = [start]
                pass_by.remove(start)
                while pass_by:
                    nearest = min(pass_by, key=lambda x: distance(path[-1], x))
                    path.append(nearest)
                    pass_by.remove(nearest)
                return path

            path = optimized_path(squeezed)
            x = np.array([i[0] for i in path])
            y = np.array([i[1] for i in path])
            k = 0.00003
            x_original_point = float(lat)
            y_original_point = float(lng)
            mx = list(x * k + x_original_point)
            my = list(y * k + y_original_point)
            mxy = list()
            for i in range(len(mx)):
                t = {
                    "lat": round(mx[i], 4),
                    "lng": round(my[i], 4)
                }
                mxy.append(t)
            return JsonResponse({'coordinates': mxy}, status=200)
        return render(request, 'main/index.html')
