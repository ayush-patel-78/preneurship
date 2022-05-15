## To Run this Project follow below:

```bash
pip install virtualenvwrapper-win 
mkvirtualenv authenv
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
## TO activate and deactivate the virtua env  run the following command:

 ```bash
 deactivate
 workon <virtual enviroment name>
 ```
#### There is a File "DjangoAuthAPI.postman_collection" which has Postman Collection You can import this file in your postman to test this API

