#!/bin/bash

# Tworzenie projektu Vite
npx create-vite@latest my-vite-app --template vanilla

# Przechodzimy do katalogu z nowym projektem
cd my-vite-app

# Instalacja zależności
npm install

# Powracamy do katalogu głównego
cd ..

# Uruchomienie aplikacji
npm run dev
