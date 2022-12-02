#!/bin/bash

cd atvi-wb-typescript; npm install
cd ../atvi2; npm install
cd ../atvi3; npm install
cd ../atvi4/front; npm install
cd ../../atvi5/server; npm install; cd ../client/; npm install
cd ../../

echo -e "Qual você deseja inicializar ?\n[ 1 ] Atvi1\n[ 2 ] Atvi2\n[ 3 ] Atvi3\n[ 4 ] Atvi4 ira rodar apenas o back-end\n(Por favor abra outro terminal e execute o script initClient.sh)\n[ 5 ] Atvi5 ira rodar apenas o back-end\n(Por favor abra outro terminal e execute o script initClient.sh)"
read -p "Digite aqui: " OPECAO

case $OPECAO in 
	1)
		echo -e "Inicianlizando a Atvi1"
		cd atvi-wb-typescript/
        npm run dev
		;;
	2)
		echo -e "Inicianlizando a Atvi2"
		cd atvi2/
        npm start
		;;
	3)
		echo -e "Inicianlizando a Atvi3"
		cd atvi3/
        npm start
		;;
    4)
        echo -e "Por favor abra outro terminal e entre usando o comando cd atvi4/front e rode usando npm start"
        echo -e "O servidor vai ser inicializado nessa aba"
        sleep 5
		echo -e "Inicianlizando a Atvi4"
		cd atvi4/executavel/; java -jar wbbackend.jar 
		;;
    5)
        echo -e "Por favor abra outro terminal e entre usando o comando cd atvi5/client e rode usando npm start"
        echo -e "O servidor vai ser inicializado nessa aba"
        sleep 5
		echo -e "Inicianlizando a Atvi5"
		cd atvi5/server/; npm run dev
		;;
	*)
		echo "Opção invalida!"
		;;
	esac