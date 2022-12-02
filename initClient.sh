#!/bin/bash

echo -e "Qual front você deseja inicializar ?\n[ 1 ] Atvi4\n[ 2 ] Atvi5"
read -p "Digite aqui: " OPECAO

case $OPECAO in 
	1)
		echo -e "Inicianlizando a Atvi4"
		cd atvi4/front
        npm start
		;;
	2)
		echo -e "Inicianlizando a Atvi5"
		cd atvi5/client
        npm start
		;;
	*)
		echo "Opção invalida!"
		;;
	esac