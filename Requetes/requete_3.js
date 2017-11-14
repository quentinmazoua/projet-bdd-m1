db.affairesCommune.aggregate([
	{
		$group: {
			_id: "$departement", 
			nb_affaires: {$sum: {$size: "$affaires"}}, 
			pop_departement: {$sum: "$population"}
		}
	},
	{
		$project: {
			affaires_habitant: {$multiply: [{$divide: ["$nb_affaires", "$pop_departement"]},100000]}
		}
	},
	{
		$sort: {
			affaires_habitant: -1
		}
	}
])