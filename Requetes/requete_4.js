db.affairesCommune.aggregate([
	{
		$group: {
			_id: "$departement", 
			nb_affaires: {$sum: {$size: "$affaires"}},
			chomeurs_departement: {$sum: "$chomeurs_15_64_ans"}
		}
	},
	{
		$project: {
		  	nb_affaires: 1,
			affaires_chomeur: {$multiply: [{$divide: ["$nb_affaires", "$chomeurs_departement"]},1000]}
		}
	},
	{
		$sort: {
			affaires_age: -1
		}
	}
])