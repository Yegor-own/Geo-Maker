# Geo-Marker

Система работает на базе сервера Django, для отрисовки карты используется Leaflet, проект не использует проприетарные сервисы

Библиотеки требуемые для установки: 
`Django`
`Opencv`
`Numpy`
`Geopandas`

Дополнительные зависимости для `Geopandas` можно установить из папки lib, но должен быть установлен Anaconda Navigator в нем открываем Conda Prompt и выполняем следующие команды:

`cd /d lib`

Нужно убедится что у вас Python 3.8 командой

`python --version`

Если версия python отличается файлы можно скачать здесь: https://www.lfd.uci.edu/~gohlke/pythonlibs/
где _cp_ в имени файла ваша версия python, например: cp37 для Python 3.7 

Команды выполнять строго по порядку

`pip install GDAL-3.2.1-cp38-cp38-win_amd64.whl`

`pip install pyproj-3.0.0.post1-cp38-cp38-win_amd64.whl`

`pip install Fiona-1.8.18-cp38-cp38-win_amd64.whl`

`pip install Shapely-1.7.1-cp38-cp38-win_amd64.whl`

`pip install geopandas-0.8.2-py3-none-any.whl`