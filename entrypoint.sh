#!/bin/sh
# entrypoint.sh

# Tworzymy katalog SSH, jeśli nie istnieje
mkdir -p /root/.ssh

# Kopiujemy klucz hosta do kontenera (tymczasowo)
# Jeśli montujesz go z hosta jako read-only, skopiuj go do innego pliku
cp /root/.ssh/id_rsa /root/.ssh/id_rsa_tmp
chmod 600 /root/.ssh/id_rsa_tmp
mv /root/.ssh/id_rsa_tmp /root/.ssh/id_rsa

# Uruchamiamy przekazane polecenie (npm run dev lub npm run deploy)
exec "$@"