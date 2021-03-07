from django.shortcuts import render
from django.views.generic import View
import cv2
import numpy as np
from pyproj import Transformer
import geopandas as gpd
from shapely.geometry import Point
from django.http import JsonResponse
from django.core.files.storage import FileSystemStorage
import os
import shutil


class AjaxHandlerView(View):
    def get(self, request):
        lat = request.GET.get('lat')
        lng = request.GET.get('lng')
        figure = request.GET.get('fig')
        if figure:
            src = "C:/Users/egor8/Geo-Marker-Server/Geo_Marker/Geo_Marker/static/main/images/" + figure + '.png'
            print(src)
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
            meters = 5
            x_original_point = lat
            y_original_point = lng

            transformer = Transformer.from_crs("EPSG:4326", "EPSG:3857")
            c = transformer.transform(x_original_point, y_original_point)
            x_original_point = c[0]
            y_original_point = c[1]

            mx = x * meters + int(x_original_point)
            my = y * -meters + int(y_original_point)

            mxy = list(zip(mx, my))

            picture_df = gpd.GeoDataFrame(
                crs="EPSG:3857",
                geometry=[Point(resu) for resu in mxy]
            )
            picture_df['geometry'] = picture_df['geometry'].to_crs(epsg=4326)
            result = []
            for m in picture_df['geometry']:
                m = str(m)
                f = m.split()[1:3]
                f[0] = f[0][1:len(f[0])+1]
                f[1] = f[1][0:len(f[0])-2]
                f[0] = float(f[0])
                f[1] = float(f[1])
                f[0], f[1] = f[1], f[0]
                result.append(f)
            return JsonResponse({'coordinates': result}, status=200)
        return render(request, 'main/index.html')


def upload(requset):
    if requset.method == 'POST':
        upload = requset.FILES['image']
        fs = FileSystemStorage()
        fs.save(upload.name, upload)
        os.rename("C:/Users/egor8/Geo-Marker-Server/Geo_Marker/media/" + upload.name, "C:/Users/egor8/Geo-Marker-Server/Geo_Marker/Geo_Marker/static/main/" + upload.name)
        shutil.move("C:/Users/egor8/Geo-Marker-Server/Geo_Marker/media/" + upload.name, "C:/Users/egor8/Geo-Marker-Server/Geo_Marker/Geo_Marker/static/main/" + upload.name)
        os.replace("C:/Users/egor8/Geo-Marker-Server/Geo_Marker/media/" + upload.name, "C:/Users/egor8/Geo-Marker-Server/Geo_Marker/Geo_Marker/static/main/" + upload.name)
        # file = open('C:/Users/egor8/Geo-Marker-Server/Geo_Marker/Geo_Marker/static/main/userfile.png', 'w')
        # file.write(upload)
        # file.close()

    return render(requset, 'main/upload.html')