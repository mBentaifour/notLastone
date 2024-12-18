@echo off
echo Creating virtual environment...
python -m venv venv

echo Activating virtual environment...
call venv\Scripts\activate.bat

echo Installing requirements...
pip install -r requirements.txt

echo Creating Django migrations...
cd backend
python manage.py makemigrations
python manage.py migrate

echo Starting Django server...
start cmd /k python manage.py runserver

cd ..
echo Starting React development server...
start cmd /k npm run dev

echo Setup complete! Your servers should be starting now.
