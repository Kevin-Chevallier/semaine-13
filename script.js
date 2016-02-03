angular.module('quiz',[])
	.controller('QuizController',['$scope',function($scope) {
		$scope.numquestion = 0;
		$scope.points = 0;
		$scope.categorie1 = 0;
		$scope.categorie2 = 0;
		$scope.categorie3 = 0;
		$scope.categorie4 = 0;
		$scope.domaine ="";
		$scope.visuel = "block";
		$scope.resultat = "none";
		$scope.texte = "";
		$scope.image = "";
		$scope.soluce1 = "";
					
	
		$scope.questions = [
	
			{id:"01",
			 categorie:"Orthographe",
			 question:"Complétez l'expression B---- aux corneilles",
			 reponseA:"Bayer",
			 reponseB:"Bailler",
			 reponseC:"Bâiller",
			 reponseD:"Bayest",
			 correct:"reponseA",
			 bonneReponse:"Bayer",
			 points:10,
			 pointscat1:10,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:0,
			 
			},
			{id:"02",
			 categorie:"Orthographe",
			 question:"Un seul de ces pluriels est correct : lequel?",
			 reponseA:"Des grattes-ciels",
			 reponseB:"Des plate-bandes",
			 reponseC:"Des chou-fleurs",
			 reponseD:"Des touche-à-tout",
			 correct:"reponseD",
			 bonneReponse:"Des touche-à-tout",
			 points:10,
			 pointscat1:10,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:0,
			 
			},
			{id:"03",
			 categorie:"Orthographe",
			 question:"dans la phrase suivante, corrigez le premier mot : KELKEUH soient les conditions",
			 reponseA:"Quelque",
			 reponseB:"Quelle que",
			 reponseC:"Quels que",
			 reponseD:"Quelles que",
			 correct:"reponseD",
			 bonneReponse:"Quelles que",
			 points:10,
			 pointscat1:10,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:0,
			
			},
			{id:"04",
			 categorie:"Orthographe",
			 question:"Complétez : Les lignes de codes que j'ai ........... ",
			 reponseA:"rédiger",
			 reponseB:"rédigés",
			 reponseC:"rédigée",
			 reponseD:"rédigées",
			 correct:"reponseD",
			 bonneReponse:"rédigées",
			 points:10,
			 pointscat1:10,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:0,
			 
			},
			{id:"05",
			 categorie:"Anglais",
			 question:"Quel est le participe passé du verbe faire",
			 reponseA:"Do",
			 reponseB:"Did",
			 reponseC:"Done",
			 reponseD:"Doing",
			 correct:"reponseC",
			 bonneReponse:"Done",
			 points:10,
			 pointscat1:0,
			 pointscat2:10,
			 pointscat3:0,
			 pointscat4:0,
			 
			},
			{id:"06",
			categorie:"Anglais",
			 question:"Laquelle de ces villes n'est pas en Angleterre",
			 reponseA:"York",
			 reponseB:"Newcastle-Upon-Tyne",
			 reponseC:"Limerick",
			 reponseD:"Carlisle",
			 correct:"reponseC",
			 bonneReponse:"Limerick",
			 points:10,
			 pointscat1:0,
			 pointscat2:10,
			 pointscat3:0,
			 pointscat4:0,
			 
			},
			{id:"07",
			 categorie:"Anglais",
			 question:"Qui n'a jamais été 1er ministre du Royaume-Uni",
			 reponseA:"Margaret Thatcher",
			 reponseB:"James Cameron",
			 reponseC:"Tony Blair",
			 reponseD:"John Major",
			 correct:"reponseB",
			 bonneReponse:"James Cameron",
			 points:10,
			 pointscat1:0,
			 pointscat2:10,
			 pointscat3:0,
			 pointscat4:0,
			 
			},
			{id:"08",
			 categorie:"Anglais",
			 question:"Quel est le titre de l'hymne du Royaume-Uni ?",
			 reponseA:"God Save The Queen",
			 reponseB:"The Star-Spangled Banner ",
			 reponseC:"Sunday Bloody Sunday",
			 reponseD:"Anarchy in the U.K.",
			 correct:"reponseA",
			 bonneReponse:"God Save The Queen",
			 points:10,
			 pointscat1:0,
			 pointscat2:10,
			 pointscat3:0,
			 pointscat4:0,
			},

			{id:"09",
			 categorie:"Musique",
			 question:"Quel groupe anglais est connu pour sa chanson Song 2 et sa rivalité avec Oasis?",
			 reponseA:"Blur",
			 reponseB:"The White Stripes ",
			 reponseC:"The Clash",
			 reponseD:"Guns and Roses",
			 correct:"reponseA",
			 bonneReponse:"Blur",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:10,
			 pointscat4:0,
			},
			{id:"10",
			 categorie:"Musique",
			 question:"Dans quel groupe officiait Lemmy Kilmister? ",
			 reponseA:"Led Zepplin",
			 reponseB:"Motörhead",
			 reponseC:"AC/DC",
			 reponseD:"Serge Berry et son orchestre ",
			 correct:"reponseB",
			 bonneReponse:"Motörhead",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:10,
			 pointscat4:0,
			},
			{id:"11",
			 categorie:"Musique",
			 question:"Qui chantait Tu veux mon zizi? ?",
			 reponseA:"Michel Delpech",
			 reponseB:"Garou ",
			 reponseC:"Franky Vincent",
			 reponseD:"Patrick Sebastien",
			 correct:"reponseC",
			 bonneReponse:"Franky Vincent",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:10,
			 pointscat4:0,
			},
			{id:"12",
			 categorie:"Musique",
			 question:"Que fait Dany Brillant lorsqu'il voit Suzette? ",
			 reponseA:"Il fuit pour sa vie",
			 reponseB:"Il perd la tête ",
			 reponseC:"Il mange des crêpes",
			 reponseD:"Il a une crise d'allergie",
			 correct:"reponseB",
			 bonneReponse:"Il perd la tête",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:10,
			 pointscat4:0,
			},
			{id:"13",
			 categorie:"Alcool",
			 question:"Pour quel pays a été créée  la bière nommée I.P.A?",
			 reponseA:"L'Inde",
			 reponseB:"La France ",
			 reponseC:"L'Angleterre",
			 reponseD:"La Belgique",
			 correct:"reponseA",
			 bonneReponse:"L'Inde",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:10,
			},
			{id:"14",
			 categorie:"Alcool",
			 question:"Quel est le dosage officiel d'un Dry Martini? ",
			 reponseA:"3 cl de bière, 2 cl de cidre",
			 reponseB:"6 cl de Gin, 1 cl de Vermouth sec",
			 reponseC:"12 cl de vodka, 12 cl de lait",
			 reponseD:"1 cl de whisky bas de gamme, 33cl de cola",
			 correct:"reponseB",
			 bonneReponse:"6 cl de Gin, 1 cl de Vermouth sec",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:10,
			},
			{id:"15",
			 categorie:"Alcool",
			 question:"Lequel de ces alcools est usuellement le plus fort ?",
			 reponseA:"La Vodka",
			 reponseB:"Le Passoa ",
			 reponseC:"Le Rhum Blanc",
			 reponseD:"Le Perrier",
			 correct:"reponseC",
			 bonneReponse:"Le Rhum Blanc",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:10,
			},
			{id:"16",
			 categorie:"Alcool",
			 question:"Lequel de ces pays ne produit pas de Whisky",
			 reponseA:"Le Japon",
			 reponseB:"La Finlande",
			 reponseC:"La Turquie",
			 reponseD:"La Hollande",
			 correct:"reponseC",
			 bonneReponse:"La Turquie",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:10,
			}

		];

		$scope.questionnaire = $scope.questions[$scope.numquestion];
		$scope.image = $scope.questions[$scope.numquestion].image;

		
	function cat (){
		if ($scope.numquestion < 16){
			$scope.domaine = $scope.questions[$scope.numquestion].categorie;
		}
		else{
			$scope.domaine = "";
		};
	}	
		
		
	$scope.clear = function () {
		cat();
		$scope.numquestion = 0;
		$scope.points = 0;
		$scope.categorie1 = 0;
		$scope.categorie2 = 0;
		$scope.categorie3 = 0;
		$scope.categorie4 = 0;
		$scope.domaine ="sport";
		$scope.visuel = "block";
		$scope.resultat = "none";
		$scope.texte = "";
		$scope.image = "";
		$scope.questionnaire = $scope.questions[$scope.numquestion];
		$scope.image = $scope.questions[$scope.numquestion].image;

					
    };
		
		$scope.valider = function() {
			
			if ($scope.reponse == $scope.questions[$scope.numquestion].correct)
			{
				$scope.points += $scope.questions[$scope.numquestion].points;
				$scope.categorie1 += $scope.questions[$scope.numquestion].pointscat1;
				$scope.categorie2 += $scope.questions[$scope.numquestion].pointscat2;
				$scope.categorie3 += $scope.questions[$scope.numquestion].pointscat3;
				$scope.categorie4 += $scope.questions[$scope.numquestion].pointscat4;
			}
			
			$scope.numquestion += 1;
			cat();
			
			if ($scope.numquestion >= 16)
			{
				$scope.questionnaire ="";
				$scope.visuel = "none";
				$scope.resultat = "block";
				
				if ($scope.points ==160)
				{
					$scope.texte = "Excellent !";
				}
				else if ($scope.categorie1 == 40)
				{
					$scope.texte = "Vous êtes doués en orthographe !";
				}
				else if ($scope.categorie2 == 40)
				{
					
					$scope.texte = "Vous êtes doués en Anglais !";
				}
				else if ($scope.categorie3 == 40)
				{
					$scope.texte = "Vous êtes doués en Musique !";
				}
				}
				else if ($scope.categorie4 ==40)
				{
					$scope.texte = "Vous êtes doués en... Alcool....";
				}

			
			else {
				$scope.questionnaire = $scope.questions[$scope.numquestion];
				$scope.image = $scope.questions[$scope.numquestion].image;
				
			}
			
			$scope.reponse = "";

		};
					
			$scope.domaine = $scope.questions[$scope.numquestion].categorie;
			
	}]);
	