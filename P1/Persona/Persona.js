/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */
/*          [DIU] UX Toolkit v1.0 2019    */
/*          ver 1.1 26/Feb/2020            */
/*******************************************/

/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2019/20";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";

		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{


                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 0,
				Name: "Jerry",
				Photo: "persona5.jpg",
				Quote: "Cuanto más complicado se te presenta el rato mayor será la gloria",
				Age: 32,
				Occupation: "Miembro de un bufete de abogados",
				Family: "Cuida de su madre",
				Location: "Granada (Baza)",
				Character: "Es muy confiado en sus habilidades",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				],
				Goals: ["Ser alguien de referencia en su profesión", "Que su madre pueda relajarse"],
				Frustrations: ["Se cree muy bueno en lo suyo, pero pocos lo toman en serio", "Cree que su madre está siempre demasiado estresada y se preocupa por ella","Está cansado de su rutina y busca algo distinto"],
				Bio: "Es de Baza, entró a trabajar en el bufete de su padre y muchos se creen que fue por enchufe por lo que no les cae muy bien. Su padre murió hace unos años y su madre vive sola. Suele salir con los amigos de su pueblo y cuando tiene tiempo libre va a ayudar a su madre",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 1 }

				],
                Contextos: "Lleva tiempo queriendo viajar de forma distinta pero le procupa dejar sola a su madre mucho tiempo, un amigo de confianza le ha recomendado un sitio web",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 3 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 1 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{

                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 1,
				Name: "Martha",
				Photo: "persona4.jpg",
				Quote: "Hasta de los momentos malos puedes sacar conclusiones positivas",
				Age: 45,
				Occupation: "Es periodista de la editorial local",
				Family: "Dos hijos y esperando una nieta",
				Location: "Huelva",
				Character: "Decidida y abierta al cambio.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				],
				Goals: ["Se ha puesto muy al día con las nuevas tecnologías pero le gustaría seguir aprendiendo.", "Siempre a querido tener una hija y está muy expectante del nacimiento de su nieta.", "Siempre ha soñado con visitar el norte de Europa."],
				Frustrations: ["Le gustaría preparar un viaje para su hijo y su nuera antes de que nazca el bebé pero no sabe si puede permitirselo.", "Le aterra la idea de jubilarse."],
				Bio: "Se casó y tuvo su primer hijo muy joven, lleva en el mismo trabajo toda su vida y lo adora, quiere mucho a su familia y se preocupa más por ellos que por ella misma.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 3}

				],
                Contextos:   "Esta preparando un viaje sorpresa para su hijo y nuera pero busca económico." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
